// LetsTalkOverlay.tsx
export function LetsTalkOverlay() {
  return (
    <div
      className="
        absolute inset-0 pointer-events-none
        transition-opacity duration-700
        opacity-100
      "
      style={{
        background: `
          radial-gradient(
            500px circle at var(--x) var(--y),
            rgba(200, 200, 255, 0.05),
            rgba(18, 18, 20, 0.95) 70%
          )
        `,
      }}
    />
  )
}
