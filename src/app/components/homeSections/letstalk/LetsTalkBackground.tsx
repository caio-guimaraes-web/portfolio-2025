export function LetsTalkBackground() {
  return (
    <div
      className="
        absolute inset-0
        flex items-center justify-center
        pointer-events-none
        opacity-90
      "
    >
      <img
        src="/images/svg/mesh.svg"
        alt=""
        className="
          w-full max-w-[1200px]
          select-none
          animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]
        "
      />
    </div>
  )
}
