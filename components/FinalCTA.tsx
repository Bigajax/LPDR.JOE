"use client";
import CheckoutButton from "./CheckoutButton";

const BG = "#05030f";

export default function FinalCTA() {
  return (
    <section
      className="finalcta-section"
      style={{
        padding: "clamp(5.5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 2rem) clamp(5rem, 8vw, 7rem)",
        textAlign: "center", position: "relative", overflow: "hidden", background: BG,
      }}
    >
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(148,136,196,0.12), transparent)" }} />
      <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(100,80,180,0.09) 0%, transparent 65%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(148,136,196,0.06) 0%, transparent 70%)", top: "15%", right: "5%", pointerEvents: "none" }} />
      {[420, 270].map((size) => (
        <div key={size} style={{ position: "absolute", width: size, height: size, borderRadius: "50%", border: "1px solid rgba(148,136,196,0.06)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none" }} />
      ))}

      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Decision card */}
        <div className="card-night reveal finalcta-card" style={{ marginBottom: "5rem", textAlign: "left" }}>
          <span className="section-label" style={{ marginBottom: "1.75rem" }}>A decisão mais simples que você pode tomar hoje</span>

          <h2 className="font-display" style={{ fontSize: "clamp(1.625rem, 4vw, 2.375rem)", fontWeight: 700, color: "rgba(235,229,218,0.92)", lineHeight: 1.25, marginBottom: "1.5rem" }}>
            Por R$ 37, você tem acesso a tudo isso agora.
          </h2>

          {/* Price comparison */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem", marginBottom: "2rem" }} className="price-compare">
            {[
              { label: "Um almoço fora",      price: "~R$ 40",  cross: true },
              { label: "1h de academia",       price: "~R$ 50",  cross: true },
              { label: "Este protocolo",       price: "R$ 37",   cross: false, highlight: true },
            ].map((item) => (
              <div key={item.label} style={{
                padding: "1rem 0.875rem", textAlign: "center",
                background: item.highlight ? "rgba(148,136,196,0.10)" : "rgba(148,136,196,0.03)",
                border: `1px solid ${item.highlight ? "rgba(148,136,196,0.30)" : "rgba(148,136,196,0.08)"}`,
                borderRadius: 10,
              }}>
                <p className="font-display" style={{ fontSize: "1.125rem", fontWeight: 700, color: item.highlight ? "rgba(235,229,218,0.95)" : "rgba(192,180,224,0.50)", lineHeight: 1, marginBottom: 6, textDecoration: item.cross ? "line-through" : "none" }}>
                  {item.price}
                </p>
                <p style={{ fontSize: "0.75rem", color: item.highlight ? "rgba(210,205,230,0.80)" : "rgba(192,180,224,0.40)", fontFamily: "var(--font-body)", lineHeight: 1.4 }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "rgba(210,205,230,0.88)", lineHeight: 1.75, marginBottom: "2rem", fontFamily: "var(--font-body)", fontWeight: 500 }}>
            O almoço dura uma hora. A academia te cansa. Esse protocolo treina quem você é por dentro — e isso muda tudo que acontece por fora.
          </p>

          {/* What's included */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem", marginBottom: "2rem" }} className="includes-grid">
            {[
              "6 sessões guiadas no app",
              "5 a 7 minutos por dia",
              "Exercícios interativos",
              "Acesso vitalício",
              "Funciona no celular",
              "Acesso imediato após compra",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <span style={{ color: "rgba(196,152,60,0.80)", fontSize: 12, flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: "0.875rem", color: "rgba(210,205,230,0.75)", fontFamily: "var(--font-body)", lineHeight: 1.4 }}>{item}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.625rem", marginBottom: "2rem" }}>
            {[
              { q: "Preciso ter experiência com meditação?", a: "Não. As sessões são 100% guiadas — você só precisa ouvir e seguir." },
              { q: "Quanto tempo preciso por dia?",           a: "Entre 5 e 7 minutos. Menos do que uma reunião de trabalho." },
              { q: "Quando recebo o acesso?",                 a: "Imediatamente após o pagamento ser confirmado." },
            ].map(({ q, a }) => (
              <div key={q} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "0.75rem 1rem", background: "rgba(148,136,196,0.04)", border: "1px solid rgba(148,136,196,0.09)", borderRadius: 10 }}>
                <span style={{ fontSize: "0.75rem", color: "rgba(196,152,60,0.70)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em", flexShrink: 0, marginTop: 2 }}>→</span>
                <p style={{ fontSize: "0.875rem", color: "rgba(210,205,230,0.60)", fontFamily: "var(--font-body)", lineHeight: 1.55 }}>
                  <strong style={{ color: "rgba(235,229,218,0.80)", fontWeight: 600 }}>{q}</strong>{" "}
                  <span style={{ color: "rgba(192,180,224,0.50)" }}>·</span>{" "}
                  {a}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <CheckoutButton
              label="Criar minha nova realidade — R$ 37"
              subLabel="Acesso imediato · Sem assinatura · Vitalício"
            />
          </div>
        </div>

        {/* Final headline */}
        <div className="reveal">
          <div className="quote-night" style={{ marginBottom: "3rem" }}>
            <blockquote className="font-display">
              "Você não precisa repetir o passado.
              <br />
              <strong style={{ color: "var(--fog)", fontStyle: "normal", fontWeight: 600 }}>
                Pode criar uma nova realidade."
              </strong>
            </blockquote>
            <p className="font-mono" style={{ fontSize: 11, color: "rgba(148,136,196,0.55)", letterSpacing: "0.12em", marginTop: "1.25rem" }}>
              Dr. Joe Dispenza
            </p>
          </div>

          <h2 className="font-display" style={{ fontSize: "clamp(2.25rem, 6vw, 3.75rem)", fontWeight: 700, color: "rgba(235,229,218,0.92)", lineHeight: 1.15, marginBottom: "1.25rem" }}>
            A mudança não começa quando a vida muda.
            <br />
            <span className="shimmer-text">Começa quando você muda por dentro.</span>
          </h2>

          <p className="font-mono" style={{ fontSize: "0.6875rem", color: "rgba(192,180,224,0.55)", lineHeight: 1.65, marginBottom: "3rem", letterSpacing: "0.16em" }}>
            Acesso imediato · R$37 pagamento único · Sem assinatura
          </p>

          <CheckoutButton
            label="Criar minha nova realidade — R$ 37"
            subLabel="Acesso imediato após a compra"
            style={{ fontSize: "1rem", padding: "1.1rem 2.75rem" }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .finalcta-section { padding: 6.25rem 1.25rem 5.25rem !important; }
          .finalcta-card { margin-bottom: 3.25rem !important; }
          .price-compare { grid-template-columns: 1fr !important; }
          .includes-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
