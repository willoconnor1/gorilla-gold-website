"use client"

import { useEffect, useRef } from "react"

interface RotatingSweatyHandProps {
  width?: number
  height?: number
  className?: string
}

type Vec3 = [number, number, number]

export default function RotatingSweatyHand({
  width = 200,
  height = 160,
  className = "",
}: RotatingSweatyHandProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const cw = Math.min(width, window.innerWidth - 40)
    const ch = Math.min(height, window.innerHeight - 100)
    const dpr = window.devicePixelRatio || 1
    canvas.width = cw * dpr
    canvas.height = ch * dpr
    canvas.style.width = `${cw}px`
    canvas.style.height = `${ch}px`
    ctx.scale(dpr, dpr)

    const scale = Math.min(cw, ch) * 0.38
    const centerX = cw / 2
    const centerY = ch / 2

    const rotY = (p: Vec3, a: number): Vec3 => {
      const c = Math.cos(a), s = Math.sin(a)
      return [p[0] * c + p[2] * s, p[1], -p[0] * s + p[2] * c]
    }
    const rotX = (p: Vec3, a: number): Vec3 => {
      const c = Math.cos(a), s = Math.sin(a)
      return [p[0], p[1] * c - p[2] * s, p[1] * s + p[2] * c]
    }
    const proj = (p: Vec3): [number, number] => [
      centerX + p[0] * scale,
      centerY - p[1] * scale,
    ]

    const dots: Vec3[] = []
    const rings: Vec3[][] = []
    const edges: [Vec3, Vec3][] = []

    // Palm - flat rounded shape with thickness
    const palmW = 0.14
    const palmH = 0.18
    const palmCy = -0.05
    const palmD = 0.04

    // Palm surface dots (front and back)
    for (let x = -palmW; x <= palmW; x += 0.025) {
      for (let y = palmCy - palmH; y <= palmCy + palmH; y += 0.025) {
        const nx = x / palmW
        const ny = (y - palmCy) / palmH
        if (nx * nx + ny * ny <= 1) {
          dots.push([x, y, palmD / 2])
          dots.push([x, y, -palmD / 2])
        }
      }
    }

    // Palm outline rings
    for (const z of [palmD / 2, -palmD / 2]) {
      const ring: Vec3[] = []
      for (let a = 0; a <= Math.PI * 2 + 0.01; a += 0.08) {
        ring.push([palmW * Math.cos(a), palmCy + palmH * Math.sin(a), z])
      }
      rings.push(ring)
    }

    // Palm edge dots
    for (let a = 0; a < Math.PI * 2; a += 0.06) {
      dots.push([palmW * Math.cos(a), palmCy + palmH * Math.sin(a), 0])
    }

    // Fingers - 4 flat strips extending from palm top
    const fingers = [
      { cx: -0.095, len: 0.2, w: 0.022 },   // pinky
      { cx: -0.035, len: 0.28, w: 0.024 },   // ring
      { cx: 0.03, len: 0.32, w: 0.026 },     // middle (longest)
      { cx: 0.09, len: 0.26, w: 0.024 },     // index
    ]

    const fingerBaseY = palmCy + palmH * 0.75
    const fingerTips: Vec3[] = []

    for (const f of fingers) {
      const tipY = fingerBaseY + f.len
      fingerTips.push([f.cx, tipY, 0])

      // Finger surface dots
      for (let y = fingerBaseY; y <= tipY; y += 0.02) {
        for (const xOff of [-f.w, 0, f.w]) {
          dots.push([f.cx + xOff, y, palmD / 2 * 0.7])
          dots.push([f.cx + xOff, y, -palmD / 2 * 0.7])
        }
      }

      // Finger outline edges
      edges.push([[f.cx - f.w, fingerBaseY, 0], [f.cx - f.w, tipY, 0]])
      edges.push([[f.cx + f.w, fingerBaseY, 0], [f.cx + f.w, tipY, 0]])
      // Fingertip arc
      for (let a = -Math.PI / 2; a <= Math.PI / 2; a += 0.3) {
        const x1 = f.cx + f.w * Math.cos(a)
        const y1 = tipY + f.w * Math.sin(a)
        const x2 = f.cx + f.w * Math.cos(a + 0.3)
        const y2 = tipY + f.w * Math.sin(a + 0.3)
        edges.push([[x1, y1, 0], [x2, y2, 0]])
      }

      // Knuckle ring at finger base
      const ring: Vec3[] = []
      for (let z = -palmD / 2 * 0.7; z <= palmD / 2 * 0.7; z += 0.008) {
        ring.push([f.cx - f.w, fingerBaseY, z])
      }
      for (let z = -palmD / 2 * 0.7; z <= palmD / 2 * 0.7; z += 0.008) {
        ring.push([f.cx + f.w, fingerBaseY, z])
      }
      rings.push(ring)

      // Finger joint lines (creases)
      const jointY1 = fingerBaseY + f.len * 0.33
      const jointY2 = fingerBaseY + f.len * 0.6
      edges.push([[f.cx - f.w, jointY1, 0], [f.cx + f.w, jointY1, 0]])
      edges.push([[f.cx - f.w, jointY2, 0], [f.cx + f.w, jointY2, 0]])
    }

    // Thumb - angled outward from right side of palm
    const thumbBase: Vec3 = [palmW * 0.7, palmCy - palmH * 0.2, palmD / 2 * 0.5]
    const thumbTip: Vec3 = [palmW + 0.14, palmCy + palmH * 0.15, palmD / 2 * 0.3]
    fingerTips.push(thumbTip)

    // Thumb dots
    for (let t = 0; t <= 1; t += 0.05) {
      const x = thumbBase[0] + (thumbTip[0] - thumbBase[0]) * t
      const y = thumbBase[1] + (thumbTip[1] - thumbBase[1]) * t
      const z = thumbBase[2] + (thumbTip[2] - thumbBase[2]) * t
      const tw = 0.03 * (1 - t * 0.3)
      // Dots around thumb cross-section
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 3) {
        dots.push([x + tw * Math.cos(a), y, z + tw * Math.sin(a)])
      }
    }
    edges.push([thumbBase, thumbTip])

    // Wrist area - slight narrowing below palm
    const wristY = palmCy - palmH
    const wristW = palmW * 0.7
    for (let x = -wristW; x <= wristW; x += 0.02) {
      dots.push([x, wristY, palmD / 2])
      dots.push([x, wristY, -palmD / 2])
    }

    // Drip data - animated drops from fingertips and palm bottom
    interface Drip {
      x: number
      z: number
      startY: number
      phase: number
      speed: number
    }

    const drips: Drip[] = []

    // Drips from each fingertip
    for (const tip of fingerTips) {
      for (let d = 0; d < 3; d++) {
        drips.push({
          x: tip[0] + (Math.random() - 0.5) * 0.02,
          z: tip[2],
          startY: tip[1],
          phase: d * 0.33 + Math.random() * 0.2,
          speed: 0.4 + Math.random() * 0.3,
        })
      }
    }

    // Drips from palm bottom
    for (let i = 0; i < 6; i++) {
      const angle2 = ((i + 0.5) / 6) * Math.PI + Math.PI
      drips.push({
        x: palmW * 0.7 * Math.cos(angle2),
        z: 0,
        startY: palmCy - palmH,
        phase: Math.random(),
        speed: 0.3 + Math.random() * 0.2,
      })
    }

    // Animation
    const tilt = 0.18
    let angle = 0
    let animId: number

    const render = () => {
      ctx.clearRect(0, 0, cw, ch)

      // Draw hand (dots, rings, edges)
      const projected: { x: number; y: number; z: number }[] = []
      for (const d of dots) {
        const r = rotX(rotY(d, angle), tilt)
        const [px, py] = proj(r)
        projected.push({ x: px, y: py, z: r[2] })
      }
      projected.sort((a, b) => a.z - b.z)

      for (const d of projected) {
        const depth = (d.z + 1) / 2
        ctx.beginPath()
        ctx.arc(d.x, d.y, 0.7 + depth * 1.0, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212, 168, 83, ${0.1 + depth * 0.6})`
        ctx.fill()
      }

      for (const ring of rings) {
        ctx.beginPath()
        let zSum = 0
        for (let i = 0; i < ring.length; i++) {
          const r = rotX(rotY(ring[i], angle), tilt)
          const [px, py] = proj(r)
          zSum += r[2]
          if (i === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        const avgDepth = (zSum / ring.length + 1) / 2
        ctx.strokeStyle = `rgba(212, 168, 83, ${0.05 + avgDepth * 0.2})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      for (const [a, b] of edges) {
        const ra = rotX(rotY(a, angle), tilt)
        const rb = rotX(rotY(b, angle), tilt)
        const [ax, ay] = proj(ra)
        const [bx, by] = proj(rb)
        const avgDepth = ((ra[2] + rb[2]) / 2 + 1) / 2
        ctx.beginPath()
        ctx.moveTo(ax, ay)
        ctx.lineTo(bx, by)
        ctx.strokeStyle = `rgba(212, 168, 83, ${0.15 + avgDepth * 0.55})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // Animated drips
      const time = angle * 2
      for (const drip of drips) {
        const cycleLen = 0.35
        const t = ((time * drip.speed + drip.phase) % 1)
        const dropY = drip.startY - t * cycleLen

        // Main drip dot
        const dripPos: Vec3 = [drip.x, dropY, drip.z]
        const rd = rotX(rotY(dripPos, angle), tilt)
        const [dx, dy] = proj(rd)
        const dDepth = (rd[2] + 1) / 2
        const dAlpha = (1 - t) * (0.1 + dDepth * 0.5)

        // Teardrop shape: dot + short streak above
        ctx.beginPath()
        ctx.arc(dx, dy, 1.0 + dDepth * 0.8, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212, 168, 83, ${dAlpha})`
        ctx.fill()

        // Streak trailing above the drop
        const streakPos: Vec3 = [drip.x, dropY + 0.02, drip.z]
        const rs = rotX(rotY(streakPos, angle), tilt)
        const [sx, sy] = proj(rs)
        ctx.beginPath()
        ctx.moveTo(dx, dy)
        ctx.lineTo(sx, sy)
        ctx.strokeStyle = `rgba(212, 168, 83, ${dAlpha * 0.6})`
        ctx.lineWidth = 0.5
        ctx.stroke()

        // Secondary smaller drops (trail)
        if (t > 0.15) {
          const trail: Vec3 = [drip.x, dropY + 0.06, drip.z]
          const rt = rotX(rotY(trail, angle), tilt)
          const [tx, ty] = proj(rt)
          ctx.beginPath()
          ctx.arc(tx, ty, 0.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(212, 168, 83, ${dAlpha * 0.3})`
          ctx.fill()
        }
      }
    }

    const animate = () => {
      angle += 0.012
      render()
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => cancelAnimationFrame(animId)
  }, [width, height])

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-auto"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  )
}
