---
name: bajwa-blueprint-style
description: Design conventions for the Bajwa Tech Solution website — the "Blueprint" visual style, required sections, and non-negotiable contact-link rules. Use whenever building, restyling, or updating any page or section of the Bajwa Tech Solution website, even if the user doesn't mention "blueprint" or "style" directly.
---

# Bajwa Tech Solution — Blueprint Style Guide

This skill defines the visual language, required sections, and mandatory contact-link rules for the Bajwa Tech Solution website. Apply it to every change made to this site — new pages, section updates, restyling, or content edits.

## The Blueprint Concept

The site's design metaphor is a draftsman's blueprint: a website is planned before it is built. Every page should feel like an annotated technical drawing — precise, structured, with hairline grids, mono-spaced labels, and dimension annotations. This is not a generic tech-startup dark theme; it is a warm-paper-and-deep-navy blueprint aesthetic.

## Color System

Use these exact design tokens (CSS custom properties or Tailwind equivalents):

| Token | Value | Usage |
|---|---|---|
| `--ink` | `#0B1E33` | Deep blueprint navy — dark section backgrounds (hero, contact, footer) |
| `--blueprint` | `#1D4E89` | Mid blueprint blue — primary brand color, links, borders |
| `--paper` | `#F7F5F0` | Warm paper — light section backgrounds |
| `--paper-line` | `#DCD6C9` | Hairline borders on paper backgrounds |
| `--line-cyan` | `#6FC3DF` | Blueprint grid lines, dimension annotations, secondary accent |
| `--amber` | `#E8A33D` | Accent — CTAs, highlights, hover states |
| `--text-dark` | `#16232E` | Body text on light backgrounds |
| `--text-mute` | `#4F6070` | Secondary text on light backgrounds |
| `--text-onink` | `#DCE6EF` | Body text on dark backgrounds |

Never use purple, indigo, or violet hues. The palette is navy + warm paper + amber accent only.

## Typography

- **Display font**: `Space Grotesk` (500, 600, 700) — headings and brand name.
- **Body font**: `Inter` (400, 500, 600) — paragraphs, buttons, form labels.
- **Mono font**: `IBM Plex Mono` (400, 500) — eyebrows, labels, dimension annotations, stats, section numbers.

Load all three from Google Fonts with `preconnect` for performance. Use a maximum of 3 font weights per family.

## Layout Patterns

### Blueprint Grid Background
Dark sections (hero, contact) use a CSS grid background — two layered `linear-gradient` lines at `rgba(111,195,223,0.09)` on a `34px × 34px` grid over `--ink`. This is the signature visual element.

### Eyebrow Labels
Every section starts with a mono-spaced eyebrow label: uppercase, `0.14em` letter-spacing, `12.5px`, `--blueprint` color, preceded by a `22px` hairline. Example: `WHAT WE BUILD`.

### Dimension Annotations
Use mono-spaced `10.5px` labels in `--blueprint` color with a small paper-colored background pad to annotate visual elements, as if measuring a technical drawing. Example: `nav — 64px`, `hero section`, `services — 3 col`.

### Blueprint Wireframe Card
The hero features a stylized website wireframe on a paper card with dashed borders, placeholder bars, and dimension labels. This is the brand's signature element — preserve it in any hero redesign.

### Section Rhythm
Alternate dark (`--ink`) and light (`--paper` / `#fff`) sections. Use `88px` vertical padding on sections. Hairline borders (`1px solid --paper-line`) separate light sections.

## Required Sections

The site is a single-page layout with these sections in order:

1. **Hero** — business name, tagline, primary CTA (WhatsApp quote), blueprint wireframe card, stats row.
2. **Services** — 4-column grid (2 on tablet, 1 on mobile) of service cards with numbered mono labels (`01`, `02`, ...).
3. **Portfolio** — 3-column grid of case-study cards with blueprint-grid thumbnails. Placeholder cards are acceptable until real projects exist.
4. **Testimonials** — 3-column grid of dark testimonial cards with amber quote marks. Placeholder quotes are acceptable.
5. **About** — two-column layout with a mono "spec panel" (key-value rows) and body text.
6. **Contact** — two-column layout with contact methods (WhatsApp + Email) and a contact form.
7. **Footer** — brand name, nav links, contact links, copyright.

## Non-Negotiable Contact Rules

These rules must never be broken by any edit:

1. **WhatsApp number**: `+91 98778 91959` — link to `https://wa.me/919877891959`. Must appear in the hero CTA, the contact section, the footer, and as a floating button (bottom-right, `#25D366`, always visible on every viewport).
2. **Email address**: `krti.bajwa@gmail.com` — link to `mailto:krti.bajwa@gmail.com`. Must appear in the header (or nav), the contact section, and the footer.
3. Never remove, hide, or change these contact links during any edit. If restructuring a section that contains them, the links must be preserved in the new structure.
4. The floating WhatsApp button is fixed-position and must remain visible on all screen sizes.

## Button Styles

- **Primary**: `--amber` background, `--ink` text, pill-shaped (`999px` radius), `13px 22px` padding.
- **Outline light**: `rgba(255,255,255,0.35)` border, `--text-onink` text — for dark backgrounds.
- **Outline dark**: `--ink` border, `--ink` text — for light backgrounds.
- All buttons have a `translateY(-1px)` hover lift.

## Responsive Rules

- Breakpoints: `940px` (hero grid collapses), `980px` (services go 2-col), `900px` (testimonials and about go 1-col), `859px` (mobile nav with hamburger).
- Mobile nav: hamburger toggle, dropdown panel with full-width links, closes on link click.
- All grids collapse to single column on mobile.

## Content Editability

Keep all editable content — business name, tagline, services, portfolio entries, testimonials, contact details — in a single config file (`src/config/site.ts`) so the site owner can update text without touching component code. The design system (colors, fonts, spacing) lives in CSS custom properties or Tailwind config, separate from content.

## What "Done Right" Looks Like

A change follows this skill when:
- The blueprint grid, mono labels, and dimension annotations are present.
- Colors come only from the defined palette — no purple, no random gradients.
- All three fonts are used in their assigned roles.
- Both contact links and the floating WhatsApp button are present and functional.
- Content was edited in the config file, not hard-coded in components.
- Dark and light sections alternate with proper hairline separation.
