'use client'

import { useEffect, useRef } from 'react'

export default function WaveLayer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const waves = [
      /* {
        amplitude: 30,
        wavelength: 180,
        speed: 0.02,
        color: 'rgba(53,238,223,1)',
      }, */
      {
        amplitude: 30,
        wavelength: 180,
        speed: 0.02,
        color: 'rgba(182,239,46,1)',
      },
      {
        amplitude: 45,
        wavelength: 240,
        speed: 0.015,
        color: 'rgba(30,41,59,1)',
      },
    ]

    function drawWave(wave: any, offsetY: number) {
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      for (let x = 0; x <= canvas.width; x++) {
        const y =
          Math.sin(x / wave.wavelength + time * wave.speed) * wave.amplitude +
          offsetY
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.closePath()
      ctx.fillStyle = wave.color
      ctx.fill()
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const baseY = canvas.height * 0.45

      waves.forEach((wave, index) => {
        drawWave(wave, baseY + index * 20)
      })

      time += 1
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden
    />
  )
}
