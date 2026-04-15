"use client";
import { useState, useRef } from "react";
import IphoneMockup from "./IphoneMockup";
import Image from "next/image";

/* ─── Minigame phone mockup ─────────────────────────────────────── */
function MinigamePhone({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: 220, flexShrink: 0 }}>
      <div style={{
        background: "#1A1A1A", borderRadius: 36, padding: "6px 4px 4px",
        border: "2px solid #2A2A2A",
        boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06)",
      }}>
        <div style={{ width: 90, height: 24, background: "#000", borderRadius: 14, margin: "0 auto 4px" }} />
        <div style={{
          borderRadius: 28, overflow: "hidden", minHeight: 420, background: "#0D0B1A",
          display: "flex", flexDirection: "column", padding: "10px 14px 14px", position: "relative",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>9:41</span>
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <rect x="0" y="3" width="3" height="7" rx="0.5" fill="rgba(255,255,255,0.6)" />
                <rect x="4" y="2" width="3" height="8" rx="0.5" fill="rgba(255,255,255,0.6)" />
                <rect x="8" y="0" width="3" height="10" rx="0.5" fill="rgba(255,255,255,0.6)" />
              </svg>
              <div style={{ width: 22, height: 11, borderRadius: 3, border: "1px solid rgba(255,255,255,0.5)", padding: "1px 2px", display: "flex", alignItems: "center" }}>
                <div style={{ width: "75%", height: "100%", background: "rgba(255,255,255,0.75)", borderRadius: 2 }} />
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

function Minigame1Preview() {
  return (
    <MinigamePhone>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.6)" }}>←</span>
        </div>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em" }}>Criando seu potencial</span>
      </div>
      <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "10px", marginBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 5 }}>
          <span style={{ width: 14, height: 14, borderRadius: "50%", background: "rgba(148,136,196,0.3)", fontSize: 8, color: "var(--lavender-2)", display: "flex", alignItems: "center", justifyContent: "center" }}>1</span>
          <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.90)" }}>O que você quer criar?</p>
        </div>
        <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 6, padding: "5px 8px" }}>
          <p style={{ fontSize: 9.5, color: "rgba(255,255,255,0.55)", fontStyle: "italic" }}>mais liberdade...</p>
        </div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "10px", marginBottom: 8 }}>
        <p style={{ fontSize: 9, fontWeight: 700, color: "rgba(148,136,196,0.90)", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 5 }}>Que frequência você quer irradiar?</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {["✓ Clareza", "Foco", "Leveza", "Presença"].map((e, i) => (
            <span key={e} style={{ fontSize: 8.5, background: i === 0 ? "rgba(148,136,196,0.25)" : "rgba(255,255,255,0.06)", border: `1px solid ${i === 0 ? "rgba(148,136,196,0.4)" : "rgba(255,255,255,0.10)"}`, borderRadius: 99, padding: "3px 8px", color: i === 0 ? "var(--lavender-2)" : "rgba(255,255,255,0.65)" }}>{e}</span>
          ))}
        </div>
      </div>
      <div style={{ background: "rgba(148,136,196,0.25)", border: "1px solid rgba(148,136,196,0.30)", borderRadius: 8, padding: "7px", textAlign: "center", marginTop: "auto" }}>
        <p style={{ fontSize: 9.5, color: "rgba(192,180,224,0.90)", fontWeight: 600 }}>Continuar →</p>
      </div>
    </MinigamePhone>
  );
}

function Minigame2Preview() {
  return (
    <MinigamePhone>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.6)" }}>←</span>
        </div>
        <span style={{ fontSize: 9.5, color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em" }}>Recondicione corpo e mente</span>
      </div>
      <p style={{ fontSize: 8.5, color: "rgba(255,255,255,0.40)", fontStyle: "italic", marginBottom: 10, lineHeight: 1.4 }}>
        Observe o que está presente no seu corpo agora.
      </p>
      <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "9px", marginBottom: 7 }}>
        <p style={{ fontSize: 8.5, fontWeight: 700, color: "rgba(148,136,196,0.85)", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 4 }}>Padrão Atual</p>
        <p style={{ fontSize: 8.5, color: "rgba(255,255,255,0.50)", marginBottom: 6 }}>O que está ativo no seu corpo agora?</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          {["Tensão", "Dispersão", "Cansaço", "Agitação"].map((e) => (
            <span key={e} style={{ fontSize: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 99, padding: "2.5px 7px", color: "rgba(255,255,255,0.65)" }}>{e}</span>
          ))}
        </div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "9px", marginBottom: 8 }}>
        <p style={{ fontSize: 8.5, fontWeight: 700, color: "rgba(196,152,60,0.85)", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 4 }}>Novo Padrão</p>
        <p style={{ fontSize: 8.5, color: "rgba(255,255,255,0.50)", marginBottom: 6 }}>Qual estado você quer instalar?</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          {["✓ Calma", "Foco", "Confiança", "Presença"].map((e, i) => (
            <span key={e} style={{ fontSize: 8, background: i === 0 ? "rgba(196,152,60,0.20)" : "rgba(255,255,255,0.06)", border: `1px solid ${i === 0 ? "rgba(196,152,60,0.35)" : "rgba(255,255,255,0.10)"}`, borderRadius: 99, padding: "2.5px 7px", color: i === 0 ? "rgba(212,174,88,0.95)" : "rgba(255,255,255,0.65)" }}>{e}</span>
          ))}
        </div>
      </div>
      <div style={{ background: "rgba(126,206,222,0.18)", border: "1px solid rgba(126,206,222,0.25)", borderRadius: 8, padding: "7px", textAlign: "center", marginTop: "auto" }}>
        <p style={{ fontSize: 9, color: "rgba(180,225,235,0.90)", fontWeight: 600 }}>Criar esse estado →</p>
      </div>
    </MinigamePhone>
  );
}

type Item = {
  type: "minigame" | "meditation";
  tagline: string;
  title: string;
  duration?: string;
  description: string;
  imageSrc?: string;
  progressWidth?: string;
  visual: React.ReactNode;
};

const items: Item[] = [
  {
    type: "minigame",
    tagline: "Exercício interativo · Antes de começar",
    title: "Criando seu potencial",
    description: "Defina, em palavras suas, o que quer criar — e o estado emocional de quem já vive isso. Você sai com uma intenção clara antes de meditar.",
    visual: <Minigame1Preview />,
  },
  {
    type: "meditation",
    tagline: "Sessão 1",
    title: "SINTONIZE NOVOS POTENCIAIS",
    duration: "5 min",
    description: "Acesse o campo de possibilidades além do seu passado. Cada sessão treina seu sistema nervoso para viver no futuro antes de ele acontecer.",
    imageSrc: "/images/Sintonize.webp",
    progressWidth: "55%",
    visual: (
      <IphoneMockup
        imageSrc="/images/Sintonize.webp"
        artwork={<Image src="/images/Sintonize.webp" alt="" fill sizes="220px" style={{ objectFit: "cover" }} />}
        title="SINTONIZE NOVOS POTENCIAIS"
        progressWidth="55%"
      />
    ),
  },
  {
    type: "meditation",
    tagline: "Sessão 2",
    title: "BÊNÇÃO DOS CENTROS DE ENERGIA",
    duration: "7 min",
    description: "Ative seu corpo para um novo estado interno. Sua biologia responde ao foco que você sustenta — e aqui você aprende a direcioná-lo.",
    imageSrc: "/images/Ben%C3%A7%C3%B5es%20dos%20centros.webp",
    progressWidth: "36%",
    visual: (
      <IphoneMockup
        imageSrc="/images/Ben%C3%A7%C3%B5es%20dos%20centros.webp"
        artwork={<Image src="/images/Ben%C3%A7%C3%B5es%20dos%20centros.webp" alt="" fill sizes="220px" style={{ objectFit: "cover" }} />}
        title="BÊNÇÃO DOS CENTROS DE ENERGIA"
        progressWidth="36%"
      />
    ),
  },
  {
    type: "minigame",
    tagline: "Exercício interativo · Antes da próxima sessão",
    title: "Recondicione seu corpo e mente",
    description: "Observe o que está preso no seu sistema nervoso agora. Escolha o estado que você quer instalar. Um exercício simples, com impacto profundo.",
    visual: <Minigame2Preview />,
  },
  {
    type: "meditation",
    tagline: "Sessão 3",
    title: "RECONDICIONE CORPO E MENTE",
    duration: "7 min",
    description: "O que você repete, vira padrão. Esta sessão interrompe o ciclo antigo — e ensina seu corpo a viver no futuro antes dele chegar.",
    imageSrc: "/images/Recondicione.webp",
    progressWidth: "22%",
    visual: (
      <IphoneMockup
        imageSrc="/images/Recondicione.webp"
        artwork={<Image src="/images/Recondicione.webp" alt="" fill sizes="220px" style={{ objectFit: "cover" }} />}
        title="RECONDICIONE CORPO E MENTE"
        progressWidth="22%"
      />
    ),
  },
  {
    type: "meditation",
    tagline: "Sessão 4",
    title: "MEDITAÇÃO CAMINHANDO",
    duration: "5 min",
    description: "Para quando sentar não for suficiente. Leve a frequência da sua nova realidade para o movimento — para o mundo físico onde você vive.",
    imageSrc: "/images/Medita%C3%A7%C3%A3o%20ao%20Amanhecer.webp",
    progressWidth: "68%",
    visual: (
      <IphoneMockup
        imageSrc="/images/Medita%C3%A7%C3%A3o%20ao%20Amanhecer.webp"
        artwork={<Image src="/images/Medita%C3%A7%C3%A3o%20ao%20Amanhecer.webp" alt="" fill sizes="220px" style={{ objectFit: "cover" }} />}
        title="MEDITAÇÃO CAMINHANDO"
        progressWidth="68%"
      />
    ),
  },
  {
    type: "meditation",
    tagline: "Sessão 5 · A mais profunda",
    title: "ESPAÇO-TEMPO, TEMPO-ESPAÇO",
    duration: "5 min",
    description: "Reserve um momento só seu. Aqui, você acessa o campo onde sua nova realidade já existe — antes de ela chegar ao mundo físico.",
    imageSrc: "/images/tempo.webp",
    progressWidth: "80%",
    visual: (
      <IphoneMockup
        imageSrc="/images/tempo.webp"
        artwork={<Image src="/images/tempo.webp" alt="" fill sizes="220px" style={{ objectFit: "cover" }} />}
        title="ESPAÇO-TEMPO / TEMPO-ESPAÇO"
        progressWidth="80%"
      />
    ),
  },
];

const BG = "#080613";

/* ─── Mobile Carousel ────────────────────────────────────────────── */
function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isDragging = useRef(false);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, items.length - 1));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = false;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
    if (dx > dy && dx > 8) isDragging.current = true;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 44) next();
    else if (diff < -44) prev();
  };

  const item = items[current];
  const isMinigame = item.type === "minigame";

  return (
    <div style={{ width: "100%" }}>
      <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} style={{ touchAction: "pan-y" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.75rem", position: "relative" }}>
          {isMinigame && (
            <div style={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(100,80,180,0.18) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
          )}
          <div style={{ transition: "opacity 0.25s ease, transform 0.25s ease" }}>{item.visual}</div>
        </div>
        <div style={{ textAlign: "center", padding: "0 1rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, marginBottom: "0.75rem" }}>
            <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: isMinigame ? "var(--lavender)" : "var(--gold)", flexShrink: 0 }} />
            <p className="font-mono" style={{ fontSize: "0.625rem", color: isMinigame ? "rgba(192,180,224,0.70)" : "rgba(196,152,60,0.70)", textTransform: "uppercase", letterSpacing: "0.16em" }}>
              {item.tagline}{item.duration ? ` · ${item.duration}` : ""}
            </p>
          </div>
          <h3 className="font-display" style={{ fontSize: isMinigame ? "1.5rem" : "1.35rem", fontWeight: isMinigame ? 600 : 700, color: "rgba(235,229,218,0.92)", marginBottom: "0.875rem", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
            {item.title}
          </h3>
          <div style={{ width: 24, height: 1, background: `linear-gradient(90deg, ${isMinigame ? "rgba(148,136,196,0.50)" : "rgba(196,152,60,0.50)"}, transparent)`, margin: "0 auto 0.875rem" }} />
          <p className="font-display" style={{ fontSize: "1rem", color: "rgba(210,205,230,0.88)", lineHeight: 1.7, fontStyle: "italic", fontWeight: 500, maxWidth: 320, margin: "0 auto" }}>
            "{item.description}"
          </p>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.25rem", marginTop: "2rem" }}>
        <button onClick={prev} disabled={current === 0} aria-label="Anterior" style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(148,136,196,0.20)", background: "rgba(148,136,196,0.06)", color: current === 0 ? "rgba(148,136,196,0.20)" : "rgba(192,180,224,0.70)", display: "flex", alignItems: "center", justifyContent: "center", cursor: current === 0 ? "default" : "pointer", transition: "all 0.2s ease", flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {items.map((it, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`Ir para ${it.title}`} style={{ width: i === current ? 18 : 6, height: 6, borderRadius: 999, border: "none", background: i === current ? (items[i].type === "minigame" ? "var(--lavender)" : "var(--gold)") : "rgba(148,136,196,0.22)", cursor: "pointer", padding: 0, transition: "width 0.3s ease, background 0.3s ease", flexShrink: 0 }} />
          ))}
        </div>
        <button onClick={next} disabled={current === items.length - 1} aria-label="Próximo" style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(148,136,196,0.20)", background: "rgba(148,136,196,0.06)", color: current === items.length - 1 ? "rgba(148,136,196,0.20)" : "rgba(192,180,224,0.70)", display: "flex", alignItems: "center", justifyContent: "center", cursor: current === items.length - 1 ? "default" : "pointer", transition: "all 0.2s ease", flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
      <p className="font-mono" style={{ textAlign: "center", fontSize: "0.5625rem", color: "rgba(148,136,196,0.35)", letterSpacing: "0.18em", marginTop: "0.875rem" }}>
        {String(current + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
      </p>
    </div>
  );
}

export default function Meditations() {
  return (
    <section id="meditations" style={{ padding: "clamp(4.75rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2rem) clamp(4rem, 7vw, 6rem)", background: BG, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(148,136,196,0.10), transparent)" }} />
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(100,80,180,0.07) 0%, transparent 70%)", top: "30%", left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5.5rem" }}>
          <span className="section-label reveal" style={{ marginBottom: "1.25rem", color: "rgba(148,136,196,0.45)" }}>Dentro do app</span>
          <h2 className="font-display reveal" style={{ fontSize: "clamp(1.75rem, 5vw, 2.6rem)", fontWeight: 600, color: "rgba(235,229,218,0.92)", marginBottom: "1.25rem", lineHeight: 1.3 }}>
            Cada sessão treina seu sistema nervoso
            <br />
            <span style={{ color: "var(--lavender-2)" }}>para viver no futuro antes de ele acontecer.</span>
          </h2>
          <div style={{ width: 36, height: 1, margin: "1.75rem auto", background: "linear-gradient(90deg, transparent, rgba(148,136,196,0.40), transparent)" }} />
          <p className="reveal" style={{ fontSize: "clamp(1rem, 1.8vw, 1.125rem)", color: "rgba(210,205,230,0.88)", maxWidth: 520, margin: "0 auto", lineHeight: 1.72, fontFamily: "var(--font-body)", fontWeight: 500 }}>
            Você não assiste passivamente. Você pratica. Cada exercício pede que seu corpo responda de um jeito novo.
          </p>
        </div>

        <div className="med-desktop">
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2.75rem, 7vw, 5.5rem)" }}>
            {items.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const isMinigame = item.type === "minigame";
              return (
                <div key={item.title} className="reveal med-row" style={{ display: "flex", flexDirection: isLeft ? "row" : "row-reverse", alignItems: "center", gap: "clamp(2.25rem, 6vw, 4.5rem)" }}>
                  <div style={{ flexShrink: 0, display: "flex", justifyContent: "center", position: "relative" }}>
                    {isMinigame && (<div style={{ position: "absolute", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(100,80,180,0.14) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />)}
                    {item.visual}
                  </div>
                  <div style={{ flex: 1, maxWidth: 460 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 7, marginBottom: "1rem" }}>
                      <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: isMinigame ? "var(--lavender)" : "var(--gold)", flexShrink: 0 }} />
                      <p className="font-mono" style={{ fontSize: "0.6875rem", color: isMinigame ? "rgba(192,180,224,0.70)" : "rgba(196,152,60,0.70)", textTransform: "uppercase", letterSpacing: "0.16em" }}>
                        {item.tagline}{item.duration ? ` · ${item.duration}` : ""}
                      </p>
                    </div>
                    <h3 className="font-display" style={{ fontSize: isMinigame ? "clamp(1.6rem, 3.5vw, 2.1rem)" : "clamp(1.4rem, 3vw, 1.85rem)", fontWeight: isMinigame ? 600 : 700, color: "rgba(235,229,218,0.92)", marginBottom: "1.25rem", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                      {item.title}
                    </h3>
                    <div style={{ width: 24, height: 1, background: `linear-gradient(90deg, ${isMinigame ? "rgba(148,136,196,0.50)" : "rgba(196,152,60,0.50)"}, transparent)`, marginBottom: "1.25rem" }} />
                    <p className="font-display" style={{ fontSize: "1.0625rem", color: "rgba(210,205,230,0.88)", lineHeight: 1.72, fontStyle: "italic", fontWeight: 500 }}>
                      "{item.description}"
                    </p>
                    {isMinigame && (
                      <div style={{ marginTop: "1.5rem" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.75rem", color: "rgba(192,180,224,0.72)", fontFamily: "var(--font-mono)", letterSpacing: "0.10em" }}>
                          <span style={{ width: 16, height: 16, borderRadius: "50%", border: "1px solid rgba(148,136,196,0.30)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 9 }}>✦</span>
                          Exercício interativo no app
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="med-mobile"><MobileCarousel /></div>
      </div>

      <style>{`
        .med-desktop { display: block; }
        .med-mobile  { display: none;  }
        @media (max-width: 768px) { .med-desktop { display: none; } .med-mobile { display: block; } }
      `}</style>
    </section>
  );
}
