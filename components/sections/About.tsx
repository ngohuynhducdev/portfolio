"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO, STATS } from "@/lib/constants";
import SectionWrapper from "@/src/components/SectionWrapper";

// ─── Framer Motion variants ──────────────────────────────────────────────────
const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function About() {
  return (
    <SectionWrapper id="about" className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-12"
        >
          About Me
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: avatar ── */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Green accent border */}
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-primary/40 to-primary/10 blur-sm" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-primary/20">
                <Image
                  src={PERSONAL_INFO.avatar}
                  alt={`${PERSONAL_INFO.name} — profile photo`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 320px"
                  priority={false}
                />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg shadow-black/30"
              >
                <p className="text-xs text-muted-foreground">Experience</p>
                <p className="text-lg font-bold text-primary">5+ Years</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* slide from right wrapper */}
            <motion.div
              variants={rightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-6"
            >
              {/* H2 */}
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold text-foreground"
              >
                Know More About Me
              </motion.h2>

              {/* Subheading */}
              <motion.h3
                variants={itemVariants}
                className="text-lg font-semibold text-primary"
              >
                I&apos;m a Passionate {PERSONAL_INFO.title}
              </motion.h3>

              {/* Bio paragraphs */}
              <div className="flex flex-col gap-4">
                {PERSONAL_INFO.aboutBio.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    variants={itemVariants}
                    className="text-muted-foreground leading-relaxed text-sm sm:text-base"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Stats cards */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-3 mt-2"
              >
                {STATS.map(({ value, suffix, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center sm:items-start gap-0.5 bg-secondary rounded-xl px-3 py-4 border border-border"
                  >
                    <span className="text-xl sm:text-2xl font-bold text-primary tabular-nums">
                      {value}
                      {suffix}
                    </span>
                    <span className="text-[11px] sm:text-xs text-muted-foreground text-center sm:text-left leading-tight">
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Download CV */}
              <motion.div variants={itemVariants}>
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:shadow-[0_0_30px_rgba(0,255,102,0.5)] transition-shadow"
                >
                  <a href={PERSONAL_INFO.cvUrl} download>
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
