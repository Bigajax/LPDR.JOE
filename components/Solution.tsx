"use client";

const steps = [
  {
    number: "01",
    label: "Intenção",
    title: "Você define o que quer manifestar.",
    text: "Com precisão. Em palavras suas. Específica o suficiente para ser real.",
  },
  {
    number: "02",
    label: "Frequência",
    title: "Você entra no estado de quem já vive isso.",
    text: "Não como visualização, como experiência real no corpo, agora.",
  },
  {
    number: "03",
    label: "Materialização",
    title: "Sua realidade começa a responder.",
    text: "Quando você sustenta esse estado, o externo começa a alinhar com o interno.",
  },
];

export default function Solution() {
  return (
    <section style={{ padding: "7rem 2rem 6rem", position: "relative", overflow: "hidden" }}>
      {/* Gradient mesh */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 70% 50% at 80% 10%, rgba(196,152,60,0.05) 0%, transparent 55%),
          radial-gradient(ellipse 50% 60% at 10% 90%, rgba(196,152,60,0.06) 0%, transparent 50%),
          linear-gradient(155deg, #F2EBE0 0%, #ede6d8 55%, #F2EBE0 100%)
        `,
      }} />

      <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span className="section-label-ink reveal" style={{ marginBottom: "1.25rem" }}>Como Funciona</span>
          <h2
            className="font-display reveal"
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 2.6rem)",
              fontWeight: 600,
              color: "var(--ink)",
              lineHeight: 1.35,
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            Para manifestar uma nova realidade,
            <br />você precisa <em>ser</em>, antes de ter.{" "}
            <span style={{ color: "var(--ink)" }}>Intenção</span>{" "}
            +{" "}
            <span style={{ color: "var(--gold)" }}>frequência</span>.
          </h2>
        </div>

        <div className="steps-grid" style={{ marginBottom: "4rem", position: "relative" }} data-stagger>
          {/* Connector */}
          <div className="steps-connector" style={{
            position: "absolute",
            top: "4.5rem",
            left: "calc(33.33% + 1rem)",
            right: "calc(33.33% + 1rem)",
            height: 1,
            background: "linear-gradient(90deg, rgba(28,20,40,0.15), rgba(196,152,60,0.24), rgba(28,20,40,0.15))",
            pointerEvents: "none",
          }} />

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
              <div
                className="font-display"
                style={{ fontSize: "5rem", fontWeight: 700, color: "rgba(28,20,40,0.05)", lineHeight: 1, marginBottom: "-0.75rem", letterSpacing: "-0.04em", userSelect: "none" }}
              >
                {step.number}
              </div>
              <p className="font-mono" style={{ fontSize: "0.6875rem", color: "rgba(196,152,60,0.78)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>
                {step.label}
              </p>
              <h3 className="font-display" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.4rem)", fontWeight: 600, color: "var(--ink)", lineHeight: 1.3, marginBottom: "0.75rem" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--ink-dim)", lineHeight: 1.65, fontFamily: "var(--font-body)" }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="https://ecofrontend888.vercel.app/app/guest/intro-potencial" target="_blank" rel="noopener noreferrer" className="btn-cta-ink" style={{ display: "inline-flex" }}>
            Iniciar o Protocolo
          </a>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .steps-connector { display: none; } }`}</style>
    </section>
  );
}
