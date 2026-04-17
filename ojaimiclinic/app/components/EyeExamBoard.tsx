"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const EyeExamBoard = () => {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const rows = [
    { letters: "E", size: "text-4xl md:text-6xl" },
    { letters: "F P", size: "text-3xl md:text-5xl" },
    { letters: "T O Z", size: "text-2xl md:text-4xl" },
    { letters: "L P E D", size: "text-xl md:text-3xl" },
    { letters: "P E C F D", size: "text-lg md:text-2xl" },
    { letters: "E D F C Z P", size: "text-base md:text-xl" },
    { letters: "F E L O P Z D", size: "text-sm md:text-lg" },
  ];

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center bg-slate-100 p-4 md:p-8 font-serif w-full h-full overflow-hidden">
      
      {/* 👨‍⚕️ DOCTOR (Scaled for Mobile) */}
      <motion.div
        className="relative md:absolute md:left-6 lg:left-10 z-10 mb-4 md:mb-0 scale-75 md:scale-100"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <motion.div
          className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#f1c27d] relative shadow-lg flex items-center justify-center mx-auto"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="absolute top-0 w-full h-7 md:h-10 bg-slate-800 rounded-t-full" />
          <div className="absolute flex gap-1 top-6 md:top-8">
            <div className="w-4 h-3 md:w-6 md:h-4 border-[1px] md:border-2 border-black rounded-sm" />
            <div className="w-4 h-3 md:w-6 md:h-4 border-[1px] md:border-2 border-black rounded-sm" />
          </div>
        </motion.div>

        <div className="w-20 h-16 md:w-28 md:h-24 bg-white rounded-xl md:rounded-2xl shadow-md flex items-center justify-center relative mt-[-10px] mx-auto border border-slate-200">
          <div className="text-red-600 text-base md:text-xl font-bold">+</div>
        </div>

        {/* Desktop Pointer */}
        <motion.div
          className="hidden md:block absolute top-1/2 -right-10 w-10 h-[2px] bg-slate-800 origin-left"
          animate={{
            rotate: activeRow !== null ? [-5, 5, -5] : 0,
            y: activeRow !== null ? `${(activeRow - 3) * 14}px` : 0,
          }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-800 rounded-full" />
        </motion.div>
      </motion.div>

      {/* 👁️ THE BOARD */}
      <div className="relative bg-white border-[3px] md:border-4 border-slate-800 shadow-2xl px-4 py-6 md:px-8 md:py-10 rounded-sm w-full max-w-[260px] md:w-[320px] flex flex-col items-center space-y-2 md:space-y-4 md:ml-44">
        {/* Side Accents */}
        <div className="absolute left-1 top-0 bottom-0 w-[1px] bg-green-500/30" />
        <div className="absolute right-1 top-0 bottom-0 w-[1px] bg-red-500/30" />

        <h2 className="text-slate-400 uppercase tracking-[0.2em] text-[8px] md:text-[10px] mb-2">Snellen Chart</h2>

        {rows.map((row, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setActiveRow(index)}
            onMouseLeave={() => setActiveRow(null)}
            onTouchStart={() => setActiveRow(index)}
            className={`transition-all duration-300 w-full text-center
              ${activeRow === index ? "scale-110 text-blue-600" : "text-black"}
              ${activeRow !== null && activeRow !== index ? "opacity-20 blur-[1px]" : ""}
            `}
          >
            <span className={`${row.size} font-bold tracking-[0.3em] md:tracking-[0.6em] block leading-none`}>
              {row.letters}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EyeExamBoard;