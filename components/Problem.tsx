"use client";

const bullets = [
  "Você continua atraindo as mesmas situações",
  "Sabe que existe uma versão sua vivendo diferente",
  "Começa a criar, mas algo puxa de volta para o familiar",
  "Seu sistema nervoso ainda está programado para ontem",
];

const BG = "#080613";

export default function Problem() {
  return (
    <section className="problem-section" style={{ padding: "clamp(4.75rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2rem) clamp(4rem, 7vw, 6rem)", background: BG, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(148,136,196,0.10), transparent)" }} />

      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(90,80,170,0.07) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(90,80,170,0.05) 0%, transparent 70%)", bottom: "10%", right: "5%", pointerEvents: "none" }} />

      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="reveal problem-header" style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 2.6rem)",
              fontWeight: 600,
              color: "rgba(235,229,218,0.92)",
              lineHeight: 1.35,
              marginBottom: "1.5rem",
              fontStyle: "italic",
            }}
          >
            É por isso que você ainda não manifestou o{" "}
            <span style={{ color: "var(--lavender-2)", fontStyle: "normal" }}>"impossível"</span>
          </h2>
          <div style={{ width: 36, height: 1, margin: "1.75rem auto", background: "linear-gradient(90deg, transparent, rgba(148,136,196,0.40), transparent)" }} />
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "rgba(210,205,230,0.88)", lineHeight: 1.72, maxWidth: 480, margin: "0 auto", fontFamily: "var(--font-body)", fontWeight: 500 }}>
            Você pensa no futuro que quer, mas continua sentindo o passado.
            <br /><br />
            Seu sistema nervoso ainda está programado para ontem. Então você segue atraindo as mesmas pessoas, oportunidades e limites.
            <br /><br />
            Manifestar qualquer coisa — inclusive o que hoje parece fora da sua realidade — exige instalar um novo estado interno, não apenas pensar positivo.
          </p>
        </div>

        {/* O Problema card */}
        <div className="card-night reveal">
          <div className="quote-night">
            <blockquote className="font-display">
              "Quando você pensa os mesmos pensamentos, faz as mesmas escolhas e demonstra os mesmos hábitos...
              <span className="problem-break"><br /><br /></span>
              <strong style={{ color: "var(--fog)", fontStyle: "normal", fontWeight: 600 }}>
                Seu passado se torna seu futuro."
              </strong>
            </blockquote>
            <p className="font-mono" style={{ fontSize: 11, color: "rgba(148,136,196,0.55)", letterSpacing: "0.12em", marginTop: "1.25rem" }}>
              Dr. Joe Dispenza
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }} className="bullets-grid">
            {bullets.map((item) => (
              <div
                key={item}
                className="problem-bullet"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.875rem",
                  padding: "1.125rem 1.25rem",
                  background: "rgba(148,136,196,0.04)",
                  border: "1px solid rgba(148,136,196,0.09)",
                  borderRadius: 12,
                }}
              >
                <span style={{ color: "var(--lavender)", fontSize: "0.5rem", flexShrink: 0, marginTop: 7, display: "inline-block", width: 5, height: 5, borderRadius: "50%", border: "1.5px solid var(--lavender)", opacity: 0.7 }} />
                <p className="problem-bullet-text" style={{ fontSize: "1rem", color: "rgba(210,205,230,0.88)", lineHeight: 1.7, fontFamily: "var(--font-body)", fontWeight: 500 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .problem-section { padding: 5.75rem 1.25rem 4.75rem !important; }
          .problem-header { margin-bottom: 3.25rem !important; }
          .problem-break { display: none; }
          .bullets-grid { grid-template-columns: 1fr !important; }
          .problem-bullet { padding: 0.95rem 1rem !important; }
          .problem-bullet-text { font-size: 1rem !important; }
        }
      `}</style>
    </section>
  );
}
