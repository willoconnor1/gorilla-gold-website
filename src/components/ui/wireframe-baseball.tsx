"use client"

import { useEffect, useRef } from "react"

interface RotatingBaseballProps {
  width?: number
  height?: number
  className?: string
}

type Vec3 = [number, number, number]

export default function RotatingBaseball({
  width = 200,
  height = 160,
  className = "",
}: RotatingBaseballProps) {
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

    const R = 0.35

    // Sphere surface dots - sparse so seam stands out
    for (let phi = 0.15; phi < Math.PI; phi += 0.18) {
      const ringR = R * Math.sin(phi)
      const ringY = R * Math.cos(phi)
      for (let theta = 0; theta < Math.PI * 2; theta += 0.25) {
        dots.push([ringR * Math.cos(theta), ringY, ringR * Math.sin(theta)])
      }
    }

    // Just equator and two subtle latitude rings
    for (const phi of [Math.PI * 0.33, Math.PI * 0.5, Math.PI * 0.67]) {
      const ringR = R * Math.sin(phi)
      const ringY = R * Math.cos(phi)
      const ring: Vec3[] = []
      for (let theta = 0; theta <= Math.PI * 2 + 0.01; theta += 0.1) {
        ring.push([ringR * Math.cos(theta), ringY, ringR * Math.sin(theta)])
      }
      rings.push(ring)
    }

    // Two longitude rings for subtle sphere shape
    for (const theta of [0, Math.PI / 2]) {
      const ring: Vec3[] = []
      for (let phi = 0; phi <= Math.PI + 0.01; phi += 0.1) {
        ring.push([
          R * Math.sin(phi) * Math.cos(theta),
          R * Math.cos(phi),
          R * Math.sin(phi) * Math.sin(theta),
        ])
      }
      rings.push(ring)
    }

    // Baseball seam - correct parametric equation from Paul Bourke
    // x = sin(pi/2 - (pi/2 - A)*cos(T)) * cos(T/2 + A*sin(2T))
    // y = sin(pi/2 - (pi/2 - A)*cos(T)) * sin(T/2 + A*sin(2T))
    // z = cos(pi/2 - (pi/2 - A)*cos(T))
    // T ranges 0 to 4*PI, A = 0.4 for baseball
    const A = 0.4
    const numStitchPts = 400

    // Helper: get seam point at parameter T (0 to 4*PI)
    const getSeamPoint = (T: number): Vec3 => {
      const p = Math.PI / 2 - (Math.PI / 2 - A) * Math.cos(T)
      const q = T / 2 + A * Math.sin(2 * T)
      return [
        R * Math.sin(p) * Math.cos(q),
        R * Math.sin(p) * Math.sin(q),
        R * Math.cos(p),
      ]
    }

    // Helper: get tangent at parameter T
    const getSeamTangent = (T: number): Vec3 => {
      const dt = 0.001
      const a = getSeamPoint(T - dt)
      const b = getSeamPoint(T + dt)
      return [b[0] - a[0], b[1] - a[1], b[2] - a[2]]
    }

    // Helper: offset seam point perpendicular to tangent, on sphere surface
    const offsetSeamPoint = (T: number, offset: number): Vec3 => {
      const pt = getSeamPoint(T)
      const tang = getSeamTangent(T)

      // Normal to sphere at this point
      const nx = pt[0] / R, ny = pt[1] / R, nz = pt[2] / R

      // Perpendicular = tangent x normal
      const px = tang[1] * nz - tang[2] * ny
      const py = tang[2] * nx - tang[0] * nz
      const pz = tang[0] * ny - tang[1] * nx
      const pLen = Math.sqrt(px * px + py * py + pz * pz)
      if (pLen < 0.0001) return pt

      // Offset point, then project back onto sphere
      const ox = pt[0] + (px / pLen) * offset
      const oy = pt[1] + (py / pLen) * offset
      const oz = pt[2] + (pz / pLen) * offset
      const oLen = Math.sqrt(ox * ox + oy * oy + oz * oz)

      return [ox * R / oLen, oy * R / oLen, oz * R / oLen]
    }

    // Two parallel seam lines with cross-stitches
    const seamGap = 0.02
    const seamLineA: Vec3[] = []
    const seamLineB: Vec3[] = []

    for (let i = 0; i <= numStitchPts; i++) {
      const T = (i / numStitchPts) * Math.PI * 4 // 0 to 4*PI
      const pA = offsetSeamPoint(T, seamGap)
      const pB = offsetSeamPoint(T, -seamGap)
      seamLineA.push(pA)
      seamLineB.push(pB)
      dots.push(pA)
      dots.push(pB)
    }

    // Seam line edges
    for (let i = 0; i < seamLineA.length - 1; i++) {
      edges.push([seamLineA[i], seamLineA[i + 1]])
    }
    for (let i = 0; i < seamLineB.length - 1; i++) {
      edges.push([seamLineB[i], seamLineB[i + 1]])
    }

    // Cross-stitches between the two parallel seam lines
    for (let i = 0; i < seamLineA.length - 1; i += 4) {
      edges.push([seamLineA[i], seamLineB[i]])
      dots.push(seamLineA[i])
      dots.push(seamLineB[i])
    }

    // Extra dots along center seam for visibility
    for (let i = 0; i <= numStitchPts; i += 2) {
      const T = (i / numStitchPts) * Math.PI * 4
      dots.push(getSeamPoint(T))
    }

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
        ctx.strokeStyle = `rgba(212, 168, 83, ${0.2 + avgDepth * 0.6})`
        ctx.lineWidth = 1.0
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
