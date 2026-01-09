export default function HeroLines() {
  return (
    <div className="relative overflow-auto min-w-screen h-75">
      <svg
        viewBox="0 0 1200 300"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="absolute top-0 left-0 min-w-screen h-50 draw-flow"
      >
        <path
          d="M0 90 C 400 200, 800 20, 1200 150"
          fill="none"
          stroke="#56A3A6"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.35"
        />

        <path
          d="M0 150 C 350 60, 850 260, 1200 120"
          fill="none"
          stroke="#56A3A6"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.25"
        />

        <path
          d="M0 210 C 450 300, 750 80, 1200 200"
          fill="none"
          stroke="#56A3A6"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.18"
        />
      </svg>
    </div>
  );
}
