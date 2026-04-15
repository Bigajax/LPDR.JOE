"use client";

const bullets = [
  "Começa algo novo, mas não sustenta",
  "Sabe o que precisa fazer, mas não consegue agir",
  "Se pega repetindo pensamentos antigos",
  "Sente que sua vida poderia estar em outro nível",
];

export default function Identification() {
  return (
    <section
      style={{
        padding: "clamp(4.75rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2rem) clamp(4rem, 7vw, 6rem)",
        background: "#F2EBE0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 60% 50% at 80% 10%, rgba(196,152,60,0.05) 0%, transparent 55%),
          radial-gradient(ellipse 50% 60% at 10% 90%, rgba(196,152,60,0.05) 0%, transparent 50%)
        `,
      }} />

      <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label-ink" style={{ marginBottom: "1.25rem" }}>
            Reconhecimento
          </span>
          <h2
            className="font-display reveal"
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 2.6rem)",
              fontWeight: 600,
              color: "var(--ink)",
              lineHeight: 1.3,
              marginBottom: "0",
            }}
          >
            Talvez você esteja passando por isso:
          </h2>
        </div>

        <div
          className="reveal"
          style={{
            background: "rgba(255,252,248,0.85)",
            border: "1px solid rgba(28,20,40,0.08)",
            borderRadius: 16,
            padding: "clamp(1.75rem, 4vw, 2.5rem)",
            boxShadow: "0 2px 16px rgba(28,20,40,0.06)",
            marginBottom: "2rem",
          }}
        >
          {bullets.map((item, idx) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: idx === 0 ? "0 0 1.25rem" : "1.25rem 0",
                borderBottom: idx < bullets.length - 1 ? "1px solid rgba(28,20,40,0.07)" : "none",
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "rgba(148,136,196,0.10)",
                  border: "1px solid rgba(148,136,196,0.22)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                  fontSize: 10,
                  color: "rgba(148,136,196,0.70)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                ✦
              </span>
              <p
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.0625rem)",
                  color: "var(--ink)",
                  lineHeight: 1.65,
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center" }}>
          <p
            className="font-display"
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.625rem)",
              fontWeight: 600,
              color: "var(--ink)",
              lineHeight: 1.4,
              fontStyle: "italic",
            }}
          >
            Isso não é falta de força.{" "}
            <span style={{ color: "var(--gold)", fontStyle: "normal" }}>É padrão.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
