# Portfolio Project

## Tech Stack

- Next.js 16 (App Router)
- TypeScript strict mode
- Tailwind CSS
- Framer Motion
- Lucide React

## Design Reference

- Style: Dark Minimalist with Green Accent
- Background: #0a0a0a
- Surface/Card: #111111
- Border: #1a1a1a / #333333
- Text primary: #ffffff
- Text secondary: #888888
- Accent color: #00ff88 (green)
- Font: Inter

## Data Source

All content/data is in /lib/constants.ts — always import from there, never hardcode.

## Folder Structure

/app → layout.tsx, page.tsx, globals.css
/components/sections → one file per section
/components/ui → reusable small components
/lib → constants.ts
/public/images → all images

## Code Rules

- Tailwind only, no inline styles
- Framer Motion for all animations
- whileInView + viewport={{ once: true }} for scroll animations
- Import data from /lib/constants.ts
- TypeScript strict, no "any"
- Mobile first

## Sections Order (match page.tsx)

Hero → About → Skills → Services → Projects → Testimonials → Blog → Contact → Footer
