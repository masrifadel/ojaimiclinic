"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CataractSurgery() {
  const [step, setStep] = useState(0);

  // ⏱️ Automatic surgery timeline
  useEffect(() => {
    const timings = [2000, 2000, 1500, 1500, 2000]; // per step
    if (step < timings.length) {
      const timeout = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, timings[step]);
      return () => clearTimeout(timeout);
    }
  }, [step]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-900 text-white p-6">

      {/* Title */}
      <h2 className="text-lg mb-6 tracking-widest text-blue-400">
        Cataract Surgery (Auto Simulation)
      </h2>

      {/* Eye Scene */}
      <div className="relative flex items-center justify-center">

        {/* Surgical Light */}
        <motion.div
          className="absolute w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.25), transparent 70%)",
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Eye */}
        <div className="relative w-52 h-52 bg-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden">

          {/* Iris */}
          <div className="w-28 h-28 bg-blue-500 rounded-full flex items-center justify-center relative overflow-hidden">

            {/* Pupil */}
            <div className="w-12 h-12 bg-black rounded-full z-10" />

            {/* Cataract Lens */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "rgba(255,255,255,0.65)",
                backdropFilter: "blur(7px)",
              }}
              animate={{
                opacity:
                  step === 0 ? 1 :
                  step === 2 ? 0.6 :
                  step >= 3 ? 0 : 1,
              }}
              transition={{ duration: 1 }}
            />

            {/* Fragmentation (phaco effect) */}
            {step === 2 && (
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-white rounded-full"
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                      x: Math.random() * 80 - 40,
                      y: Math.random() * 80 - 40,
                      opacity: 0,
                    }}
                    transition={{ duration: 1 }}
                    style={{ top: "50%", left: "50%" }}
                  />
                ))}
              </div>
            )}

            {/* New Lens (IOL Implant) */}
            {step >= 4 && (
              <motion.div
                className="absolute inset-2 rounded-full border-2 border-blue-200"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            )}
          </div>
        </div>

        {/* Surgical Tool */}
        <motion.div
          className="absolute right-[-90px] w-24 h-2 bg-gray-300 rounded-full shadow-lg"
          animate={{
            x:
              step === 1 ? -40 :
              step === 2 ? -80 :
              step >= 3 ? -120 : 0,
            opacity: step >= 1 ? 1 : 0,
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-500 rounded-full" />
        </motion.div>

        {/* Final Glow */}
        {step === 5 && (
          <motion.div
            className="absolute w-60 h-60 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.4), transparent)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}
      </div>

      {/* Status */}
      <p className="mt-6 text-sm text-gray-400 italic text-center max-w-sm">
        {step === 0 && "Cloudy lens detected (cataract)."}
        {step === 1 && "Microsurgical incision and tool positioning."}
        {step === 2 && "Phacoemulsification: lens fragmentation."}
        {step === 3 && "Removal of cataract fragments."}
        {step === 4 && "Intraocular lens implantation."}
        {step === 5 && "Vision restored successfully."}
      </p>
    </div>
  );
}