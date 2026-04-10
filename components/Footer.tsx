"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "rgba(242,235,224,0.92)", borderTop: "1px solid rgba(28,20,40,0.10)", padding: "52px 24px 40px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 24, textAlign: "center" }}>
        <Image
          src="/images/logo-ecotopia.webp"
          alt="Ecotopia"
          width={42}
          height={42}
          sizes="42px"
          style={{ objectFit: "contain", opacity: 0.9, display: "block" }}
        />

        <p className="font-display" style={{ fontSize: 13.5, color: "rgba(28,20,40,0.62)", lineHeight: 1.65, fontStyle: "italic" }}>
          Baseado nos princípios de{" "}
          <em style={{ color: "rgba(28,20,40,0.72)" }}>"Como se Tornar Sobrenatural"</em>{" "}
          (Dr. Joe Dispenza)
        </p>

        <div style={{ width: 28, height: 1, background: "rgba(28,20,40,0.18)", borderRadius: 1 }} />

        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
          {["Termos de Uso", "Privacidade", "Contato"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-mono"
              style={{ fontSize: 11, color: "rgba(28,20,40,0.44)", textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(124,111,192,0.95)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(28,20,40,0.44)")}
            >
              {link}
            </a>
          ))}
        </div>

        <p className="font-mono" style={{ fontSize: 10.5, color: "rgba(28,20,40,0.38)", lineHeight: 1.6, maxWidth: 500, letterSpacing: "0.04em" }}>
          © 2026 Ecotopia. Este produto não é afiliado ao Dr. Joe Dispenza ou à sua organização.
        </p>
      </div>
    </footer>
  );
}
