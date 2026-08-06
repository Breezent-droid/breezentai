# AGENTS.md

This document describes the architecture of the Breezent AI & ICT Training website for AI agents and developers working in this codebase.

## Project Overview

A single-page marketing site for Breezent AI & ICT Training, an EdTech brand offering AI, ICT, web design, graphic design, WhatsApp Business, and social media management training in Abuja, Nigeria.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19) |
| Routing | TanStack Router (file-based) |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | lucide-react |
| Forms | Netlify Forms |
| Deployment | Netlify |

## Directory Structure

```
public/
  __forms.html        # Static skeleton so Netlify detects the contact form at build time
src/
  routes/
    __root.tsx         # Root document shell, global <head> (SEO meta, fonts)
    index.tsx           # Assembles all page sections into the one-page layout
  components/
    Navbar.tsx
    Footer.tsx
    Reveal.tsx          # Scroll-triggered fade/scale/slide wrapper (Framer Motion)
    Counter.tsx         # Animated number counter for the stats section
    WhatsAppFloatButton.tsx
    sections/
      Hero.tsx
      Stats.tsx
      About.tsx
      WhoWeTeach.tsx
      Services.tsx
      WhyChooseUs.tsx
      Process.tsx
      Testimonials.tsx
      CTA.tsx
      Contact.tsx
  styles.css            # Tailwind entry, font-family theme tokens, smooth scroll
```

## Conventions

- Every visual section of the page lives in its own file under `src/components/sections/`, composed in order inside `src/routes/index.tsx`.
- Brand color values (`#0B1220` navy, `#F5B642` gold, `#F5F7FA` light gray, `#1F2937` text, `#16A34A` success) are used directly as Tailwind arbitrary values rather than being abstracted into a theme, since this is a single, static brand palette.
- Scroll-in animations use the shared `<Reveal>` wrapper instead of duplicating Framer Motion boilerplate in each section.
- No photographic imagery is used — visual interest comes from gradients, glassmorphism panels, and floating icon badges, since no licensed brand photography was supplied.

## Forms

The contact form uses Netlify Forms. Because TanStack Start renders forms client-side, Netlify's build-time HTML scanner cannot see the real form — `public/__forms.html` is a hidden static duplicate that exists only so Netlify registers the `contact` form and its fields at build time. The live form in `src/components/sections/Contact.tsx` submits via `fetch` to `/__forms.html` with `application/x-www-form-urlencoded` encoding. Submissions appear in the Netlify dashboard under Forms.

## WhatsApp Integration

The floating WhatsApp button and all "WhatsApp Us" CTAs link to `https://wa.me/2347067565878` with a pre-filled message. The number is exported as `WHATSAPP_NUMBER` from `WhatsAppFloatButton.tsx` and reused across sections.
