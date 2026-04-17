"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import EyeExamBoard from "./EyeExamBoard";
import CataractSurgery from "./CataractSurgery";
import RefractiveSurgery from "./RefractiveSurgery";

const slides = [
  {
    id: 1,
    title: "Cataract Surgery",
    subtitle: "Advanced microsurgical techniques for crystal-clear vision restoration",
    description: "State-of-the-art phacoemulsification with premium IOL technology",
    component: <CataractSurgery />,
  },
  {
    id: 2,
    title: "Refractive Surgery",
    subtitle: "Precision laser vision correction for perfect eyesight",
    description: "Custom LASIK and PRK procedures with blade-free technology",
    component: <RefractiveSurgery />,
  },
  {
    id: 3,
    title: "Clinical Diagnosis",
    subtitle: "Comprehensive eye examinations with cutting-edge technology",
    description: "Advanced diagnostic equipment for accurate vision assessment",
    component: <EyeExamBoard />,
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [particles, setParticles] = useState<{ left: number; top: number; duration: number; delay: number }[]>([]);

  // FIXED: Added 'as const'
  const transitionConfig = { duration: 1.2, ease: [0.32, 0.72, 0, 1] as const };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 5 + 5,
      delay: i * 0.5,
    }));
    setParticles(generated);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500, // Reduced from 1000 for smoother appearance
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1a]">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400"
            animate={{ y: [0, -100, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={transitionConfig}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  <span className="bg-gradient-to-r from-yellow-400 via-white to-purple-500 bg-clip-text text-transparent">
                    {slides[currentSlide].title}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100/70 font-light">
                  {slides[currentSlide].subtitle}
                </p>
                <p className="text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  {slides[currentSlide].description}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  <a href="#" className="flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full transition-all shadow-lg shadow-green-900/40">
                    <FaWhatsapp /> WhatsApp
                  </a>
                  <a href="#" className="flex items-center gap-2 px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-full transition-all shadow-lg shadow-blue-900/40">
                    <FaEnvelope /> Email
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side */}
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[550px] flex items-center justify-center">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transitionConfig}
                className="absolute inset-0 w-full h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-4 flex items-center justify-center shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]"
              >
                {/* Delayed fade-in for the component inside the slide */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="w-full h-full flex items-center justify-center overflow-hidden rounded-2xl"
                >
                  {slides[currentSlide].component}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots & Nav Navigation */}
        <div className="mt-16 lg:mt-0 lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center gap-8 z-40">
          <button onClick={prevSlide} className="p-3 text-white/50 hover:text-white transition-colors">
             ← Previous
          </button>

          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentSlide ? 1 : -1);
                  setCurrentSlide(i);
                }}
                className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? "w-10 bg-yellow-400" : "w-4 bg-white/20"}`}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="p-3 text-white/50 hover:text-white transition-colors">
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}