export default function WaveDivider({ bg, fill, flip = false }: { bg: string; fill: string; flip?: boolean }) {
  return (
    <div style={{ display: "block", lineHeight: 0, background: bg, marginBottom: -1 }}>
      <svg
        viewBox="0 0 1440 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", transform: flip ? "scaleX(-1)" : "none" }}
        preserveAspectRatio="none"
      >
        <path
          d="M0 36 C180 72 360 0 540 36 C720 72 900 0 1080 36 C1260 72 1380 18 1440 36 L1440 72 L0 72 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
