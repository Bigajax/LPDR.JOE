"use client";

const BG = "#05030f";

export default function FinalCTA() {
  return (
    <section
      style={{
        padding: "8rem 2rem 7rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background: BG,
      }}
    >
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(148,136,196,0.12), transparent)" }} />

      {/* Orbs */}
      <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(100,80,180,0.09) 0%, transparent 65%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(148,136,196,0.06) 0%, transparent 70%)", top: "15%", right: "5%", pointerEvents: "none" }} />

      {/* Rings */}
      {[420, 270].map((size) => (
        <div key={size} style={{ position: "absolute", width: size, height: size, borderRadius: "50%", border: "1px solid rgba(148,136,196,0.06)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none" }} />
      ))}

      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Card */}
        <div className="card-night reveal" style={{ marginBottom: "5rem", textAlign: "left" }}>
          <span className="section-label" style={{ marginBottom: "1.75rem" }}>O Que Você Vai Testar</span>

          <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "rgba(210,205,230,0.60)", lineHeight: 1.82, marginBottom: "1.5rem", fontFamily: "var(--font-body)" }}>
            O que você manifesta para fora é um reflexo direto
            do estado que sustenta por dentro.
          </p>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "rgba(210,205,230,0.60)", lineHeight: 1.82, marginBottom: "2.5rem", fontFamily: "var(--font-body)" }}>
            Mude o estado — mude a realidade.
          </p>

          <div className="quote-night" style={{ margin: "0 0 2.5rem" }}>
            <blockquote className="font-display">
              "Você não é prisioneiro de seus genes.
              <br />A expressão genética é mutável quando você pensa,
              <br />age e se comporta diferente."
            </blockquote>
            <p className="font-mono" style={{ fontSize: 11, color: "rgba(148,136,196,0.55)", letterSpacing: "0.12em", marginTop: "1.25rem" }}>— Dr. Joe Dispenza</p>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="/app/guest" className="btn-cta" style={{ display: "inline-flex" }}>Testar Agora</a>
          </div>
        </div>

        {/* Final headline */}
        <div className="reveal">
          <span className="section-label" style={{ marginBottom: "1.75rem", display: "flex", justifyContent: "center", color: "rgba(148,136,196,0.45)" }}>
            Pessoas que pararam de atrair o que não queriam
          </span>

          <div style={{ width: 36, height: 1, margin: "1.75rem auto", background: "linear-gradient(90deg, transparent, rgba(148,136,196,0.40), transparent)" }} />

          <h2
            className="font-display"
            style={{ fontSize: "clamp(2.25rem, 6vw, 3.75rem)", fontWeight: 700, color: "rgba(235,229,218,0.92)", lineHeight: 1.15, marginBottom: "1.25rem", marginTop: "1.5rem" }}
          >
            "Se Anna mudou sua realidade,
            <br />
            <span className="shimmer-text">você também pode."</span>
          </h2>

          <p className="font-mono" style={{ fontSize: "0.6875rem", color: "rgba(192,180,224,0.28)", lineHeight: 1.65, marginBottom: "3rem", letterSpacing: "0.16em" }}>
            Sem cadastro · Sem compromisso · Menos de 3 minutos
          </p>

          <a href="/app/guest" className="btn-cta" style={{ fontSize: "1rem", display: "inline-flex", padding: "1.1rem 3rem" }}>
            Começar a Criar Minha Realidade
          </a>
        </div>
      </div>
    </section>
  );
}
