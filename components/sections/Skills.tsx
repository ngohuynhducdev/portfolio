"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { EASE } from "@/lib/animation";
import SectionWrapper from "@/src/components/SectionWrapper";

// ─── Category icons (inline SVG) ─────────────────────────────────────────────
function FrontendIcon() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────────
type Skill = { readonly name: string };

// ─── Category card ────────────────────────────────────────────────────────────
function CategoryCard({
  label,
  icon,
  skills,
  delay,
}: {
  label: string;
  icon: React.ReactNode;
  skills: readonly Skill[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className="flex flex-col gap-5 rounded-xl border bg-card p-6"
      style={{ borderColor: "#1a1a1a" }}
    >
      {/* Card header */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="font-semibold text-foreground">{label}</h3>
      </div>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: delay + 0.05 * i }}
            className="px-3 py-1.5 rounded-lg border border-border bg-secondary text-sm text-foreground/80 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default"
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

const CATEGORIES = [
  { key: "frontend" as const, label: "Frontend", icon: <FrontendIcon /> },
  { key: "tools" as const, label: "Tools & Others", icon: <ToolsIcon /> },
];

// ─── Section ─────────────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            My Skills
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground"
          >
            Technical Expertise
          </motion.h2>

          {/* Green underline accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.5,
              delay: 0.25,
              ease: EASE,
            }}
            className="h-1 w-16 rounded-full bg-primary origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-xl text-sm sm:text-base"
          >
            A comprehensive overview of the technologies and tools I use to
            bring ideas to life.
          </motion.p>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES.map(({ key, label, icon }, i) => (
            <CategoryCard
              key={key}
              label={label}
              icon={icon}
              skills={SKILLS[key]}
              delay={i * 0.12}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
