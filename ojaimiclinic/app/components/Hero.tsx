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
    subtitle:
      "Advanced microsurgical techniques for crystal-clear vision restoration",
    description:
      "State-of-the-art phacoemulsification with premium IOL technology",
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
  const [particles, setParticles] = useState<
    { left: number; top: number; duration: number; delay: number }[]
  >([]);

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
      x: direction > 0 ? 100 : -100,
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
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1a] py-12 lg:py-0"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400"
            animate={{ y: [0, -100, 0], opacity: [0, 0.5, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Top/Right Content (Visuals) */}
          <div className="order-1 lg:order-2 w-full relative min-h-[480px] md:min-h-[550px] flex items-center justify-center">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transitionConfig}
                className="absolute inset-0 w-full h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-4 flex items-center justify-center shadow-2xl"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="w-full h-full flex items-center justify-center overflow-hidden rounded-3xl"
                >
                  {slides[currentSlide].component}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom/Left Content (Text) */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={transitionConfig}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
                  <span className="bg-gradient-to-r from-yellow-400 via-white to-purple-500 bg-clip-text text-transparent">
                    {slides[currentSlide].title}
                  </span>
                </h1>
                <p className="text-lg md:text-2xl text-blue-100/70 font-light max-w-2xl mx-auto lg:mx-0">
                  {slides[currentSlide].subtitle}
                </p>
                <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  {slides[currentSlide].description}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  <a
                    href="https://wa.me/96181174657"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-green-600 hover:bg-green-500 text-white rounded-full transition-all"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-full transition-all"
                  >
                    <FaEnvelope /> Email
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            className="text-white/40 hover:text-white transition-colors"
          >
            Prev
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all ${i === currentSlide ? "w-8 bg-yellow-400" : "w-3 bg-white/20"}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="text-white/40 hover:text-white transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
