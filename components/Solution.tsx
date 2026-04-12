"use client";

const steps = [
  {
    number: "1",
    label: "Intenção",
    title: "Você define com clareza o que quer manifestar",
    text: "Do mais simples ao aparentemente impossível.",
  },
  {
    number: "2",
    label: "Frequência",
    title: "Aprende a gerar o estado emocional de quem já vive isso",
    text: "Segurança, amor, abundância, cura.",
  },
  {
    number: "3",
    label: "Materialização",
    title: "Treina esse estado até ele se tornar seu novo normal",
    text: "Quando mente e corpo vibram na mesma frequência, seu sistema para de resistir e começa a cooperar.",
  },
];

export default function Solution() {
  return (
    <section style={{ padding: "clamp(4.75rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2rem) clamp(4rem, 7vw, 6rem)", position: "relative", overflow: "hidden", background: "#F2EBE0" }}>
      {/* Gradient mesh — radial overlays only; linear removed so edges stay flat #F2EBE0 */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 70% 50% at 80% 10%, rgba(196,152,60,0.05) 0%, transparent 55%),
          radial-gradient(ellipse 50% 60% at 10% 90%, rgba(196,152,60,0.06) 0%, transparent 50%)
        `,
      }} />

      <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(2.75rem, 6vw, 5rem)" }}>
          <span className="section-label-ink reveal" style={{ marginBottom: "1.25rem" }}>Como Funciona</span>
          <p
            className="font-mono reveal"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 0.875rem)", color: "var(--gold)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1rem" }}
          >
            Manifestar não é mágica. É neurologia, energia e treino diário.
          </p>
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
            Para mudar sua realidade, não basta pensar diferente.
            <br />Você precisa <em>sentir</em> diferente.
            <br />Quando{" "}
            <span style={{ color: "var(--ink)" }}>intenção</span>{" "}
            +{" "}
            <span style={{ color: "var(--gold)" }}>emoção</span>{" "}
            entram em coerência,
            <br />seu sistema começa a responder de outro jeito.
          </h2>
        </div>

        <div className="steps-grid" style={{ marginBottom: "clamp(2.5rem, 6vw, 4rem)", position: "relative" }} data-stagger>
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
              <p style={{ fontSize: "1rem", color: "var(--ink-dim)", lineHeight: 1.72, fontFamily: "var(--font-body)", fontWeight: 500 }}>
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
