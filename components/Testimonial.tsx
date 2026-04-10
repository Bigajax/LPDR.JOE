"use client";

export default function Testimonial() {
  return (
    <section
      style={{
        padding: "100px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Decorative quotes */}
        <div
          className="font-display"
          style={{
            fontSize: 160,
            lineHeight: 0.6,
            color: "var(--violet)",
            opacity: 0.15,
            userSelect: "none",
            marginBottom: 24,
          }}
        >
          "
        </div>

        <blockquote
          className="font-display reveal"
          style={{
            fontSize: "clamp(22px, 4vw, 36px)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "var(--text-primary)",
            lineHeight: 1.5,
            marginBottom: 28,
          }}
        >
          "Se eu criei a vida que tenho hoje…
          talvez eu possa criar uma nova."
        </blockquote>

        <cite
          className="reveal"
          style={{
            fontSize: 14,
            color: "var(--text-muted)",
            fontStyle: "normal",
            letterSpacing: "0.05em",
            display: "block",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 32,
              height: 1,
              background: "var(--violet)",
              verticalAlign: "middle",
              marginRight: 12,
              opacity: 0.5,
            }}
          />
          Anna Willems — De cadeira de rodas a uma nova vida, através da
          meditação
        </cite>
      </div>
    </section>
  );
}
