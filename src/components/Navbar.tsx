import { useState } from "react";
import { site } from "@/config/site";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(247,248,250,0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <nav className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px" }}>
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.15rem", textDecoration: "none", color: "var(--ink)" }}>
          <img
            src="/images/logo.png"
            alt="Bajwa Tech Solution logo"
            style={{ width: 52, height: 52, objectFit: "contain", flexShrink: 0 }}
          />
          {site.businessName}
        </a>

        <ul
          className={open ? "nav-links open" : "nav-links"}
          style={{
            display: open ? "flex" : undefined,
            alignItems: "center",
            gap: "32px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ textDecoration: "none", fontWeight: 500, fontSize: "0.95rem", color: "var(--ink-soft)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <a
            href={site.emailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-email"
            style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.88rem", color: "var(--ink-soft)", textDecoration: "none", fontWeight: 500 }}
          >
            ✉ {site.emailLabel}
          </a>
          <button
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "6px" }}
          >
            <span style={{ display: "block", width: 24, height: 2, background: "var(--ink)", margin: "5px 0", borderRadius: 2 }} />
            <span style={{ display: "block", width: 24, height: 2, background: "var(--ink)", margin: "5px 0", borderRadius: 2 }} />
            <span style={{ display: "block", width: 24, height: 2, background: "var(--ink)", margin: "5px 0", borderRadius: 2 }} />
          </button>
        </div>
      </nav>
    </header>
  );
}
