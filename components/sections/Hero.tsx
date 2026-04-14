"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO, STATS, TECH_STACK } from "@/lib/constants";
import { EASE } from "@/lib/animation";

// ─── Inline SVG social icons (lucide-react removed brand icons) ──────────────
function GithubIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ─── Animated stat counter ───────────────────────────────────────────────────
function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setDisplay(value);
              clearInterval(timer);
            } else {
              setDisplay(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

// ─── Framer Motion variants ──────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 py-24"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Left content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Available badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Available for work
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-foreground"
            >
              Hi, I&apos;m{" "}
              <span className="text-primary">{PERSONAL_INFO.name}</span>
            </motion.h1>

            {/* H2 subtitle */}
            <motion.h2
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground font-medium"
            >
              {PERSONAL_INFO.title}
            </motion.h2>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground leading-relaxed max-w-lg"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <Button
                onClick={() => scrollTo("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 shadow-[0_0_20px_rgba(0,255,102,0.35)] hover:shadow-[0_0_30px_rgba(0,255,102,0.55)] transition-shadow"
              >
                Hire Me
              </Button>
              <Button
                onClick={() => scrollTo("projects")}
                variant="outline"
                className="border-border text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 font-semibold px-6 transition-colors"
              >
                View Projects
              </Button>
            </motion.div>

            {/* Social icons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              {[
                {
                  icon: <GithubIcon />,
                  label: "GitHub",
                  href: PERSONAL_INFO.socials.github,
                },
                {
                  icon: <LinkedinIcon />,
                  label: "LinkedIn",
                  href: PERSONAL_INFO.socials.linkedin,
                },
                {
                  icon: <TwitterIcon />,
                  label: "Twitter",
                  href: PERSONAL_INFO.socials.twitter,
                },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </motion.div>

            {/* Tech stack ticker */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map(({ label, emoji }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary border border-border text-xs text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors"
                  >
                    <span aria-hidden="true">{emoji}</span>
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right mockup card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/20 via-transparent to-primary/5 blur-2xl scale-110" />
              {/* Card */}
              <div className="relative rounded-2xl border border-primary/20 bg-card overflow-hidden h-full flex flex-col">
                {/* Top bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">
                    portfolio.tsx
                  </span>
                </div>
                {/* Fake code content */}
                <div className="flex-1 p-6 font-mono text-xs leading-relaxed overflow-hidden">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span>{" "}
                    <span className="text-foreground">=</span>{" "}
                    <span className="text-yellow-400">{`{`}</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-primary">name</span>
                    <span className="text-foreground">: </span>
                    <span className="text-green-400">&apos;John Doe&apos;</span>
                    <span className="text-muted-foreground">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-primary">role</span>
                    <span className="text-foreground">: </span>
                    <span className="text-green-400">
                      &apos;Full Stack Dev&apos;
                    </span>
                    <span className="text-muted-foreground">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-primary">skills</span>
                    <span className="text-foreground">: </span>
                    <span className="text-blue-400">[</span>
                  </p>
                  {["React", "Next.js", "Node.js", "TypeScript"].map((s) => (
                    <p key={s} className="pl-8">
                      <span className="text-green-400">&apos;{s}&apos;</span>
                      <span className="text-muted-foreground">,</span>
                    </p>
                  ))}
                  <p className="pl-4">
                    <span className="text-blue-400">]</span>
                    <span className="text-muted-foreground">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-primary">available</span>
                    <span className="text-foreground">: </span>
                    <span className="text-primary">true</span>
                  </p>
                  <p>
                    <span className="text-yellow-400">{`}`}</span>
                  </p>
                  {/* Blinking cursor */}
                  <p className="mt-2 flex items-center gap-1">
                    <span className="text-muted-foreground">$</span>
                    <span className="text-primary animate-pulse">▋</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          className="mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg"
        >
          {STATS.map(({ value, suffix, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-primary tabular-nums">
                <StatCounter value={value} suffix={suffix} />
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
