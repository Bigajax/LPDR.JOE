"use client";

const BG = "#080613";

export default function Problem() {
  return (
    <section
      className="problem-section"
      style={{
        padding: "clamp(4.75rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2rem) clamp(4rem, 7vw, 6rem)",
        background: BG,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(148,136,196,0.10), transparent)" }} />
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(90,80,170,0.07) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Belief-breaking block */}
        <div className="reveal problem-header" style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span className="section-label" style={{ marginBottom: "1.5rem" }}>O Bloqueio Real</span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 2.6rem)",
              fontWeight: 600,
              color: "rgba(235,229,218,0.92)",
              lineHeight: 1.35,
              marginBottom: "1.5rem",
            }}
          >
            O problema não está no que você quer.
          </h2>
          <div style={{ width: 36, height: 1, margin: "1.75rem auto", background: "linear-gradient(90deg, transparent, rgba(148,136,196,0.40), transparent)" }} />
          <div style={{ maxWidth: 520, margin: "0 auto" }}>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "rgba(210,205,230,0.88)", lineHeight: 1.72, marginBottom: "1.25rem", fontFamily: "var(--font-body)", fontWeight: 500 }}>
              Seu corpo ainda está condicionado ao passado.
            </p>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "rgba(210,205,230,0.75)", lineHeight: 1.72, marginBottom: "1rem", fontFamily: "var(--font-body)", fontWeight: 500 }}>
              Seu sistema nervoso repete:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem", alignItems: "center" }}>
              {["os mesmos pensamentos,", "as mesmas emoções,", "as mesmas decisões."].map((line) => (
                <span
                  key={line}
                  className="font-display"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "rgba(192,180,224,0.70)", fontStyle: "italic" }}
                >
                  {line}
                </span>
              ))}
            </div>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "rgba(210,205,230,0.88)", lineHeight: 1.72, fontFamily: "var(--font-body)", fontWeight: 600 }}>
              E isso gera os mesmos resultados.
            </p>
          </div>
        </div>

        {/* Dr. Joe quote card */}
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

          {/* Mechanism block inside the card */}
          <div style={{ borderTop: "1px solid rgba(148,136,196,0.10)", paddingTop: "2rem", marginTop: "0.5rem" }}>
            <p className="font-mono" style={{ fontSize: "0.6875rem", color: "rgba(196,152,60,0.70)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>
              O mecanismo
            </p>
            <h3
              className="font-display"
              style={{
                fontSize: "clamp(1.25rem, 3vw, 1.625rem)",
                fontWeight: 600,
                color: "rgba(235,229,218,0.92)",
                lineHeight: 1.35,
                marginBottom: "1.25rem",
              }}
            >
              Você não muda sua vida só pensando diferente.
            </h3>
            <p style={{ fontSize: "1rem", color: "rgba(210,205,230,0.80)", lineHeight: 1.72, fontFamily: "var(--font-body)", fontWeight: 500, marginBottom: "1.5rem" }}>
              Você precisa <em>sentir</em> diferente.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }} className="mechanism-grid">
              {[
                { label: "Intenção + Emoção", desc: "entram em coerência" },
                { label: "Seu corpo", desc: "sai do passado" },
                { label: "Sua realidade", desc: "começa a mudar" },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  style={{
                    padding: "1rem",
                    background: "rgba(148,136,196,0.05)",
                    border: "1px solid rgba(148,136,196,0.12)",
                    borderRadius: 10,
                    textAlign: "center",
                  }}
                >
                  <span className="font-mono" style={{ fontSize: "0.5625rem", color: "rgba(148,136,196,0.45)", letterSpacing: "0.08em", display: "block", marginBottom: 6 }}>
                    0{idx + 1}
                  </span>
                  <p style={{ fontSize: "0.875rem", color: "rgba(235,229,218,0.85)", fontFamily: "var(--font-body)", fontWeight: 600, marginBottom: 4, lineHeight: 1.3 }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(192,180,224,0.60)", fontFamily: "var(--font-body)", lineHeight: 1.4 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .problem-section { padding: 5.75rem 1.25rem 4.75rem !important; }
          .problem-header { margin-bottom: 3.25rem !important; }
          .problem-break { display: none; }
          .mechanism-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
