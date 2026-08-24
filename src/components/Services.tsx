import { site } from "@/config/site";

export default function Services() {
  return (
    <section id="services" style={{ background: "var(--paper-raised)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{site.services.eyebrow}</span>
          <h2>{site.services.title}</h2>
          <p>{site.services.lede}</p>
        </div>

        <div
          className="service-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}
        >
          {site.services.items.map((s) => (
            <div
              key={s.tag}
              className="service-card"
              style={{
                background: "var(--paper)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
                padding: "26px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                transition: "border-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--blue-bright)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 14px 30px -18px rgba(27,58,138,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div
                className="service-icon"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: "var(--blue-deep)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                }}
              >
                {s.icon}
              </div>
              <span
                className="tag"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.08em",
                  color: "var(--amber-dark)",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {s.tag}
              </span>
              <h3 style={{ fontSize: "1.12rem" }}>{s.title}</h3>
              <p style={{ color: "var(--ink-soft)", fontSize: "0.93rem", margin: 0 }}>{s.description}</p>
              <details style={{ marginTop: "auto", paddingTop: "6px", borderTop: "1px dashed var(--line)" }}>
                <summary
                  style={{
                    cursor: "pointer",
                    fontSize: "0.86rem",
                    fontWeight: 600,
                    color: "var(--blue-deep)",
                    padding: "10px 0 4px",
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  What's included
                  <span style={{ marginLeft: "auto", fontSize: "1.1rem", transition: "transform 0.2s ease" }}>+</span>
                </summary>
                <ul style={{ margin: "4px 0 2px", paddingLeft: "18px", color: "var(--ink-soft)", fontSize: "0.88rem", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {s.included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
