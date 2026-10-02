import svgPaths from "./svg-3xc0i8l42e";

export default function Frame() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame 43">
          <path d={svgPaths.p3fc2b700} fill="url(#paint0_radial_2064_731)" id="shield" />
          <path d={svgPaths.p2f0dc370} fill="var(--fill-0, #A8741D)" id="shield (Stroke)" />
          <path d={svgPaths.pfca2e80} fill="var(--fill-0, #5C3B00)" id="crown" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(20 20) rotate(-90) scale(28.2843)" gradientUnits="userSpaceOnUse" id="paint0_radial_2064_731" r="1">
            <stop stopColor="#FFD77A" />
            <stop offset="0.5" stopColor="#F0B94A" />
            <stop offset="1" stopColor="#C8902F" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}