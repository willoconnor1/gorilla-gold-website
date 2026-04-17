"use client"

import { useEffect, useRef } from "react"

interface RotatingGolfClubProps {
  width?: number
  height?: number
  className?: string
}

type Vec3 = [number, number, number]

export default function RotatingGolfClub({
  width = 320,
  height = 300,
  className = "",
}: RotatingGolfClubProps) {
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

    // 3D rotation helpers
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

    // Geometry generation
    const dots: Vec3[] = []
    const rings: Vec3[][] = []
    const edges: [Vec3, Vec3][] = []

    // -- Grip (top section, thicker with texture bands) --
    const gripR = 0.038
    const gripBot = 0.4
    const gripTop = 0.88
    for (let y = gripBot; y <= gripTop; y += 0.018) {
      for (let i = 0; i < 18; i++) {
        const a = (i / 18) * Math.PI * 2
        dots.push([gripR * Math.cos(a), y, gripR * Math.sin(a)])
      }
    }
    for (let y = gripBot; y <= gripTop; y += 0.04) {
      const ring: Vec3[] = []
      for (let i = 0; i <= 36; i++) {
        const a = (i / 36) * Math.PI * 2
        ring.push([gripR * Math.cos(a), y, gripR * Math.sin(a)])
      }
      rings.push(ring)
    }
    // Grip cap (butt end disc)
    for (let r = 0; r <= gripR; r += 0.012) {
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2
        dots.push([r * Math.cos(a), gripTop, r * Math.sin(a)])
      }
    }

    // -- Shaft (thin cylinder) --
    const shaftR = 0.011
    const shaftBot = -0.38
    const shaftTop = 0.4
    for (let y = shaftBot; y <= shaftTop; y += 0.035) {
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2
        dots.push([shaftR * Math.cos(a), y, shaftR * Math.sin(a)])
      }
    }
    for (let y = shaftBot; y <= shaftTop; y += 0.15) {
      const ring: Vec3[] = []
      for (let i = 0; i <= 24; i++) {
        const a = (i / 24) * Math.PI * 2
        ring.push([shaftR * Math.cos(a), y, shaftR * Math.sin(a)])
      }
      rings.push(ring)
    }

    // -- Hosel (shaft-to-head transition) --
    const hoselR = 0.015
    for (let y = -0.44; y <= -0.38; y += 0.015) {
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2
        dots.push([hoselR * Math.cos(a), y, hoselR * Math.sin(a)])
      }
    }

    // -- Club head (iron blade, offset from shaft center) --
    const hx = 0.065
    const hy = -0.5
    const hz = 0
    const hw = 0.15
    const hh = 0.1
    const hd = 0.022
    const hsp = 0.014

    // Front and back faces
    for (let x = -hw / 2; x <= hw / 2; x += hsp) {
      for (let y = -hh / 2; y <= hh / 2; y += hsp) {
        dots.push([hx + x, hy + y, hz + hd / 2])
        dots.push([hx + x, hy + y, hz - hd / 2])
      }
    }
    // Left and right faces
    for (let z = -hd / 2; z <= hd / 2; z += hsp) {
      for (let y = -hh / 2; y <= hh / 2; y += hsp) {
        dots.push([hx - hw / 2, hy + y, hz + z])
        dots.push([hx + hw / 2, hy + y, hz + z])
      }
    }
    // Top and bottom faces
    for (let x = -hw / 2; x <= hw / 2; x += hsp) {
      for (let z = -hd / 2; z <= hd / 2; z += hsp) {
        dots.push([hx + x, hy + hh / 2, hz + z])
        dots.push([hx + x, hy - hh / 2, hz + z])
      }
    }

    // Club head edge wireframe
    const corners: Vec3[] = [
      [hx - hw / 2, hy - hh / 2, hz - hd / 2],
      [hx + hw / 2, hy - hh / 2, hz - hd / 2],
      [hx + hw / 2, hy + hh / 2, hz - hd / 2],
      [hx - hw / 2, hy + hh / 2, hz - hd / 2],
      [hx - hw / 2, hy - hh / 2, hz + hd / 2],
      [hx + hw / 2, hy - hh / 2, hz + hd / 2],
      [hx + hw / 2, hy + hh / 2, hz + hd / 2],
      [hx - hw / 2, hy + hh / 2, hz + hd / 2],
    ]
    const edgeIdx = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ]
    for (const [a, b] of edgeIdx) {
      edges.push([corners[a], corners[b]])
    }

    // Animation
    const tilt = 0.18
    let angle = 0
    let animId: number

    const render = () => {
      ctx.clearRect(0, 0, cw, ch)

      // Transform dots and sort by depth (back to front)
      const projected: { x: number; y: number; z: number }[] = []
      for (const d of dots) {
        const r = rotX(rotY(d, angle), tilt)
        const [px, py] = proj(r)
        projected.push({ x: px, y: py, z: r[2] })
      }
      projected.sort((a, b) => a.z - b.z)

      // Draw dots with depth-based opacity and size
      for (const d of projected) {
        const depth = (d.z + 1) / 2
        ctx.beginPath()
        ctx.arc(d.x, d.y, 0.7 + depth * 1.0, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212, 168, 83, ${0.1 + depth * 0.6})`
        ctx.fill()
      }

      // Draw wireframe rings
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

      // Draw club head edge lines
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
