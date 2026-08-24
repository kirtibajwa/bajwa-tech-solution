// ============================================================
//  EDIT YOUR SITE CONTENT HERE
//  Change text, links, colors, and services in this one file.
// ============================================================

export const site = {
  businessName: "Bajwa Tech Solution",

  emailUrl: "mailto:kirandeep@bajwatechsolution.com",
  emailLabel: "kirandeep@bajwatechsolution.com",
  whatsappUrl: "https://wa.me/919877891959?text=Hello%20Bajwa%20Tech%20Solution%2C%20I%27d%20like%20to%20discuss%20a%20website%20project.",
  whatsappLabel: "+91 98778 91959",

  hero: {
    eyebrow: "Web Design & Development Studio",
    title: "Websites built to bring your business online —",
    titleEm: "and keep it working.",
    lead: "We create fast, thoughtfully designed websites that help small businesses look credible, reach more customers, and grow online — with clear communication from start to launch.",
    primaryCta: "Email us",
    secondaryCta: "View services",
    stats: [
      { value: "6", label: "service lines" },
      { value: "100%", label: "mobile-ready builds" },
      { value: "1:1", label: "direct client contact" },
    ],
  },

  services: {
    eyebrow: "What we offer",
    title: "Services built around what your business actually needs",
    lede: "From a first landing page to a full online store — each service below can stand alone or work together as your business grows.",
    items: [
      {
        icon: "🎨",
        tag: "Website Design",
        title: "Clean, modern interfaces crafted around your brand",
        description:
          "We design websites that don't just look good — they work. Every layout guides visitors toward action, whether that's a purchase, a booking, or a message.",
        included: [
          "Custom design tailored to your brand colors and identity",
          "Mobile-first, fully responsive layouts",
          "Easy-to-navigate menus and clear call-to-action buttons",
          "Fast-loading pages with no unnecessary clutter",
        ],
      },
      {
        icon: "💻",
        tag: "Website Development",
        title: "Fast, reliable websites built with modern technology",
        description:
          "We turn designs into fully functional websites using current tools and best practices, so your site performs well and grows with your business.",
        included: [
          "Clean, optimized code for speed and performance",
          "Cross-browser and cross-device compatibility",
          "SEO-friendly structure to help you get found on Google",
          "Secure hosting setup and deployment support",
        ],
      },
      {
        icon: "🏢",
        tag: "Business Websites",
        title: "Professional sites that build trust and convert visitors",
        description:
          "Your website is often a customer's first impression of your business. We create polished, credible sites that make it easy for them to reach you.",
        included: [
          "Home, About, Services, and Contact pages",
          "Clear business information and easy contact options",
          "Testimonials/reviews section to build trust",
          "Email integration for quick inquiries",
        ],
      },
      {
        icon: "🖼️",
        tag: "Portfolio Websites",
        title: "Showcase your work and skills with a polished portfolio",
        description:
          "Perfect for freelancers, designers, photographers, and creative professionals who want to present their work cleanly and memorably.",
        included: [
          "Gallery/showcase section for your best work",
          "About section to highlight your skills and experience",
          "Contact form for potential clients to reach out",
          "Simple, distraction-free design that puts your work first",
        ],
      },
      {
        icon: "🛒",
        tag: "eCommerce Website",
        title: "Online stores built to sell — secure, simple, scalable",
        description:
          "We build online stores that make it easy for customers to browse, buy, and come back again.",
        included: [
          "Product catalog with categories and search",
          "Secure payment gateway integration",
          "Order and inventory management",
          "Mobile-optimized shopping experience",
        ],
      },
      {
        icon: "🔧",
        tag: "Website Maintenance",
        title: "Ongoing support to keep your website running smoothly",
        description:
          "Websites need regular updates and care. We make sure your site stays fast, secure, and up to date.",
        included: [
          "Regular content and design updates",
          "Bug fixes and performance monitoring",
          "Security updates",
          "Priority support via email",
        ],
      },
    ],
  },

  about: {
    panelEyebrow: "About us",
    panelTitle: "A direct, no-overhead way to get online",
    panelText:
      "You work straight with the person building your site — no account managers, no long email chains.",
    panelStats: [
      { value: "6", label: "SERVICE LINES" },
      { value: "WA", label: "DIRECT SUPPORT" },
      { value: "1", label: "POINT OF CONTACT" },
    ],
    copyEyebrow: "Who we are",
    copyTitle: "Bajwa Tech Solution",
    paragraphs: [
      "Bajwa Tech Solution designs and builds websites for clients who need a professional online presence without the complexity of a large agency — small businesses, local shops, freelancers, and individuals.",
      "Every project is handled directly, from the first email to the site going live, so you always know exactly who's building your website and where things stand.",
    ],
    points: [
      "Clear, simple communication — no jargon",
      "Designs built for mobile first, since that's where most visitors land",
      "Ongoing maintenance available so your site stays current",
    ],
  },

  work: {
    eyebrow: "Portfolio",
    title: "Recent work",
    lede: "A few of the digital experiences we've designed and built — with more projects on the way.",
    slots: [
      { num: "01", icon: "✦", label: "Beauty & Care", title: "Makeup Studio Website", text: "A stylish makeup studio website showcasing services, packages, opening hours, and appointment enquiries." },
      { num: "02", icon: "◈", label: "Fashion Commerce", title: "Clothing Brand Shop", text: "A modern fashion store concept with product highlights, collections, and a mobile-first shopping experience." },
      { num: "03", icon: "⌂", label: "Business Presence", title: "Local Business Website", text: "A clean business website designed to build trust, explain services, and bring in new enquiries." },
      { num: "04", icon: "＋", label: "Education Technology", title: "School Website & Education App", text: "An education platform concept connecting a school website with a companion app for students, parents, and learning updates." },
    ],
    testimonialText:
      "Have a project in mind? Let's turn the idea into a fast, polished website.",
    testimonialCta: "Start a project",
  },

  contact: {
    eyebrow: "Get in touch",
    title: "Tell us about your website — we'll reply directly",
    lede: "Send an email with your requirements and we'll reply directly.",
  },
} as const;
