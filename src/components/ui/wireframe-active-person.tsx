"use client"

import { useEffect, useRef } from "react"

interface RotatingActivePersonProps {
  width?: number
  height?: number
  className?: string
}

type Vec3 = [number, number, number]

export default function RotatingActivePerson({
  width = 200,
  height = 160,
  className = "",
}: RotatingActivePersonProps) {
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

    // Helper: add dots along a line between two points
    const limb = (from: Vec3, to: Vec3, numDots: number, radius: number) => {
      for (let i = 0; i <= numDots; i++) {
        const t = i / numDots
        const cx = from[0] + (to[0] - from[0]) * t
        const cy = from[1] + (to[1] - from[1]) * t
        const cz = from[2] + (to[2] - from[2]) * t
        // Center dot
        dots.push([cx, cy, cz])
        // Cross-section dots for volume
        for (let a = 0; a < Math.PI * 2; a += Math.PI / 2) {
          dots.push([cx + radius * Math.cos(a), cy, cz + radius * Math.sin(a)])
        }
      }
      edges.push([from, to])
    }

    // Helper: sphere of dots for joints/head
    const sphere = (center: Vec3, r: number, density: number) => {
      for (let phi = 0; phi < Math.PI; phi += Math.PI / density) {
        const ringR = r * Math.sin(phi)
        const ringY = center[1] + r * Math.cos(phi)
        for (let theta = 0; theta < Math.PI * 2; theta += Math.PI * 2 / (density * 1.5)) {
          dots.push([
            center[0] + ringR * Math.cos(theta),
            ringY,
            center[2] + ringR * Math.sin(theta),
          ])
        }
      }
      // Rings around sphere
      for (let phi = Math.PI * 0.25; phi < Math.PI; phi += Math.PI * 0.5) {
        const ringR2 = r * Math.sin(phi)
        const ringY2 = center[1] + r * Math.cos(phi)
        const ring: Vec3[] = []
        for (let theta = 0; theta <= Math.PI * 2 + 0.01; theta += 0.2) {
          ring.push([
            center[0] + ringR2 * Math.cos(theta),
            ringY2,
            center[2] + ringR2 * Math.sin(theta),
          ])
        }
        rings.push(ring)
      }
    }

    // Helper: joint dot cluster
    const joint = (pos: Vec3, r: number) => {
      for (let i = 0; i < 8; i++) {
        const phi = (i / 8) * Math.PI
        for (let j = 0; j < 4; j++) {
          const theta = (j / 4 + i * 0.25) * Math.PI * 2
          dots.push([
            pos[0] + r * Math.sin(phi) * Math.cos(theta),
            pos[1] + r * Math.cos(phi),
            pos[2] + r * Math.sin(phi) * Math.sin(theta),
          ])
        }
      }
    }

    // Dynamic running/exercise pose
    // Person is in a jogging pose with arms and legs in stride

    // Joint positions
    const head: Vec3 = [0, 0.55, 0]
    const neck: Vec3 = [0, 0.46, 0]
    const shoulderL: Vec3 = [-0.13, 0.42, -0.02]
    const shoulderR: Vec3 = [0.13, 0.42, 0.02]

    // Arms in running motion - opposite to legs
    const elbowL: Vec3 = [-0.16, 0.3, 0.08]    // left arm forward
    const elbowR: Vec3 = [0.16, 0.32, -0.06]   // right arm back
    const handL: Vec3 = [-0.12, 0.22, 0.12]     // left hand forward
    const handR: Vec3 = [0.14, 0.38, -0.1]      // right hand back/up

    const chest: Vec3 = [0, 0.36, 0]
    const waist: Vec3 = [0, 0.18, 0]
    const hipL: Vec3 = [-0.06, 0.14, 0]
    const hipR: Vec3 = [0.06, 0.14, 0]

    // Legs in stride - opposite to arms
    const kneeL: Vec3 = [-0.08, -0.06, -0.06]   // left leg back
    const kneeR: Vec3 = [0.08, -0.02, 0.08]     // right leg forward/up
    const footL: Vec3 = [-0.06, -0.32, -0.1]    // left foot back
    const footR: Vec3 = [0.1, -0.22, 0.04]      // right foot forward

    // Build the body

    // Head
    sphere(head, 0.06, 6)

    // Neck
    limb(neck, head, 3, 0.015)

    // Torso - use multiple parallel lines for width
    const torsoR = 0.018
    limb(neck, shoulderL, 4, torsoR)
    limb(neck, shoulderR, 4, torsoR)
    limb(shoulderL, waist, 8, torsoR)
    limb(shoulderR, waist, 8, torsoR)
    // Center spine
    limb(neck, waist, 10, torsoR * 0.5)

    // Shoulder ring
    const shoulderRing: Vec3[] = []
    for (let t = 0; t <= 1; t += 0.05) {
      shoulderRing.push([
        shoulderL[0] + (shoulderR[0] - shoulderL[0]) * t,
        shoulderL[1] + (shoulderR[1] - shoulderL[1]) * t,
        shoulderL[2] + (shoulderR[2] - shoulderL[2]) * t,
      ])
    }
    rings.push(shoulderRing)

    // Hip ring
    const hipRing: Vec3[] = []
    for (let t = 0; t <= 1; t += 0.05) {
      hipRing.push([
        hipL[0] + (hipR[0] - hipL[0]) * t,
        hipL[1] + (hipR[1] - hipL[1]) * t,
        hipL[2] + (hipR[2] - hipL[2]) * t,
      ])
    }
    rings.push(hipRing)

    // Chest cross ring
    const chestRing: Vec3[] = []
    const chestW = 0.11
    for (let t = 0; t <= 1; t += 0.05) {
      const a = t * Math.PI * 2
      chestRing.push([chestW * Math.cos(a), chest[1], chestW * Math.sin(a) * 0.5])
    }
    rings.push(chestRing)

    // Waist cross ring
    const waistRing: Vec3[] = []
    const waistW = 0.07
    for (let t = 0; t <= 1; t += 0.05) {
      const a = t * Math.PI * 2
      waistRing.push([waistW * Math.cos(a), waist[1], waistW * Math.sin(a) * 0.4])
    }
    rings.push(waistRing)

    // Arms
    const armR = 0.015
    limb(shoulderL, elbowL, 5, armR)
    limb(elbowL, handL, 5, armR * 0.8)
    limb(shoulderR, elbowR, 5, armR)
    limb(elbowR, handR, 5, armR * 0.8)

    // Legs
    const legR = 0.02
    limb(hipL, kneeL, 6, legR)
    limb(kneeL, footL, 6, legR * 0.8)
    limb(hipR, kneeR, 6, legR)
    limb(kneeR, footR, 6, legR * 0.8)

    // Joints
    joint(shoulderL, 0.025)
    joint(shoulderR, 0.025)
    joint(elbowL, 0.018)
    joint(elbowR, 0.018)
    joint(handL, 0.012)
    joint(handR, 0.012)
    joint(hipL, 0.022)
    joint(hipR, 0.022)
    joint(kneeL, 0.02)
    joint(kneeR, 0.02)
    joint(footL, 0.015)
    joint(footR, 0.015)

    // Feet - small flat shapes
    const footLen = 0.06
    edges.push([footL, [footL[0], footL[1], footL[2] - footLen]])
    edges.push([footR, [footR[0], footR[1], footR[2] + footLen]])
    for (let t = 0; t <= 1; t += 0.25) {
      dots.push([footL[0], footL[1], footL[2] - footLen * t])
      dots.push([footR[0], footR[1], footR[2] + footLen * t])
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
        ctx.strokeStyle = `rgba(212, 168, 83, ${0.15 + avgDepth * 0.55})`
        ctx.lineWidth = 0.8
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
