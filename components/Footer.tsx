"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#080613", borderTop: "1px solid rgba(148,136,196,0.08)", padding: "52px 24px 40px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 24, textAlign: "center" }}>
        <Image
          src="/images/logo-ecotopia.webp"
          alt="Ecotopia"
          width={42}
          height={42}
          sizes="42px"
          style={{ objectFit: "contain", opacity: 0.75, display: "block", filter: "brightness(0) invert(1)" }}
        />

        <p className="font-display" style={{ fontSize: 13.5, color: "var(--fog-muted)", lineHeight: 1.65, fontStyle: "italic" }}>
          Baseado nos princípios de{" "}
          <em style={{ color: "rgba(235,229,218,0.55)" }}>"Como se Tornar Sobrenatural"</em>{" "}
          (Dr. Joe Dispenza)
        </p>

        <div style={{ width: 28, height: 1, background: "rgba(148,136,196,0.20)", borderRadius: 1 }} />

        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
          {["Termos de Uso", "Privacidade", "Contato"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-mono"
              style={{ fontSize: 11, color: "rgba(235,229,218,0.28)", textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(148,136,196,0.70)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(235,229,218,0.28)")}
            >
              {link}
            </a>
          ))}
        </div>

        <p className="font-mono" style={{ fontSize: 10.5, color: "rgba(235,229,218,0.20)", lineHeight: 1.6, maxWidth: 500, letterSpacing: "0.04em" }}>
          © 2026 Ecotopia. Este produto não é afiliado ao Dr. Joe Dispenza ou à sua organização.
        </p>
      </div>
    </footer>
  );
}
