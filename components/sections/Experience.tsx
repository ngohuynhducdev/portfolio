"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarDays, Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";
import { EASE } from "@/lib/animation";
import SectionWrapper from "@/src/components/SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      className="py-24 px-6 border-t border-border"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            Career
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-foreground"
          >
            Work Experience
          </motion.h2>
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-muted-foreground max-w-xl text-sm sm:text-base"
          >
            A timeline of the companies I&apos;ve worked with and what I&apos;ve
            built along the way.
          </motion.p>
        </div>

        {/* ── Timeline ── */}
        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div className="absolute left-1.75 md:left-1/2 top-2 bottom-2 w-px bg-[#1a1a1a] md:-translate-x-px" />

          {EXPERIENCE.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={item.company + item.role}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: EASE,
                }}
                className="relative pb-10 last:pb-0 pl-8 md:pl-0 md:grid md:grid-cols-2"
              >
                {/* Dot on the line */}
                <div className="absolute top-1.5 left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                  <span
                    className={[
                      "w-3.5 h-3.5 rounded-full border-2",
                      item.current
                        ? "bg-primary border-primary shadow-[0_0_10px_rgba(0,255,136,0.6)]"
                        : "bg-[#0a0a0a] border-[#333333]",
                    ].join(" ")}
                  />
                </div>

                {/* Desktop layout: alternate left / right */}
                <div
                  className={[
                    "hidden md:block",
                    isLeft ? "pr-10 text-right" : "",
                  ].join(" ")}
                >
                  {isLeft && <Card item={item} />}
                </div>
                <div
                  className={["hidden md:block", !isLeft ? "pl-10" : ""].join(
                    " ",
                  )}
                >
                  {!isLeft && <Card item={item} />}
                </div>

                {/* Mobile layout: always show */}
                <div className="md:hidden">
                  <Card item={item} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

// ─── Card sub-component ───────────────────────────────────────────────────────
function Card({ item }: { item: (typeof EXPERIENCE)[number] }) {
  return (
    <div className="group relative rounded-xl border border-[#1a1a1a] bg-card p-5 hover:border-primary/30 transition-colors">
      {/* Current badge */}
      {item.current && (
        <span className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Current
        </span>
      )}

      {/* Company icon row */}
      <div className="flex items-start gap-3 mb-3">
        <div className="mt-0.5 w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
          <Briefcase size={16} />
        </div>
        <div>
          <h3 className="font-semibold text-foreground text-sm leading-tight">
            {item.role}
          </h3>
          <p className="text-primary text-xs font-medium mt-0.5">
            {item.company}
          </p>
        </div>
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <CalendarDays size={11} />
          {item.period}
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin size={11} />
          {item.location}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {item.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {item.highlights.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-full text-[11px] font-medium border border-[#1a1a1a] text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
