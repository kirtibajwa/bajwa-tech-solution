import { site } from "@/config/site";
import { Bot, Cloud, Code2, Cpu, Gauge, Rocket, ShieldCheck, Sparkles, Trophy, Users } from "lucide-react";

const highlights = [
  { icon: Cpu, title: "AI-ready", text: "Smart solutions" },
  { icon: ShieldCheck, title: "Secure", text: "Built with care" },
  { icon: Rocket, title: "Scalable", text: "Ready to grow" },
  { icon: Gauge, title: "Fast", text: "Made for speed" },
];

const metrics = [
  { icon: Users, value: "1:1", label: "Direct support" },
  { icon: Rocket, value: "100%", label: "Mobile ready" },
  { icon: Trophy, value: "6", label: "Service lines" },
  { icon: ShieldCheck, value: "24/7", label: "Always online" },
];

export default function Hero() {
  return (
    <section id="home" className="hero hero-tech" style={{ padding: "82px 0 0", overflow: "hidden" }}>
      <div className="hero-grid wrap" style={{ display: "grid", gridTemplateColumns: "0.96fr 1.04fr", gap: "28px", alignItems: "center" }}>
        <div>
          <span className="eyebrow reveal reveal-one">{site.hero.eyebrow}</span>
          <h1 className="reveal reveal-two" style={{ fontSize: "clamp(2.1rem, 4.2vw, 3.1rem)", lineHeight: 1.12, margin: "14px 0 20px" }}>
            Your vision.<br />Our technology.{" "}
            <em style={{ fontStyle: "normal", background: "linear-gradient(180deg, transparent 62%, rgba(245,165,36,0.4) 62%)" }}>
              Limitless possibilities.
            </em>
          </h1>
          <p className="reveal reveal-three" style={{ fontSize: "1.08rem", color: "var(--ink-soft)", maxWidth: "46ch", marginBottom: "30px" }}>
            {site.hero.lead}
          </p>
          <div className="reveal reveal-four" style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "30px" }}>
            <a href="#contact" className="btn btn-primary">
              Start a project
            </a>
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              WhatsApp us
            </a>
          </div>
          <div className="hero-highlights reveal reveal-four">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="hero-highlight">
                <Icon size={17} />
                <span><strong>{title}</strong><small>{text}</small></span>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-visual" role="img" aria-label="Abstract blue technology network illustration">
          <div className="tech-orbit orbit-one" />
          <div className="tech-orbit orbit-two" />
          <div className="tech-core"><Bot size={72} strokeWidth={1.2} /></div>
          <div className="tech-node node-ai"><Cpu size={24} /><span>Artificial<br />intelligence</span></div>
          <div className="tech-node node-cloud"><Cloud size={24} /><span>Cloud<br />solutions</span></div>
          <div className="tech-node node-code"><Code2 size={24} /><span>Custom<br />development</span></div>
          <div className="tech-node node-secure"><ShieldCheck size={24} /><span>Cyber<br />security</span></div>
        </div>
      </div>

      <div className="hero-prompt wrap reveal reveal-four">
        <div className="prompt-copy"><Sparkles size={21} /><span>Tell us about your idea or project...</span></div>
        <div className="prompt-tags"><span>Websites</span><span>Mobile apps</span><span>AI solutions</span><span>E-commerce</span></div>
        <a href="#contact" className="btn btn-primary"><Sparkles size={16} /> Let&apos;s talk</a>
      </div>

      <div className="hero-metrics wrap reveal reveal-four">
        {metrics.map(({ icon: Icon, value, label }) => <div key={label}><Icon size={21} /><strong>{value}</strong><span>{label}</span></div>)}
      </div>
    </section>
  );
}
