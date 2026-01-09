export default function HeroLines() {
  return (
    <div className="relative overflow-hidden w-full h-80">
      <svg
        viewBox="0 0 1200 300"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full pointer-events-none draw-flow"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M0 90 C 400 200, 800 20, 1200 150"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.35"
        />

        <path
          d="M0 150 C 350 60, 850 260, 1200 120"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.25"
        />

        <path
          d="M0 210 C 450 300, 750 80, 1200 200"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.18"
        />
      </svg>
    </div>
  );
}
