"use client";

const testimonials = [
  {
    stars: 5,
    text: "Na terceira sessão já sentia que estava criando outra versão de mim, e as situações começaram a mudar do lado de fora.",
    name: "Ana M.",
    age: "34 anos",
  },
  {
    stars: 5,
    text: "Nunca meditei na vida. Mas as sessões são tão guiadas que é impossível errar. Na primeira semana senti uma clareza que não tinha faz anos.",
    name: "Carlos R.",
    age: "41 anos",
  },
  {
    stars: 5,
    text: "Comecei achando que era mais um produto de autoajuda. Depois da sessão 3, parei de reagir do mesmo jeito às coisas que me travavam há anos.",
    name: "Juliana P.",
    age: "28 anos",
  },
];

const badges = [
  { display: "6",   label: "Sessões",   sub: "guiadas"    },
  { display: "5–7", label: "Minutos",   sub: "por dia"    },
  { display: "R$37", label: "Valor",    sub: "pagamento único" },
  { display: "∞",   label: "Acesso",    sub: "vitalício"  },
];

export default function SocialProof() {
  return (
    <section
      style={{
        padding: "clamp(4.75rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2rem) clamp(4rem, 7vw, 6rem)",
        position: "relative", overflow: "hidden", background: "#F2EBE0",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 15% 20%, rgba(196,152,60,0.05) 0%, transparent 60%), radial-gradient(ellipse 60% 70% at 85% 80%, rgba(196,152,60,0.06) 0%, transparent 55%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" }}>
        <span className="section-label-ink reveal" style={{ marginBottom: "1.25rem" }}>Quem já passou por isso</span>

        <h2 className="font-display reveal" style={{ fontSize: "clamp(1.75rem, 4vw, 2.6rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.25, marginBottom: "3rem" }}>
          Pessoas comuns.{" "}
          <span style={{ color: "var(--gold)" }}>Mudanças reais.</span>
        </h2>

        {/* Testimonials */}
        <div className="reveal testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", marginBottom: "3.5rem" }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "rgba(255,252,248,0.90)", border: "1px solid rgba(28,20,40,0.09)",
                borderRadius: 16, padding: "1.5rem 1.5rem", textAlign: "left",
                boxShadow: "0 2px 16px rgba(28,20,40,0.06)",
              }}
            >
              <div style={{ display: "flex", gap: 2, marginBottom: "0.875rem" }}>
                {Array.from({ length: t.stars }).map((_, i) => <span key={i} style={{ color: "var(--gold)", fontSize: 13 }}>★</span>)}
              </div>
              <p className="font-display" style={{ fontSize: "clamp(0.9375rem, 1.8vw, 1.0625rem)", color: "var(--ink)", lineHeight: 1.65, fontStyle: "italic", marginBottom: "1rem" }}>
                "{t.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(148,136,196,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "rgba(148,136,196,0.70)" }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-mono" style={{ fontSize: "0.6875rem", color: "var(--ink)", letterSpacing: "0.08em", fontWeight: 600 }}>{t.name}</p>
                  <p className="font-mono" style={{ fontSize: "0.625rem", color: "var(--ink-dim)", letterSpacing: "0.08em" }}>{t.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className="badge-grid reveal" data-stagger>
          {badges.map((b) => (
            <div
              key={b.label}
              className="reveal"
              style={{
                background: "rgba(255,252,248,0.80)", border: "1px solid rgba(28,20,40,0.09)",
                borderRadius: 16, padding: "2rem 1.25rem", textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "default",
                boxShadow: "0 2px 16px rgba(28,20,40,0.06), inset 0 1px 0 rgba(255,255,255,0.80)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(28,20,40,0.10), inset 0 1px 0 rgba(255,255,255,0.80)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(28,20,40,0.06), inset 0 1px 0 rgba(255,255,255,0.80)"; }}
            >
              <div className="font-display gold-text" style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1, marginBottom: "0.625rem" }}>
                {b.display}
              </div>
              <span className="font-mono" style={{ fontSize: "0.6875rem", color: "var(--ink-dim)", letterSpacing: "0.14em", textTransform: "uppercase", display: "block", marginBottom: "0.2rem" }}>{b.label}</span>
              <span className="font-mono" style={{ fontSize: "0.625rem", color: "rgba(196,152,60,0.55)", letterSpacing: "0.10em", textTransform: "uppercase" }}>{b.sub}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
