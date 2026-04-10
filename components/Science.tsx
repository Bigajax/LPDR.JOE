"use client";

export default function Science() {
  return (
    <section id="ciencia" style={{ padding: "7rem 2rem 6rem", position: "relative", overflow: "hidden" }}>
      {/* Gradient mesh */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 60% 50% at 20% 30%, rgba(148,136,196,0.09) 0%, transparent 55%),
          radial-gradient(ellipse 50% 60% at 85% 75%, rgba(196,152,60,0.05) 0%, transparent 50%),
          linear-gradient(145deg, #ede8f2 0%, #F2EBE0 45%, #f5efe3 100%)
        `,
      }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span className="section-label-ink reveal" style={{ marginBottom: "1.25rem" }}>Ciência + Prática</span>
          <h2
            className="font-display reveal"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.6rem)", fontWeight: 600, color: "var(--ink)", lineHeight: 1.35, fontStyle: "italic" }}
          >
            "O Dr. Joe Dispenza combina{" "}
            <span style={{ color: "var(--lavender)", fontStyle: "normal" }}>neurociência</span>,{" "}
            <span style={{ color: "var(--lavender)", fontStyle: "normal" }}>epigenética</span>
            <br />e{" "}
            <span style={{ color: "var(--lavender)", fontStyle: "normal" }}>física quântica</span>{" "}
            com práticas ancestrais."
          </h2>
        </div>

        <div className="quote-day reveal">
          <blockquote className="font-display">
            "Você já tem dentro de si, latente, toda a anatomia,
            química e fisiologia para se tornar sobrenatural.
            <br /><br />
            <strong style={{ color: "var(--ink)", fontStyle: "normal", fontWeight: 600 }}>
              Isso só precisa ser despertado."
            </strong>
          </blockquote>
          <p className="font-mono" style={{ fontSize: 11, color: "rgba(196,152,60,0.65)", letterSpacing: "0.12em", marginTop: "1.25rem" }}>
            Dr. Joe Dispenza
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="science-cards" data-stagger>
          {[
            {
              label: "Expressão Genética",
              text: "Você não é prisioneiro do seu passado genético. O que você pensa, como age e o estado que sustenta reescreve a expressão dos seus genes.",
              highlight: "e a realidade que você manifesta",
              suffix: ".",
            },
            {
              label: "Coerência Mente-Corpo",
              text: "Quando mente e corpo vibram na mesma frequência, você para de sabotar o que está tentando criar.",
              highlight: "O sistema nervoso deixa de resistir e começa a cooperar",
              suffix: ".",
            },
          ].map((card) => (
            <div key={card.label} className="card-day reveal" style={{ position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, background: "radial-gradient(circle at top right, rgba(148,136,196,0.08), transparent 70%)", borderRadius: "0 20px 0 0", pointerEvents: "none" }} />
              <span className="section-label-ink" style={{ marginBottom: "1.25rem" }}>{card.label}</span>
              <p style={{ fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)", color: "var(--ink-dim)", lineHeight: 1.78, fontFamily: "var(--font-body)" }}>
                {card.text}{" "}
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{card.highlight}</strong>
                {card.suffix}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .science-cards { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
