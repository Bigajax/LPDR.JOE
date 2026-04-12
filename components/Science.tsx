"use client";

export default function Science() {
  return (
    <section id="ciencia" style={{ padding: "clamp(4.75rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2rem) clamp(4rem, 7vw, 6rem)", position: "relative", overflow: "hidden", background: "#F2EBE0" }}>
      {/* Gradient mesh — radial overlays only; linear removed so edges stay flat #F2EBE0 */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 60% 50% at 20% 30%, rgba(196,152,60,0.05) 0%, transparent 55%),
          radial-gradient(ellipse 50% 60% at 85% 75%, rgba(196,152,60,0.05) 0%, transparent 50%)
        `,
      }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(2.75rem, 6vw, 4.5rem)" }}>
          <span className="section-label-ink reveal" style={{ marginBottom: "1.25rem" }}>Ciência + Prática</span>
          <h2
            className="font-display reveal"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.6rem)", fontWeight: 600, color: "var(--ink)", lineHeight: 1.35, fontStyle: "italic" }}
          >
            "O Dr. Joe Dispenza combina{" "}
            <span style={{ color: "var(--gold)", fontStyle: "normal" }}>neurociência</span>,{" "}
            <span style={{ color: "var(--gold)", fontStyle: "normal" }}>epigenética</span>
            <br />e{" "}
            <span style={{ color: "var(--gold)", fontStyle: "normal" }}>física quântica</span>{" "}
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
              text: "Você não é prisioneiro do seu passado genético ou emocional. O que você pensa e sente hoje — o estado que você sustenta — reprograma seus padrões",
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
              <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, background: "radial-gradient(circle at top right, rgba(196,152,60,0.06), transparent 70%)", borderRadius: "0 20px 0 0", pointerEvents: "none" }} />
              <span className="section-label-ink" style={{ marginBottom: "1.25rem" }}>{card.label}</span>
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "var(--ink-dim)", lineHeight: 1.72, fontFamily: "var(--font-body)", fontWeight: 500 }}>
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
