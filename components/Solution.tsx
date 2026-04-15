"use client";
import CheckoutButton from "./CheckoutButton";

const sessions = [
  {
    tag:      "Etapa inicial · 3 min",
    title:    "Criando Seu Novo Potencial",
    desc:     "Defina o que você quer criar e conecte-se com a emoção desse futuro. Você sai com uma intenção clara antes de meditar.",
    color:    "rgba(148,136,196,0.70)",
    dotColor: "var(--lavender)",
  },
  {
    tag:      "Dia 1 · 5 min",
    title:    "Sintonize Novos Potenciais",
    desc:     "Acesse o campo de possibilidades além do seu passado e comece a viver a partir do futuro.",
    color:    "rgba(196,152,60,0.70)",
    dotColor: "var(--gold)",
  },
  {
    tag:      "Dia 2 · 7 min",
    title:    "Bênção dos Centros de Energia",
    desc:     "Ative seu corpo para um novo estado interno. Sua biologia muda quando seu foco muda.",
    color:    "rgba(196,152,60,0.70)",
    dotColor: "var(--gold)",
  },
  {
    tag:      "Dia 3 · 7 min",
    title:    "Recondicione Seu Corpo e Mente",
    desc:     "O que você repete, vira padrão. Esta sessão interrompe o ciclo antigo e instala um novo.",
    color:    "rgba(196,152,60,0.70)",
    dotColor: "var(--gold)",
  },
  {
    tag:      "Dia 4 · 5 min",
    title:    "Meditação Caminhando",
    desc:     "Para quando sentar não for suficiente. Leve a prática para o movimento — onde a vida acontece.",
    color:    "rgba(196,152,60,0.70)",
    dotColor: "var(--gold)",
  },
  {
    tag:      "Dia 5 · Sessão especial",
    title:    "Espaço-Tempo, Tempo-Espaço",
    desc:     "A sessão mais profunda da jornada. Reserve um momento só seu. Aqui, você acessa o campo onde sua nova realidade já existe.",
    color:    "rgba(148,136,196,0.70)",
    dotColor: "var(--lavender)",
  },
];

export default function Solution() {
  return (
    <section
      style={{
        padding: "clamp(4.75rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2rem) clamp(4rem, 7vw, 6rem)",
        position: "relative", overflow: "hidden", background: "#F2EBE0",
      }}
    >
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 50% at 80% 10%, rgba(196,152,60,0.05) 0%, transparent 55%), radial-gradient(ellipse 50% 60% at 10% 90%, rgba(196,152,60,0.06) 0%, transparent 50%)" }} />

      <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <span className="section-label-ink reveal" style={{ marginBottom: "1.25rem" }}>O que você está comprando</span>
          <h2 className="font-display reveal" style={{
            fontSize: "clamp(1.75rem, 4.5vw, 2.6rem)", fontWeight: 600,
            color: "var(--ink)", lineHeight: 1.3, maxWidth: 700, margin: "0 auto 1.25rem",
          }}>
            6 sessões guiadas para reprogramar
            <br />como seu corpo responde à vida.
          </h2>
          <p className="reveal" style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "var(--ink-dim)", lineHeight: 1.72,
            maxWidth: 520, margin: "0 auto 0",
            fontFamily: "var(--font-body)", fontWeight: 500,
          }}>
            Cada sessão tem um propósito específico. Juntas, treinam seu sistema nervoso a viver no futuro antes de ele acontecer.
          </p>
        </div>

        {/* Session list */}
        <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "0", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          {sessions.map((s, idx) => (
            <div
              key={s.title}
              style={{
                display: "flex", alignItems: "flex-start", gap: "1.5rem",
                padding: "1.5rem 1.75rem",
                background: idx % 2 === 0 ? "rgba(255,252,248,0.90)" : "rgba(248,242,232,0.70)",
                border: "1px solid rgba(28,20,40,0.07)",
                borderTop: idx === 0 ? "1px solid rgba(28,20,40,0.07)" : "none",
                borderRadius: idx === 0 ? "12px 12px 0 0" : idx === sessions.length - 1 ? "0 0 12px 12px" : "0",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flexShrink: 0, paddingTop: 4 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.5625rem", color: "rgba(28,20,40,0.30)", letterSpacing: "0.08em" }}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {idx < sessions.length - 1 && (
                  <div style={{ width: 1, flex: 1, minHeight: 20, background: "rgba(28,20,40,0.10)" }} />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <p className="font-mono" style={{ fontSize: "0.6563rem", color: s.color, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "0.4rem" }}>
                  {s.tag}
                </p>
                <h3 className="font-display" style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.3rem)", fontWeight: 600, color: "var(--ink)", lineHeight: 1.25, marginBottom: "0.5rem" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--ink-dim)", lineHeight: 1.65, fontFamily: "var(--font-body)", fontWeight: 400 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary + CTA */}
        <div className="reveal" style={{
          background: "rgba(255,252,248,0.90)", border: "1px solid rgba(28,20,40,0.08)",
          borderRadius: 16, padding: "clamp(1.75rem, 4vw, 2.5rem)",
          boxShadow: "0 2px 16px rgba(28,20,40,0.06)", textAlign: "center",
        }}>
          <p className="font-display" style={{
            fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)", fontWeight: 600,
            color: "var(--ink)", lineHeight: 1.4, marginBottom: "1.25rem",
          }}>
            Total: menos de 40 minutos de prática.
            <br />
            <span style={{ color: "var(--gold)" }}>O suficiente para começar a mudar como você se sente todos os dias.</span>
          </p>

          <div className="solution-pricing" style={{ display: "flex", justifyContent: "center", gap: "clamp(1.5rem, 4vw, 3rem)", flexWrap: "wrap", marginBottom: "2rem" }}>
            {[
              { v: "R$ 37", l: "pagamento único" },
              { v: "Vitalício", l: "acesso permanente" },
              { v: "Imediato", l: "acesso após compra" },
            ].map(({ v, l }) => (
              <div key={v} style={{ textAlign: "center" }}>
                <p className="font-display gold-text" style={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1 }}>{v}</p>
                <p className="font-mono" style={{ fontSize: "0.625rem", color: "var(--ink-dim)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 4 }}>{l}</p>
              </div>
            ))}
          </div>

          <CheckoutButton
            label="Criar minha nova realidade — R$ 37"
            subLabel="Acesso imediato · Sem assinatura"
            style={{ fontSize: "1rem" }}
          />

          <p style={{ fontSize: "0.8125rem", color: "var(--ink-dim)", lineHeight: 1.6, marginTop: "1.25rem", fontFamily: "var(--font-body)" }}>
            Menos que um almoço fora. Mas o resultado você carrega pra sempre.
          </p>
        </div>

      </div>
    </section>
  );
}
