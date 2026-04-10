import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, DM_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Protocolo Ecotopia — Reprogramação mental e emocional em 7 minutos",
  description:
    "5 sessões guiadas (7 min/dia) para interromper padrões emocionais, elevar sua frequência e começar a criar a realidade que você projeta. Acesso imediato e vitalício.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${outfit.variable} ${dmMono.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
