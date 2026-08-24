import { site } from "@/config/site";

export default function About() {
  return (
    <section id="about">
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "56px", alignItems: "center" }}>
        <div
          className="about-panel"
          style={{
            background: "linear-gradient(155deg, var(--blue-deep), var(--ink) 120%)",
            borderRadius: 18,
            padding: 34,
            color: "#fff",
          }}
        >
          <span className="eyebrow" style={{ color: "var(--amber)" }}>{site.about.panelEyebrow}</span>
          <h3 style={{ color: "#fff", fontSize: "1.3rem", margin: "12px 0 16px" }}>{site.about.panelTitle}</h3>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem" }}>{site.about.panelText}</p>
          <div style={{ display: "flex", gap: "28px", marginTop: "26px", flexWrap: "wrap" }}>
            {site.about.panelStats.map((s) => (
              <div key={s.label}>
                <strong style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.6rem" }}>{s.value}</strong>
                <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.7)", fontFamily: "'JetBrains Mono', monospace" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-copy">
          <span className="eyebrow">{site.about.copyEyebrow}</span>
          <h2 style={{ margin: "12px 0 18px" }}>{site.about.copyTitle}</h2>
          {site.about.paragraphs.map((p) => (
            <p key={p} style={{ color: "var(--ink-soft)", fontSize: "1.02rem", marginBottom: "16px" }}>{p}</p>
          ))}
          <ul style={{ paddingLeft: "20px", color: "var(--ink-soft)", display: "flex", flexDirection: "column", gap: "8px" }}>
            {site.about.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
