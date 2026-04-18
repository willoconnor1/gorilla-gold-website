"use client"

import { useEffect, useRef } from "react"

interface RotatingUmbrellaProps {
  width?: number
  height?: number
  className?: string
}

type Vec3 = [number, number, number]

export default function RotatingUmbrella({
  width = 200,
  height = 160,
  className = "",
}: RotatingUmbrellaProps) {
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

    // Canopy - dome (upper hemisphere)
    const canopyR = 0.35
    const canopyCy = 0.25
    const numRibs = 8

    // Canopy surface dots
    for (let phi = 0; phi < Math.PI / 2; phi += 0.1) {
      const ringR = canopyR * Math.cos(phi)
      const ringY = canopyCy + canopyR * Math.sin(phi) * 0.5
      for (let theta = 0; theta < Math.PI * 2; theta += 0.18) {
        dots.push([ringR * Math.cos(theta), ringY, ringR * Math.sin(theta)])
      }
    }

    // Canopy latitude rings
    for (let phi = 0.2; phi < Math.PI / 2; phi += 0.25) {
      const ringR = canopyR * Math.cos(phi)
      const ringY = canopyCy + canopyR * Math.sin(phi) * 0.5
      const ring: Vec3[] = []
      for (let theta = 0; theta <= Math.PI * 2 + 0.01; theta += 0.08) {
        ring.push([ringR * Math.cos(theta), ringY, ringR * Math.sin(theta)])
      }
      rings.push(ring)
    }

    // Bottom rim of canopy
    const rimRing: Vec3[] = []
    for (let theta = 0; theta <= Math.PI * 2 + 0.01; theta += 0.06) {
      rimRing.push([canopyR * Math.cos(theta), canopyCy, canopyR * Math.sin(theta)])
    }
    rings.push(rimRing)

    // Ribs (longitude lines from tip to rim)
    for (let i = 0; i < numRibs; i++) {
      const theta = (i / numRibs) * Math.PI * 2
      const ribPoints: Vec3[] = []
      for (let phi = 0; phi <= Math.PI / 2; phi += 0.06) {
        const rr = canopyR * Math.cos(phi)
        const ry = canopyCy + canopyR * Math.sin(phi) * 0.5
        ribPoints.push([rr * Math.cos(theta), ry, rr * Math.sin(theta)])
      }
      for (let j = 0; j < ribPoints.length - 1; j++) {
        edges.push([ribPoints[j], ribPoints[j + 1]])
      }
      for (const p of ribPoints) {
        dots.push(p)
      }
    }

    // Tip dot
    dots.push([0, canopyCy + canopyR * 0.5, 0])

    // Scalloped bottom edge
    for (let i = 0; i < numRibs; i++) {
      const thetaA = (i / numRibs) * Math.PI * 2
      const thetaB = ((i + 1) / numRibs) * Math.PI * 2
      for (let t = 0; t <= 1; t += 0.1) {
        const theta = thetaA + (thetaB - thetaA) * t
        const dip = Math.sin(t * Math.PI) * 0.03
        dots.push([canopyR * Math.cos(theta), canopyCy - dip, canopyR * Math.sin(theta)])
      }
    }

    // Pole (shaft)
    const poleR = 0.01
    const poleTop = canopyCy
    const poleBot = -0.5

    for (let y = poleBot; y <= poleTop; y += 0.04) {
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2
        dots.push([poleR * Math.cos(a), y, poleR * Math.sin(a)])
      }
    }
    edges.push([[0, poleTop, 0], [0, poleBot, 0]])

    // J-hook handle
    const hookR = 0.05
    const hookCx = hookR
    const hookCy2 = poleBot
    const hookPoints: Vec3[] = []
    for (let a = Math.PI / 2; a <= Math.PI * 1.5; a += 0.08) {
      const p: Vec3 = [hookCx + hookR * Math.cos(a), hookCy2 + hookR * Math.sin(a), 0]
      hookPoints.push(p)
      dots.push(p)
    }
    for (let j = 0; j < hookPoints.length - 1; j++) {
      edges.push([hookPoints[j], hookPoints[j + 1]])
    }

    // Rain data - columns of rain around the umbrella
    interface RainColumn {
      x: number
      z: number
      topY: number
      botY: number
      phase: number
      speed: number
    }

    const rainColumns: RainColumn[] = []
    // Only rain that hits the canopy (no rain falling outside)
    for (let i = 0; i < 30; i++) {
      // Generate positions within the canopy radius
      const angle2 = Math.random() * Math.PI * 2
      const r = Math.random() * canopyR * 0.88
      const x = r * Math.cos(angle2)
      const z = r * Math.sin(angle2)
      const frac = r / canopyR
      const phi = Math.acos(Math.min(frac, 1))
      const botY = canopyCy + canopyR * Math.sin(phi) * 0.5

      rainColumns.push({
        x,
        z,
        topY: 0.85,
        botY,
        phase: Math.random(),
        speed: 0.5 + Math.random() * 0.4,
      })
    }

    // Cascade streams - water falling off the rim
    interface CascadeStream {
      theta: number
      phase: number
      speed: number
    }

    const cascadeStreams: CascadeStream[] = []
    for (let i = 0; i < 10; i++) {
      cascadeStreams.push({
        theta: (i / 10) * Math.PI * 2 + Math.random() * 0.15,
        phase: Math.random(),
        speed: 0.25 + Math.random() * 0.15,
      })
    }

    // Animation
    const tilt = 0.18
    let angle = 0
    let animId: number

    const render = () => {
      ctx.clearRect(0, 0, cw, ch)

      // 1. Draw animated rain (behind umbrella)
      const time = angle * 2

      for (const col of rainColumns) {
        const cycleLen = col.topY - col.botY
        if (cycleLen <= 0) continue

        // 3 rain dots per column, animated downward
        for (let d = 0; d < 3; d++) {
          const t = ((time * col.speed + col.phase + d * 0.33) % 1)
          const ry = col.topY - t * cycleLen

          const rp: Vec3 = [col.x, ry, col.z]
          const rr = rotX(rotY(rp, angle), tilt)
          const [rpx, rpy] = proj(rr)
          const rDepth = (rr[2] + 1) / 2

          // Rain dot
          ctx.beginPath()
          ctx.arc(rpx, rpy, 0.8 + rDepth * 0.6, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(212, 168, 83, ${0.1 + rDepth * 0.3})`
          ctx.fill()

          // Rain streak
          const rp2: Vec3 = [col.x, ry + 0.04, col.z]
          const rr2 = rotX(rotY(rp2, angle), tilt)
          const [rpx2, rpy2] = proj(rr2)
          ctx.beginPath()
          ctx.moveTo(rpx, rpy)
          ctx.lineTo(rpx2, rpy2)
          ctx.strokeStyle = `rgba(212, 168, 83, ${0.08 + rDepth * 0.25})`
          ctx.lineWidth = 0.6
          ctx.stroke()
        }
      }

      // 2. Draw cascade water off rim
      for (const stream of cascadeStreams) {
        const rimX = canopyR * Math.cos(stream.theta)
        const rimZ = canopyR * Math.sin(stream.theta)

        for (let d = 0; d < 3; d++) {
          const t = ((time * stream.speed + stream.phase + d * 0.33) % 1)
          const fallDist = t * 0.3
          const spread = t * 0.04
          const cascX = rimX * (1 + spread)
          const cascZ = rimZ * (1 + spread)
          const cascY = canopyCy - fallDist

          const cp: Vec3 = [cascX, cascY, cascZ]
          const cr = rotX(rotY(cp, angle), tilt)
          const [cpx, cpy] = proj(cr)
          const cDepth = (cr[2] + 1) / 2
          const cAlpha = (1 - t) * (0.1 + cDepth * 0.3)

          ctx.beginPath()
          ctx.arc(cpx, cpy, 0.8 + cDepth * 0.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(212, 168, 83, ${cAlpha})`
          ctx.fill()
        }
      }

      // 3. Draw umbrella body (dots, rings, edges)
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
        ctx.lineWidth = 1
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
