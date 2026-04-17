"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const EyeExamBoard = () => {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const rows = [
    { letters: "E", size: "text-6xl" },
    { letters: "F P", size: "text-5xl" },
    { letters: "T O Z", size: "text-4xl" },
    { letters: "L P E D", size: "text-3xl" },
    { letters: "P E C F D", size: "text-2xl" },
    { letters: "E D F C Z P", size: "text-xl" },
    { letters: "F E L O P Z D", size: "text-lg" },
    { letters: "D E F P O T E C", size: "text-base" },
  ];

  return (
    <div className="relative flex items-center justify-center bg-slate-50 p-6 font-serif">
      {/* 👨‍⚕️ BIG DOCTOR */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Head */}
        <motion.div
          className="w-20 h-20 rounded-full bg-[#f1c27d] relative shadow-xl flex items-center justify-center"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Hair */}
          <div className="absolute top-0 w-full h-10 bg-black rounded-t-full" />

          {/* Eyes */}
          <div className="flex gap-2 mt-3">
            <div className="w-2 h-2 bg-black rounded-full" />
            <div className="w-2 h-2 bg-black rounded-full" />
          </div>

          {/* Glasses */}
          <div className="absolute flex gap-1 top-8">
            <div className="w-6 h-4 border-2 border-black rounded-sm" />
            <div className="w-6 h-4 border-2 border-black rounded-sm" />
          </div>

          {/* Mouth */}
          <div className="absolute bottom-4 w-4 h-[2px] bg-black rounded-full" />
        </motion.div>

        {/* Body */}
        <div className="w-28 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center relative mt-[-10px]">
          {/* Stethoscope */}
          <div className="absolute w-8 h-8 border-2 border-gray-600 rounded-full top-2" />

          {/* Cross */}
          <div className="absolute top-6 text-red-600 text-lg font-bold">+</div>
        </div>

        {/* Pointer */}
        <motion.div
          className="absolute top-1/2 -right-12 w-12 h-[3px] bg-slate-800 origin-left"
          animate={{
            rotate: activeRow !== null ? [-5, 5, -5] : 0,
            y: activeRow !== null ? `${(activeRow - 3.5) * 10}px` : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-slate-800 rounded-full" />
        </motion.div>
      </motion.div>

      {/* 👁️ MINIMIZED BOARD */}
      <div className="relative bg-white border-4 border-slate-800 shadow-xl px-6 py-8 rounded-md w-[320px] flex flex-col items-center space-y-3 ml-32">
        {/* Lines */}
        <div className="absolute left-2 top-1/2 bottom-2 w-[2px] bg-green-500 opacity-40" />
        <div className="absolute right-2 top-1/2 bottom-2 w-[2px] bg-red-500 opacity-40" />

        <h2 className="text-slate-400 uppercase tracking-widest text-[10px] mb-2">
          Visual Test
        </h2>

        {rows.map((row, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveRow(index)}
            onMouseLeave={() => setActiveRow(null)}
            className={`cursor-pointer transition-all duration-300
              ${activeRow === index ? "scale-110 text-blue-600" : "text-black"}
              ${activeRow !== null && activeRow !== index ? "opacity-40" : ""}
            `}
          >
            <span className={`${row.size} font-bold tracking-[0.8rem]`}>
              {row.letters}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EyeExamBoard;
