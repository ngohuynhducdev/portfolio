# Project Context: Portfolio Web Developer

## Technology Stack

- **Framework:** Next.js 16.2+ (App Router)
- **Library:** React 19.2+
- **Styling:** Tailwind CSS v4 (Dark Mode by default)
- **UI Components:** shadcn/ui (Radix UI)
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Design System & Styling Rules (Tailwind v4)

- **Configuration:** This project uses Tailwind CSS v4. Do NOT create or look for `tailwind.config.ts`. All custom themes and CSS variables must be defined in the main CSS file (e.g., `app/globals.css`) using the `@theme` directive.
- **Background:** Primary background color `#0A0A0A`, Card/Surface color `#111111`.
- **Primary Accent:** Neon Green `#00FF66` (used for buttons, progress bars, glowing effects, and highlights).
- **Text:** White/Off-white for readability.

## Coding Standards & Preferences

- **React 19 & Next 16:** Utilize React 19 features (e.g., proper ref handling without `forwardRef` if applicable, new hooks) and ensure compatibility with Next.js 16 App Router paradigms.
- **Shadcn/UI:** Always check if a component can be built using shadcn/ui primitives first (e.g., Button, Card, Progress, Input). Note that some shadcn CLI setups might need manual adjustment to work flawlessly with Tailwind v4's CSS structure.
- **Framer Motion:** Use `motion` components for scroll reveals, hover effects, and entrance animations. Prefer subtle fade-ins and scale-ups. Always wrap shadcn/ui components inside `<motion.div>` rather than trying to animate the UI components directly.
- **TypeScript:** Strict typing. Use interfaces defined in `src/data/` (e.g., `skills.ts`).
- **Project Structure:**
  - `src/components/`: Functional components (Hero, About, etc.)
  - `src/data/`: Static data files (projects.ts, skills.ts)
  - `src/lib/`: Utility functions (cn helper)

## Specific Feature Rules

- **Skills Section:** Map data from `src/data/skills.ts`. Use shadcn `Progress` bars with custom neon green styling.
- **Projects Section:** Display exactly 2 recent projects. No filtering logic needed. Use shadcn `Card` and Framer Motion for hover states.
- **Responsive:** Mobile-first approach. All sections must be responsive.
