"use client";
import CheckoutButton from "./CheckoutButton";

const steps = [
  {
    number: "1",
    label: "Potencial",
    title: "Criar seu novo potencial",
    text: "Defina com clareza quem você está se tornando — não apenas o que quer, mas o estado de quem já vive isso.",
  },
  {
    number: "2",
    label: "Sintonia",
    title: "Sintonizar novos estados",
    text: "Aprenda a gerar intencionalmente o estado emocional de quem já alcançou o que você busca.",
  },
  {
    number: "3",
    label: "Recondicionamento",
    title: "Recondicionar mente e corpo",
    text: "Treine esse estado até que mente e corpo respondam em coerência. Isso é o que muda o padrão.",
  },
  {
    number: "4",
    label: "Aplicação",
    title: "Aplicar isso na sua realidade",
    text: "O protocolo não é teoria. É prática diária, guiada, de 7 minutos — até o novo estado se tornar o seu normal.",
  },
];

export default function Solution() {
  return (
    <section
      style={{
        padding: "clamp(4.75rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2rem) clamp(4rem, 7vw, 6rem)",
        position: "relative",
        overflow: "hidden",
        background: "#F2EBE0",
      }}
    >
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 70% 50% at 80% 10%, rgba(196,152,60,0.05) 0%, transparent 55%),
          radial-gradient(ellipse 50% 60% at 10% 90%, rgba(196,152,60,0.06) 0%, transparent 50%)
        `,
      }} />

      <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Solution block header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(1.5rem, 4vw, 2.5rem)" }}>
          <span className="section-label-ink reveal" style={{ marginBottom: "1.25rem" }}>O Protocolo</span>
          <h2
            className="font-display reveal"
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 2.6rem)",
              fontWeight: 600,
              color: "var(--ink)",
              lineHeight: 1.35,
              maxWidth: 640,
              margin: "0 auto 1.25rem",
            }}
          >
            Esse protocolo foi criado para isso.
          </h2>
          <div
            className="reveal"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "clamp(1.5rem, 4vw, 3rem)",
              flexWrap: "wrap",
              marginBottom: "3rem",
            }}
          >
            {[
              "Reprogramar seu estado interno",
              "Romper padrões automáticos",
              "Criar uma nova identidade emocional",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <span style={{ color: "var(--gold)", fontSize: 14 }}>✦</span>
                <p style={{ fontSize: "0.9375rem", color: "var(--ink-dim)", fontFamily: "var(--font-body)", fontWeight: 500 }}>{item}</p>
              </div>
            ))}
          </div>
          <p
            className="font-mono reveal"
            style={{
              fontSize: "clamp(0.75rem, 1.4vw, 0.875rem)",
              color: "var(--gold)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "2.5rem",
            }}
          >
            Sem teoria excessiva. Apenas prática guiada.
          </p>
        </div>

        {/* How It Works — 4 steps */}
        <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
          <span className="section-label-ink reveal" style={{ marginBottom: "1rem" }}>Como Funciona</span>
          <h3
            className="font-display reveal"
            style={{
              fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
              fontWeight: 600,
              color: "var(--ink)",
              lineHeight: 1.35,
              maxWidth: 560,
              margin: "0 auto 2.5rem",
            }}
          >
            Um processo simples e progressivo
          </h3>
        </div>

        <div className="steps-grid" style={{ marginBottom: "clamp(2.5rem, 6vw, 4rem)", position: "relative" }} data-stagger>
          {steps.map((step) => (
            <div
              key={step.number}
              className="reveal"
              style={{
                background: "rgba(248,242,234,0.85)",
                border: "1px solid rgba(28,20,40,0.07)",
                borderRadius: 16,
                padding: "2rem",
                boxShadow: "0 2px 12px rgba(28,20,40,0.06)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(28,20,40,0.10)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(28,20,40,0.06)";
              }}
            >
              <div className="font-display" style={{ fontSize: "5rem", fontWeight: 700, color: "rgba(28,20,40,0.05)", lineHeight: 1, marginBottom: "-0.75rem", letterSpacing: "-0.04em", userSelect: "none" }}>
                {step.number}
              </div>
              <p className="font-mono" style={{ fontSize: "0.6875rem", color: "rgba(196,152,60,0.78)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>
                {step.label}
              </p>
              <h3 className="font-display" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.4rem)", fontWeight: 600, color: "var(--ink)", lineHeight: 1.3, marginBottom: "0.75rem" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "var(--ink-dim)", lineHeight: 1.72, fontFamily: "var(--font-body)", fontWeight: 500 }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <CheckoutButton
            label="Começar agora"
            subLabel="Leva menos de 3 minutos para iniciar"
            variant="light"
            style={{ fontSize: "1rem" }}
          />
        </div>
      </div>

      <style>{`
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
