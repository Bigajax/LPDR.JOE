"use client";

export default function Science() {
  return (
    <section id="ciencia" style={{ padding: "clamp(4.75rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2rem) clamp(4rem, 7vw, 6rem)", position: "relative", overflow: "hidden", background: "#F2EBE0" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(196,152,60,0.05) 0%, transparent 55%), radial-gradient(ellipse 50% 60% at 85% 75%, rgba(196,152,60,0.05) 0%, transparent 50%)" }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(2.75rem, 6vw, 4.5rem)" }}>
          <span className="section-label-ink reveal" style={{ marginBottom: "1.25rem" }}>Por que funciona</span>
          <h2 className="font-display reveal" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.6rem)", fontWeight: 600, color: "var(--ink)", lineHeight: 1.35 }}>
            Não é motivação. Não é positivity.{" "}
            <span style={{ color: "var(--gold)" }}>É ciência.</span>
          </h2>
        </div>

        <div className="quote-day reveal" style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <blockquote className="font-display">
            "A frequência que você sustenta
            <br />
            <strong style={{ color: "var(--ink)", fontStyle: "normal", fontWeight: 600 }}>
              é a realidade que você cria."
            </strong>
          </blockquote>
          <p className="font-mono" style={{ fontSize: 11, color: "rgba(196,152,60,0.65)", letterSpacing: "0.12em", marginTop: "1.25rem" }}>
            Dr. Joe Dispenza
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="science-cards" data-stagger>
          {[
            {
              label: "Neuroplasticidade",
              icon: "◈",
              text: "Seu cérebro físicamente muda com a repetição. Cada vez que você pratica um novo estado emocional, cria e fortalece novos circuitos neurais.",
              highlight: "Você literalmente reconstrói seu cérebro",
              suffix: " — uma sessão por vez.",
            },
            {
              label: "Epigenética",
              icon: "◎",
              text: "Você não é prisioneiro dos seus genes ou do seu passado. O que você pensa e sente hoje reprograma como seus genes se expressam.",
              highlight: "Seu histórico não define seu futuro",
              suffix: " — seu estado interno sim.",
            },
            {
              label: "Coerência Mente-Corpo",
              icon: "⟡",
              text: "Quando mente e corpo operam no mesmo estado, você para de sabotar o que está tentando criar.",
              highlight: "O sistema nervoso deixa de resistir",
              suffix: " e começa a cooperar.",
            },
            {
              label: "Sistema Nervoso Autônomo",
              icon: "◷",
              text: "A maior parte das nossas reações vem do sistema nervoso autônomo — fora do controle consciente. Essas práticas ensinam você a acessá-lo e reprogramá-lo.",
              highlight: "Não é força de vontade",
              suffix: " — é treino do sistema nervoso.",
            },
          ].map((card) => (
            <div key={card.label} className="card-day reveal" style={{ position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, background: "radial-gradient(circle at top right, rgba(196,152,60,0.06), transparent 70%)", borderRadius: "0 20px 0 0", pointerEvents: "none" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
                <span style={{ fontSize: 18, color: "var(--gold)", opacity: 0.80 }}>{card.icon}</span>
                <span className="section-label-ink" style={{ margin: 0 }}>{card.label}</span>
              </div>
              <p style={{ fontSize: "clamp(0.9375rem, 1.8vw, 1.0625rem)", color: "var(--ink-dim)", lineHeight: 1.72, fontFamily: "var(--font-body)", fontWeight: 500 }}>
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
