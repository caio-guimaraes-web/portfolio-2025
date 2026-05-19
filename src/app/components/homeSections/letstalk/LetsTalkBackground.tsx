/* eslint-disable @next/next/no-img-element */

/* Explanation:
The best approach is to keep <img> because:
- It's lightweight and doesn't require the next/image handling.
- It doesn't gain any optimization with Image.
- It's simpler and more performant for animated SVGs.
- It avoids unexpected layout shifts, since SVG doesn't have native dimensions useful to Image.
Therefore, we will use <img> and simply ignore the ESLint rule locally. 
*/
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
