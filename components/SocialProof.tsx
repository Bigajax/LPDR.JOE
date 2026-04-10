"use client";
import CountUp from "./CountUp";

const badges = [
  { value: 5,     display: null,    suffix: "",  label: "Sessões",   sub: "guiadas",   isNum: true  },
  { value: 7,     display: "5–7",   suffix: "",  label: "Minutos",   sub: "por dia",   isNum: false },
  { value: null,  display: "✦",     suffix: "",  label: "Protocolo", sub: "testado",   isNum: false },
  { value: null,  display: "∞",     suffix: "",  label: "Acesso",    sub: "vitalício", isNum: false },
];

export default function SocialProof() {
  return (
    <section style={{ padding: "7rem 2rem 6rem", position: "relative", overflow: "hidden" }}>
      {/* Gradient mesh background */}
      <div style={{
        position: "absolute", inset: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 15% 20%, rgba(192,180,224,0.10) 0%, transparent 60%),
          radial-gradient(ellipse 60% 70% at 85% 80%, rgba(196,152,60,0.06) 0%, transparent 55%),
          linear-gradient(160deg, #f5f0ff 0%, #F2EBE0 40%, #ede8da 100%)
        `,
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" }}>
        <span className="section-label-ink reveal" style={{ marginBottom: "1.25rem" }}>A Ciência</span>

        <h2
          className="font-display reveal"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.6rem)", fontWeight: 600, color: "var(--ink)", lineHeight: 1.35, marginBottom: "0.75rem", fontStyle: "italic" }}
        >
          "Quando você muda a forma como se apresenta ao mundo,{" "}
          <span style={{ color: "var(--lavender)", fontStyle: "normal" }}>o mundo começa a responder diferente.</span>"
        </h2>

        <p
          className="font-display reveal"
          style={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)", color: "var(--ink-muted)", lineHeight: 1.75, marginBottom: "0.5rem", fontStyle: "italic" }}
        >
          A realidade começa dentro de você.
        </p>
        <p
          className="font-display reveal"
          style={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)", color: "var(--ink-muted)", lineHeight: 1.75, marginBottom: "4rem", fontStyle: "italic" }}
        >
          — Dr. Joe Dispenza
        </p>

        <div className="badge-grid reveal" data-stagger>
          {badges.map((b) => (
            <div
              key={b.label}
              className="reveal"
              style={{
                background: "rgba(255,252,248,0.80)",
                border: "1px solid rgba(28,20,40,0.09)",
                borderRadius: 16,
                padding: "2rem 1.25rem",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
                boxShadow: "0 2px 16px rgba(28,20,40,0.06), inset 0 1px 0 rgba(255,255,255,0.80)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(28,20,40,0.10), inset 0 1px 0 rgba(255,255,255,0.80)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(28,20,40,0.06), inset 0 1px 0 rgba(255,255,255,0.80)";
              }}
            >
              <div className="font-display gold-text" style={{ fontSize: "2.25rem", fontWeight: 700, lineHeight: 1, marginBottom: "0.625rem" }}>
                {b.isNum && b.value !== null
                  ? <CountUp to={b.value} suffix={b.suffix} duration={1400} />
                  : b.display}
              </div>
              <span className="font-mono" style={{ fontSize: "0.6875rem", color: "var(--ink-dim)", letterSpacing: "0.14em", textTransform: "uppercase", display: "block", marginBottom: "0.2rem" }}>
                {b.label}
              </span>
              <span className="font-mono" style={{ fontSize: "0.625rem", color: "rgba(196,152,60,0.55)", letterSpacing: "0.10em", textTransform: "uppercase" }}>
                {b.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
