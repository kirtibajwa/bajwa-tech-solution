import { site } from "@/config/site";

export default function Work() {
  return (
    <section id="work" style={{ background: "var(--paper-raised)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{site.work.eyebrow}</span>
          <h2>{site.work.title}</h2>
          <p>{site.work.lede}</p>
        </div>

        <div
          className="work-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", marginBottom: "56px" }}
        >
          {site.work.slots.map((slot) => (
            <div
              key={slot.num}
              className="work-card"
              style={{
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
                padding: "12px 12px 24px",
                color: "var(--ink-soft)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                background: "var(--paper)",
              }}
            >
              <div
                className="work-visual"
                style={{
                  minHeight: 148,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, var(--blue-deep), var(--blue-bright))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "3rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span className="work-visual-orbit" />
                <strong style={{ position: "relative", zIndex: 1 }}>{slot.icon}</strong>
                <small style={{ position: "absolute", left: 16, bottom: 12, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.08em", opacity: 0.8 }}>{slot.num} / PROJECT</small>
              </div>
              <span style={{ color: "var(--amber-dark)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>{slot.label}</span>
              <strong style={{ color: "var(--ink)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem", fontWeight: 600 }}>{slot.title}</strong>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>{slot.text}</p>
            </div>
          ))}
        </div>

        <div
          className="testimonial-strip"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            background: "var(--paper)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius)",
            padding: "26px 30px",
          }}
        >
          <p style={{ margin: 0, color: "var(--ink-soft)", fontSize: "0.98rem", maxWidth: "56ch" }}>
            <strong style={{ color: "var(--ink)" }}>{site.work.testimonialText}</strong>
          </p>
          <a href={site.emailUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            {site.work.testimonialCta}
          </a>
        </div>
      </div>
    </section>
  );
}
