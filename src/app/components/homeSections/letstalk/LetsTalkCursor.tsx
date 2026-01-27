//cursor custom GSAP
export function LetsTalkCursor() {
  return (
    <div
      className="
        fixed top-0 left-0 z-50
        w-12 h-12
        -translate-x-1/2 -translate-y-1/2
        pointer-events-none
        hidden lg:flex items-center justify-center
      "
    >
      <svg
        width="40"
        height="37"
        viewBox="0 0 40 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 37H7.27273V14.8H0V37ZM40 16.65C40 14.615 38.3636 12.95 36.3636 12.95H24.8909L26.6182 4.4955L26.6727 3.9035C26.6727 3.145 26.3636 2.442 25.8727 1.9425L23.9455 0L11.9818 12.1915C11.3091 12.8575 10.9091 13.7825 10.9091 14.8V33.3C10.9091 35.335 12.5455 37 14.5455 37H30.9091C32.4182 37 33.7091 36.075 34.2545 34.743L39.7455 21.7005C39.9091 21.275 40 20.831 40 20.35V16.65Z"
          fill="#B6EF2E"
        />
      </svg>
    </div>
  )
}
