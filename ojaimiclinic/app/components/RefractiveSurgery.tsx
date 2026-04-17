"use client";

import { motion } from "framer-motion";

export default function RefractiveSurgery() {
  return (
    <div className="relative flex items-center justify-center w-full h-full bg-slate-950/30 rounded-2xl overflow-hidden p-6 shadow-inner">
      {/* Background Radial Gradient for "Medical Theater" feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#0f172a_70%)] opacity-60" />

      {/* 1. The Human Eye Structure */}
      <motion.div
        className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // "Premium" ease-out
      >
        {/* Sclera (White of the eye) */}
        <div className="absolute inset-0 bg-white rounded-full shadow-xl border border-slate-200" />

        {/* Pupil & Iris Container */}
        <motion.div
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-cyan-950 overflow-hidden border-4 border-slate-900 shadow-inner flex items-center justify-center"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} // Subtle "alive" pulse
        >
          {/* Radial Iris Detail */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(#06b6d4 1px, transparent 1px)",
              backgroundSize: "4px 4px",
            }}
          />

          {/* The Pupil (Center Black) */}
          <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-950 rounded-full shadow-2xl z-10" />
        </motion.div>
      </motion.div>

      {/* 2. The Micro-Keratome/Stabilization Ring (Outer Overlay) */}
      <motion.div
        className="absolute w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] rounded-full border-4 border-slate-700/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {/* Decorative stabilization "pads" */}
        {[0, 90, 180, 270].map((angle) => (
          <div
            key={angle}
            className="absolute w-8 h-8 bg-slate-800 border border-slate-600 rounded-lg"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-11rem) ${angle === 0 ? "" : angle === 90 ? "md:translateY(-14rem)" : angle === 180 ? "md:translateY(-14rem)" : "md:translateY(-14rem)"}`,
              // Adjust position for MD breakpoint
              ...(typeof window !== "undefined" && window.innerWidth >= 768
                ? {
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-14rem)`,
                  }
                : {}),
            }}
          />
        ))}
      </motion.div>

      {/* 3. The Excimer Laser (Dynamic Overlay) */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        {/* Vertical Laser Beam Container */}
        <motion.div
          className="relative w-1 h-full origin-bottom"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0], // Pulse the entire sequence
            scaleY: [0, 1, 1, 0], // Beam grows, holds, shrinks
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 2, // Break between pulses
            ease: "easeInOut",
          }}
        >
          {/* The Laser Core */}
          <div className="absolute inset-x-0 top-0 bottom-1/2 bg-cyan-300 shadow-[0_0_20px_5px_rgba(34,211,238,0.7)] rounded-full" />

          {/* The Treatment Point (Impact Spot) */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-cyan-100 z-30"
            style={{ boxShadow: "0 0 30px 10px rgba(199,242,248,0.9)" }}
            animate={{
              scale: [0, 1, 0.8, 1.2, 0], // Impact pulse
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 2,
              times: [0, 0.1, 0.4, 0.6, 1], // Sync with beam scaling
            }}
          />
        </motion.div>
      </div>

      {/* 4. Scanning Grid (Optional Medical Overlay) */}
      <motion.div
        className="absolute inset-x-12 top-12 bottom-12 border-2 border-dashed border-cyan-800/30 rounded-full pointer-events-none"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
}
