"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-8 right-6 z-50 w-10 h-10 rounded-full bg-[#00ff88] text-[#0a0a0a] flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.45)] hover:shadow-[0_0_30px_rgba(0,255,136,0.65)] hover:scale-110 transition-all cursor-pointer"
        >
          <ChevronUp size={18} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
