"use client";

const steps = [
  {
    number: "01",
    title: "Libere o acesso",
    text: "Pagamento único, sem mensalidade.",
    icon: "👍",
  },
  {
    number: "02",
    title: "Escolha sua sessão",
    text: "Comece por onde fizer mais sentido hoje.",
    icon: "🎯",
  },
  {
    number: "03",
    title: "Pratique diariamente",
    text: "Poucos minutos que mudam seu estado interno.",
    icon: "⏰",
  },
];

export default function HowItWorks() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "rgba(167,139,250,0.03)",
        borderTop: "1px solid rgba(167,139,250,0.08)",
        borderBottom: "1px solid rgba(167,139,250,0.08)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2
            className="font-display reveal"
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 600,
              color: "var(--text-primary)",
              lineHeight: 1.15,
            }}
          >
            Simples. No seu tempo. No seu celular.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 24,
          }}
          className="how-grid"
        >
          {steps.map((step, i) => (
            <div key={i} className="card reveal" style={{ position: "relative", overflow: "hidden" }}>
              {/* Step number background */}
              <div
                className="font-display"
                style={{
                  position: "absolute",
                  top: -10,
                  right: 16,
                  fontSize: 80,
                  fontWeight: 700,
                  color: "rgba(167,139,250,0.06)",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {step.number}
              </div>

              <div
                style={{
                  fontSize: 32,
                  marginBottom: 16,
                  width: 56,
                  height: 56,
                  background: "rgba(167,139,250,0.1)",
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {step.icon}
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: 10,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .how-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
