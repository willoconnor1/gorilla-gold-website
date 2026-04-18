"use client"

import { useEffect, useRef } from "react"

interface RotatingLeafProps {
  width?: number
  height?: number
  className?: string
}

type Vec3 = [number, number, number]

export default function RotatingLeaf({
  width = 200,
  height = 160,
  className = "",
}: RotatingLeafProps) {
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

    // Leaf shape: slightly curved surface with an organic outline
    // Leaf profile: wider in the lower-middle, tapers to point at top
    const leafLength = 0.8
    const leafMaxW = 0.22
    const leafBotY = -0.3
    const leafTopY = leafBotY + leafLength
    const leafCurve = 0.06 // slight dome curvature

    // Leaf outline function: width at given y
    const getLeafWidth = (y: number): number => {
      const t = (y - leafBotY) / leafLength // 0 at bottom, 1 at top
      if (t <= 0 || t >= 1) return 0
      // Leaf shape: widest around 35% from bottom, tapers smoothly
      return leafMaxW * Math.sin(Math.PI * Math.pow(t, 0.7)) * Math.pow(1 - t * t, 0.2)
    }

    // Leaf surface curvature: z offset based on x position (slight dome)
    const getLeafZ = (x: number, w: number): number => {
      if (w < 0.001) return 0
      const nx = x / w
      return leafCurve * (1 - nx * nx)
    }

    // Surface dots (on the curved leaf surface)
    for (let y = leafBotY + 0.01; y <= leafTopY - 0.01; y += 0.025) {
      const w = getLeafWidth(y)
      if (w < 0.005) continue
      for (let x = -w; x <= w; x += 0.025) {
        const z = getLeafZ(x, w)
        dots.push([x, y, z])
        dots.push([x, y, -z * 0.3]) // slight back surface
      }
    }

    // Leaf outline (right side)
    const outlineRight: Vec3[] = []
    const outlineLeft: Vec3[] = []
    for (let y = leafBotY; y <= leafTopY; y += 0.012) {
      const w = getLeafWidth(y)
      const z = getLeafZ(w, w)
      outlineRight.push([w, y, z * 0.5])
      outlineLeft.push([-w, y, z * 0.5])
      dots.push([w, y, z * 0.5])
      dots.push([-w, y, z * 0.5])
    }

    // Right outline as edges
    for (let i = 0; i < outlineRight.length - 1; i++) {
      edges.push([outlineRight[i], outlineRight[i + 1]])
    }
    // Left outline as edges
    for (let i = 0; i < outlineLeft.length - 1; i++) {
      edges.push([outlineLeft[i], outlineLeft[i + 1]])
    }
    // Connect top point
    if (outlineRight.length > 0 && outlineLeft.length > 0) {
      edges.push([outlineRight[outlineRight.length - 1], outlineLeft[outlineLeft.length - 1]])
    }
    // Connect bottom point
    if (outlineRight.length > 0 && outlineLeft.length > 0) {
      edges.push([outlineRight[0], outlineLeft[0]])
    }

    // Midrib (central vein) - straight line up the middle with slight curve
    const midribPoints: Vec3[] = []
    for (let y = leafBotY; y <= leafTopY; y += 0.015) {
      const w = getLeafWidth(y)
      const z = getLeafZ(0, Math.max(w, 0.01))
      midribPoints.push([0, y, z])
      dots.push([0, y, z])
    }
    for (let i = 0; i < midribPoints.length - 1; i++) {
      edges.push([midribPoints[i], midribPoints[i + 1]])
    }

    // Side veins branching from midrib
    const numVeins = 6
    for (let vi = 1; vi <= numVeins; vi++) {
      const veinY = leafBotY + (leafLength * vi) / (numVeins + 1)
      const w = getLeafWidth(veinY)
      const mz = getLeafZ(0, Math.max(w, 0.01))

      // Right vein - curves slightly upward
      const rvPoints: Vec3[] = []
      for (let t = 0; t <= 1; t += 0.1) {
        const vx = w * t * 0.9
        const vy = veinY + t * 0.03 // slight upward angle
        const vz = getLeafZ(vx, w)
        rvPoints.push([vx, vy, vz])
        dots.push([vx, vy, vz])
      }
      for (let j = 0; j < rvPoints.length - 1; j++) {
        edges.push([rvPoints[j], rvPoints[j + 1]])
      }

      // Left vein - mirror
      const lvPoints: Vec3[] = []
      for (let t = 0; t <= 1; t += 0.1) {
        const vx = -w * t * 0.9
        const vy = veinY + t * 0.03
        const vz = getLeafZ(vx, w)
        lvPoints.push([vx, vy, vz])
        dots.push([vx, vy, vz])
      }
      for (let j = 0; j < lvPoints.length - 1; j++) {
        edges.push([lvPoints[j], lvPoints[j + 1]])
      }
    }

    // Cross-section rings (latitude-like curves across the leaf)
    for (let y = leafBotY + 0.08; y <= leafTopY - 0.08; y += 0.08) {
      const w = getLeafWidth(y)
      if (w < 0.01) continue
      const ring: Vec3[] = []
      for (let x = -w; x <= w; x += 0.015) {
        const z = getLeafZ(x, w)
        ring.push([x, y, z])
      }
      rings.push(ring)
    }

    // Stem below the leaf
    const stemR = 0.015
    const stemTop = leafBotY
    const stemBot = leafBotY - 0.25

    for (let y = stemBot; y <= stemTop; y += 0.02) {
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2
        dots.push([stemR * Math.cos(a), y, stemR * Math.sin(a)])
      }
    }

    // Stem rings
    for (let y = stemBot; y <= stemTop; y += 0.06) {
      const ring: Vec3[] = []
      for (let i = 0; i <= 16; i++) {
        const a = (i / 16) * Math.PI * 2
        ring.push([stemR * Math.cos(a), y, stemR * Math.sin(a)])
      }
      rings.push(ring)
    }

    // Stem center edge
    edges.push([[0, stemBot, 0], [0, stemTop, 0]])

    // Animation
    const tilt = 0.18
    let angle = 0
    let animId: number

    const render = () => {
      ctx.clearRect(0, 0, cw, ch)

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
