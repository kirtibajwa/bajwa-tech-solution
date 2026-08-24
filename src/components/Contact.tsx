import { useState, type FormEvent } from "react";
import { site } from "@/config/site";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");
    setSubmitted(false);

    const form = new FormData(event.currentTarget);
    try {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 10000);
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          message: form.get("message"),
          project: "Bajwa Tech Solution",
        }),
      });
      window.clearTimeout(timeout);

      if (!response.ok) {
        setError("Your message could not be sent. Please try again.");
      } else {
        event.currentTarget.reset();
        setSubmitted(true);
      }
    } catch {
      setError("Backend is not running. Start the server on port 5000 and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" style={{ background: "var(--ink)", color: "#fff" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" style={{ color: "var(--amber)" }}>{site.contact.eyebrow}</span>
          <h2 style={{ color: "#fff" }}>{site.contact.title}</h2>
          <p style={{ color: "rgba(255,255,255,0.65)" }}>{site.contact.lede}</p>
        </div>

        <div className="contact-layout">
          <a
            href={site.emailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card mail"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "var(--radius)",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              textDecoration: "none",
              color: "#fff",
              transition: "border-color 0.15s ease, background 0.15s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(245,165,36,0.5)"; e.currentTarget.style.background = "rgba(245,165,36,0.06)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
          >
            <div
              className="icon"
              style={{
                width: 46,
                height: 46,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(245,165,36,0.18)",
                color: "var(--amber)",
                fontSize: "1.3rem",
              }}
            >
              ✉
            </div>
            <h3 style={{ color: "#fff", fontSize: "1.1rem" }}>Email</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", margin: 0, fontSize: "0.92rem" }}>
              Prefer email? Write to us with your requirements and we'll get back to you.
            </p>
            <span
              className="link"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.92rem",
                color: "#fff",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.3)",
                width: "fit-content",
                paddingBottom: "2px",
              }}
            >
              {site.emailLabel}
            </span>
          </a>

          <form className="inquiry-form" onSubmit={handleSubmit}>
            <span className="eyebrow" style={{ color: "var(--amber)" }}>Send a message</span>
            <h3 style={{ color: "#fff", fontSize: "1.4rem" }}>Tell us what you need</h3>
            <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
            <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
            <label>Mobile number<input name="phone" type="tel" placeholder="Your mobile number" required /></label>
            <label>Message<textarea name="message" placeholder="Tell us about your project" rows={4} required /></label>
            <button className="btn btn-primary" type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send inquiry"}
            </button>
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ justifyContent: "center" }}>
              Prefer WhatsApp? Chat with us
            </a>
            {submitted && <p className="form-success">Thanks, your message has been sent.</p>}
            {error && <p className="form-error">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
