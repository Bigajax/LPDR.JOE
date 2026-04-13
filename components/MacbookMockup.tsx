"use client";
import Image from "next/image";

function AppScreen() {
  return (
    <div style={{
      width: "100%",
      aspectRatio: "840/560",
      position: "relative",
      overflow: "hidden",
      background: "#050a1a",
      borderRadius: "0 0 6px 6px",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* ── Nav (white bar like the real app) ── */}
      <div style={{
        flexShrink: 0,
        height: 34,
        background: "rgba(255,255,255,0.97)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        display: "flex", alignItems: "center",
        padding: "0 14px",
        gap: 8,
        zIndex: 2,
      }}>
        <Image src="/images/logo-ecotopia.webp" alt="" width={24} height={24} sizes="24px" style={{ objectFit: "contain" }} />
        <div style={{ flex: 1, display: "flex", justifyContent: "center", gap: 18 }}>
          <span style={{ fontSize: 8, color: "rgba(0,0,0,0.45)", fontFamily: "sans-serif", display: "inline-flex", alignItems: "center", gap: 5 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 10.5L12 3L21 10.5V21H14V14H10V21H3V10.5Z" fill="currentColor" opacity="0.9" />
            </svg>
            Hoje
          </span>
          <span style={{ fontSize: 8, color: "rgba(0,0,0,0.45)", fontFamily: "sans-serif", display: "inline-flex", alignItems: "center", gap: 5 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M10.5 18.5a8 8 0 1 1 5.1-1.9l4.4 4.4-1.4 1.4-4.4-4.4a8 8 0 0 1-3.7.5Zm0-2a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" fill="currentColor" opacity="0.9" />
            </svg>
            Explorar
          </span>
        </div>
      </div>

      {/* ── Hero area ── */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        {/* Background image (fill height, crown at top) */}
        <Image
          src="/images/app-hero-bg.webp"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 840px"
          style={{ objectFit: "cover", objectPosition: "center top", transform: "scale(1.15)" }}
        />

        {/* Overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(5,10,26,0.05) 0%, rgba(5,10,26,0.35) 50%, rgba(5,10,26,0.88) 100%)",
        }} />

        {/* Content (vertically centered) */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: "0 44px",
          textAlign: "center",
        }}>
          {/* Badge */}
          <div style={{
            background: "rgba(40,60,180,0.55)",
            border: "1px solid rgba(100,140,255,0.40)",
            borderRadius: 999,
            padding: "3px 12px",
            marginBottom: 10,
          }}>
            <span style={{ fontSize: 7, color: "rgba(200,220,255,0.95)", fontFamily: "monospace", letterSpacing: "0.20em", textTransform: "uppercase" }}>
              Dr. Joe Dispenza
            </span>
          </div>

          {/* Headline */}
          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(14px, 2.5vw, 23px)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.22,
            marginBottom: 10,
            textShadow: "0 2px 24px rgba(0,0,0,0.80)",
          }}>
            Você não precisa repetir o passado.
            <br />
            <span style={{ fontWeight: 400, color: "rgba(210,220,255,0.80)" }}>
              Pode criar uma nova realidade.
            </span>
          </h2>

          {/* Sub */}
          <p style={{
            fontSize: "clamp(6.5px, 0.9vw, 9px)",
            color: "rgba(180,200,255,0.50)",
            fontFamily: "sans-serif",
            lineHeight: 1.55,
            maxWidth: 280,
          }}>
            Um processo guiado para alinhar intenção e estados elevados,<br />transformando sua mente e sua vida.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MacbookMockup() {
  return (
    <div style={{ width: "100%", maxWidth: 860, margin: "0 auto", perspective: "1200px" }}>
      <div
        style={{
          transform: "rotateX(4deg)",
          transition: "transform 0.5s ease",
          transformOrigin: "bottom center",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "rotateX(0deg)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "rotateX(4deg)";
        }}
      >
        {/* Screen bezel */}
        <div style={{
          background: "#1C1C1E",
          borderRadius: "12px 12px 0 0",
          padding: "10px 10px 0",
          border: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "none",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 0 80px rgba(148,136,196,0.18)",
        }}>
          {/* Browser chrome */}
          <div style={{
            background: "#2C2C2E",
            borderRadius: "8px 8px 0 0",
            padding: "7px 12px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <div style={{ display: "flex", gap: 5 }}>
              {["#FF5F57", "#FFBD2E", "#28CA41"].map((c) => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
              ))}
            </div>
            <div style={{
              flex: 1,
              background: "#1C1C1E",
              borderRadius: 5,
              padding: "3px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <span style={{ fontSize: 10, color: "rgba(245,245,245,0.30)", fontFamily: "monospace" }}>
                ecotopia.app/protocolo
              </span>
            </div>
          </div>

          {/* App screen rendered in code */}
          <AppScreen />
        </div>

        {/* Base */}
        <div style={{
          background: "#1C1C1E",
          height: 18,
          borderRadius: "0 0 4px 4px",
          border: "1px solid rgba(255,255,255,0.08)",
          borderTop: "none",
          position: "relative",
        }}>
          <div style={{
            position: "absolute", bottom: 0, left: "50%",
            transform: "translateX(-50%)",
            width: 60, height: 5,
            background: "#141416",
            borderRadius: "4px 4px 0 0",
          }} />
        </div>

        {/* Shadow */}
        <div style={{
          height: 14,
          background: "rgba(0,0,0,0.40)",
          filter: "blur(12px)",
          marginTop: 2,
        }} />
      </div>
    </div>
  );
}
