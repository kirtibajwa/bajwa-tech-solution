import { site } from "@/config/site";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(135deg, var(--ink) 0%, var(--blue-deep) 100%)", color: "rgba(255,255,255,0.6)", borderTop: "3px solid var(--amber)" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", padding: "30px 0" }}>
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "1.15rem",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <img
            src="/images/logo.png"
            alt="Bajwa Tech Solution logo"
            style={{ width: 52, height: 52, objectFit: "contain", flexShrink: 0, background: "#fff", borderRadius: 10, padding: 4 }}
          />
          {site.businessName}
        </a>
        <ul style={{ display: "flex", gap: "22px", listStyle: "none", padding: 0, margin: 0, flexWrap: "wrap" }}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} style={{ textDecoration: "none", color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={site.emailUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
              {site.emailLabel}
            </a>
          </li>
        </ul>
      </div>
      <p style={{ fontSize: "0.8rem", textAlign: "center", paddingBottom: "24px", color: "rgba(255,255,255,0.35)", margin: 0 }}>
        © {new Date().getFullYear()} {site.businessName}. All rights reserved.
      </p>
    </footer>
  );
}
