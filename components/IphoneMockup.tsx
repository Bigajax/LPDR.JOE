"use client";
import Image from "next/image";

interface IphoneMockupProps {
  imageSrc: string;
  artwork: React.ReactNode;
  title: string;
  progressWidth: string;
}

export default function IphoneMockup({
  imageSrc,
  artwork,
  title,
  progressWidth,
}: IphoneMockupProps) {
  return (
    <div style={{ width: 220, flexShrink: 0, position: "relative" }}>
      <div
        style={{
          background: "#1A1A1A",
          borderRadius: 36,
          padding: "6px 4px 4px",
          border: "2px solid #2A2A2A",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            width: 90,
            height: 24,
            background: "#000",
            borderRadius: 14,
            margin: "0 auto 4px",
          }}
        />

        <div
          style={{
            borderRadius: 28,
            overflow: "hidden",
            minHeight: 420,
            display: "flex",
            flexDirection: "column",
            padding: "8px 14px 14px",
            position: "relative",
          }}
        >
          <Image
            src={imageSrc}
            alt=""
            aria-hidden="true"
            fill
            sizes="220px"
            style={{
              objectFit: "cover",
              filter: "blur(24px) brightness(0.55) saturate(1.4)",
              transform: "scale(1.15)",
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>
                9:41
              </span>
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <rect x="0" y="3" width="3" height="7" rx="0.5" fill="rgba(255,255,255,0.6)" />
                  <rect x="4" y="2" width="3" height="8" rx="0.5" fill="rgba(255,255,255,0.6)" />
                  <rect x="8" y="0" width="3" height="10" rx="0.5" fill="rgba(255,255,255,0.6)" />
                </svg>
                <div
                  style={{
                    width: 22,
                    height: 11,
                    borderRadius: 3,
                    border: "1px solid rgba(255,255,255,0.5)",
                    padding: "1px 2px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "75%",
                      height: "100%",
                      background: "rgba(255,255,255,0.75)",
                      borderRadius: 2,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Mini white nav bar (improves logo contrast on colorful covers) */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.94)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 14,
                  padding: "8px 12px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  boxShadow: "0 14px 34px rgba(0,0,0,0.28)",
                }}
              >
                <Image src="/images/logo-ecotopia.webp" alt="" aria-hidden="true" width={20} height={20} sizes="20px" style={{ objectFit: "contain" }} />
                <span style={{ fontSize: 10, color: "rgba(20,15,38,0.92)", fontFamily: "monospace", fontWeight: 800, letterSpacing: "0.14em" }}>
                  ECOTOPIA
                </span>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                aspectRatio: "1",
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
                fontSize: 48,
                overflow: "hidden",
                position: "relative",
              }}
            >
              {artwork}
            </div>

            <div style={{ textAlign: "center", marginBottom: 8 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "white", lineHeight: 1.3, marginBottom: 4 }}>
                {title}
              </div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>
                Som de fundo · 432Hz
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                marginBottom: 12,
              }}
            >
              <span
                aria-hidden="true"
                style={{ width: 18, height: 18, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M11 7L5 12L11 17V7Z" fill="currentColor" />
                  <path d="M19 7L13 12L19 17V7Z" fill="currentColor" />
                </svg>
              </span>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 7.5V16.5L16.5 12L9 7.5Z" fill="currentColor" />
                </svg>
              </div>
              <span
                aria-hidden="true"
                style={{ width: 18, height: 18, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M13 7L19 12L13 17V7Z" fill="currentColor" />
                  <path d="M5 7L11 12L5 17V7Z" fill="currentColor" />
                </svg>
              </span>
            </div>

            <div>
              <div style={{ height: 3, background: "rgba(255,255,255,0.18)", borderRadius: 3, position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: progressWidth,
                    background: "rgba(255,255,255,0.8)",
                    borderRadius: 3,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: progressWidth,
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "white",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

