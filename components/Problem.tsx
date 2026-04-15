"use client";

const BG = "#080613";

export default function Problem() {
  return (
    <section
      className="problem-section"
      style={{
        padding: "clamp(4.75rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2rem) clamp(4rem, 7vw, 6rem)",
        background: BG, position: "relative", overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(148,136,196,0.10), transparent)" }} />
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(90,80,170,0.07) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="reveal problem-header" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label" style={{ marginBottom: "1.5rem" }}>A raiz do problema</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(1.75rem, 4.5vw, 2.6rem)", fontWeight: 600,
            color: "rgba(235,229,218,0.92)", lineHeight: 1.3, marginBottom: "1.75rem",
          }}>
            Não é falta de força de vontade.
            <br />É que seu cérebro foi treinado pelo passado.
          </h2>
          <div style={{ width: 36, height: 1, margin: "0 auto 1.75rem", background: "linear-gradient(90deg, transparent, rgba(148,136,196,0.40), transparent)" }} />
          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "rgba(210,205,230,0.85)", lineHeight: 1.75,
            maxWidth: 540, margin: "0 auto", fontFamily: "var(--font-body)", fontWeight: 500,
          }}>
            Cada emoção que você repetiu, cada situação difícil que viveu, cada vez que tentou mudar e voltou atrás — tudo isso foi gravado no seu sistema nervoso como um programa automático.
          </p>
        </div>

        {/* Loop card */}
        <div className="card-night reveal" style={{ marginBottom: "2.5rem" }}>
          <p className="font-mono" style={{ fontSize: "0.6875rem", color: "rgba(196,152,60,0.70)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1.5rem" }}>
            O ciclo que te mantém preso
          </p>
          <div className="loop-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", marginBottom: "2rem" }}>
            {[
              { step: "01", label: "Mesmos Pensamentos",  icon: "◌" },
              { step: "02", label: "Mesmas Emoções",       icon: "◌" },
              { step: "03", label: "Mesmas Decisões",      icon: "◌" },
              { step: "04", label: "Mesmos Resultados",    icon: "◌" },
            ].map((item, idx) => (
              <div key={item.step} style={{
                padding: "1.25rem 1rem",
                borderRight: idx < 3 ? "1px solid rgba(148,136,196,0.10)" : "none",
                textAlign: "center",
              }}>
                <span className="font-mono" style={{ fontSize: "0.5625rem", color: "rgba(148,136,196,0.35)", letterSpacing: "0.08em", display: "block", marginBottom: 10 }}>{item.step}</span>
                <div style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(148,136,196,0.18)", background: "rgba(148,136,196,0.04)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px", fontSize: 14, color: "rgba(148,136,196,0.40)" }}>→</div>
                <p style={{ fontSize: "0.8125rem", color: "rgba(210,205,230,0.75)", fontFamily: "var(--font-body)", fontWeight: 500, lineHeight: 1.4 }}>{item.label}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "clamp(0.9375rem, 1.8vw, 1.0625rem)", color: "rgba(210,205,230,0.80)", lineHeight: 1.75, fontFamily: "var(--font-body)", fontWeight: 500, textAlign: "center", marginBottom: "2rem" }}>
            Esse programa roda no piloto automático todos os dias.{" "}
            <strong style={{ color: "rgba(235,229,218,0.92)", fontWeight: 600 }}>
              É por isso que você tenta mudar pensando diferente, mas seu corpo continua reagindo do mesmo jeito.
            </strong>
          </p>

          <div className="quote-night" style={{ margin: 0 }}>
            <blockquote className="font-display">
              "Quando você pensa os mesmos pensamentos, faz as mesmas escolhas e demonstra os mesmos hábitos…
              <br /><br />
              <strong style={{ color: "var(--fog)", fontStyle: "normal", fontWeight: 600 }}>
                Seu passado se torna seu futuro."
              </strong>
            </blockquote>
            <p className="font-mono" style={{ fontSize: 11, color: "rgba(148,136,196,0.55)", letterSpacing: "0.12em", marginTop: "1.25rem" }}>
              Dr. Joe Dispenza — neurocientista e autor
            </p>
          </div>
        </div>

        {/* The solution teaser */}
        <div className="card-night reveal">
          <p className="font-mono" style={{ fontSize: "0.6875rem", color: "rgba(196,152,60,0.70)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1.25rem" }}>
            A chave que a maioria ignora
          </p>
          <h3 className="font-display" style={{ fontSize: "clamp(1.375rem, 3vw, 1.75rem)", fontWeight: 600, color: "rgba(235,229,218,0.92)", lineHeight: 1.3, marginBottom: "1.25rem" }}>
            Para mudar um padrão, você não precisa pensar diferente.
            <br />Você precisa <em>sentir</em> diferente.
          </h3>
          <p style={{ fontSize: "clamp(0.9375rem, 1.8vw, 1.0625rem)", color: "rgba(210,205,230,0.80)", lineHeight: 1.75, fontFamily: "var(--font-body)", fontWeight: 500, marginBottom: "1.25rem" }}>
            Quando você aprende a gerar intencionalmente um estado emocional novo — no corpo, não só na cabeça — seu sistema nervoso para de operar no passado e começa a responder ao futuro que você quer criar.
          </p>
          <p style={{ fontSize: "clamp(0.9375rem, 1.8vw, 1.0625rem)", color: "rgba(192,180,224,0.65)", lineHeight: 1.75, fontFamily: "var(--font-body)", fontWeight: 500 }}>
            Isso não é esoterismo. Neurociência chama de reconditioning do sistema nervoso.{" "}
            <strong style={{ color: "rgba(210,205,230,0.85)", fontWeight: 600 }}>É exatamente o que essas meditações guiadas fazem.</strong>
          </p>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .problem-section { padding: 5.75rem 1.25rem 4.75rem !important; }
          .problem-header { margin-bottom: 3rem !important; }
          .loop-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .loop-grid > div:nth-child(2) { border-right: none !important; }
          .loop-grid > div:nth-child(1), .loop-grid > div:nth-child(2) { border-bottom: 1px solid rgba(148,136,196,0.10); }
        }
      `}</style>
    </section>
  );
}
