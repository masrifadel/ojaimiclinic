"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { FaEye, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Smooth scroll-based animations
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 10]);

  // Color constants
  const deepNavy = "#0d1117";
  const navyGradient = "#1a222f";
  const elegantGold = "#feca57";
  const cosmicPurple = "#7c3aed";
  const electricBlue = "#3b82f6";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[
          { left: 10, top: 20, duration: 15, delay: 0, moveX: 30, moveY: 20 },
          { left: 80, top: 10, duration: 20, delay: 1, moveX: -40, moveY: 30 },
          { left: 50, top: 70, duration: 18, delay: 2, moveX: 20, moveY: -30 },
          { left: 20, top: 50, duration: 22, delay: 3, moveX: 35, moveY: -20 },
          { left: 70, top: 80, duration: 16, delay: 4, moveX: -25, moveY: -25 },
          { left: 30, top: 30, duration: 19, delay: 5, moveX: -30, moveY: 25 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: `radial-gradient(circle, ${elegantGold}88, transparent)`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              x: [0, particle.moveX, 0],
              y: [0, particle.moveY, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <motion.header
        className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-12 py-5 text-blue-100"
        style={{
          opacity: headerOpacity,
          backdropFilter: `blur(${headerBlur.get()}px)`,
          background: deepNavy,
          borderBottom: `1px solid ${elegantGold}22`,
          boxShadow: scrolled
            ? `0 10px 40px -10px ${elegantGold}33, 0 0 20px ${cosmicPurple}22`
            : `0 5px 20px -5px ${elegantGold}22`,
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${elegantGold}22, transparent 50%)`,
          }}
        />

        {/* Branding Section */}
        <div className="flex items-center gap-4 relative z-10">
          <Link href="/" className="cursor-pointer">
            <motion.div
              className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${cosmicPurple}, ${elegantGold}, ${electricBlue})`,
                boxShadow: `0 0 30px ${elegantGold}66, 0 0 60px ${cosmicPurple}44`,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Pulsing Core */}
              <motion.div
                className="absolute inset-2 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${deepNavy}, ${navyGradient})`,
                }}
              />

              {/* Animated Eye */}
              <motion.div
                className="relative z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [-5, 5, -5],
                  filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaEye className="text-2xl sm:text-3xl" />
              </motion.div>

              {/* Orbiting Particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: elegantGold,
                    boxShadow: `0 0 6px ${elegantGold}`,
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    transformOrigin: "center",
                    left: "50%",
                    top: "50%",
                    marginLeft: "-4px",
                    marginTop: "-4px",
                  }}
                />
              ))}
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden sm:block"
          >
            <motion.h1
              className="text-xl sm:text-2xl font-black tracking-[0.2em] text-blue-100 cursor-pointer inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              style={{ display: "inline-block" }}
            >
              KARL OJAIMI
            </motion.h1>
            <motion.p
              className="text-xs tracking-[0.3em] font-bold uppercase italic"
              style={{ color: elegantGold }}
              animate={{
                background: [
                  `linear-gradient(90deg, ${elegantGold}, ${cosmicPurple}, ${elegantGold})`,
                ],
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% 100%",
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              Eye Clinic
            </motion.p>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-blue-100 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>

        {/* Navigation Section */}
        <nav className="hidden sm:flex items-center gap-2 relative z-10">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="relative px-4 sm:px-6 py-3 text-xs font-bold tracking-[0.15em] block"
                >
                  {/* Glassmorphism Background */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${elegantGold}22, ${cosmicPurple}22)`
                        : "transparent",
                      border: isActive
                        ? `1px solid ${elegantGold}66`
                        : `1px solid transparent`,
                      backdropFilter: "blur(10px)",
                    }}
                    whileHover={{
                      background: `linear-gradient(135deg, ${elegantGold}11, ${cosmicPurple}11)`,
                      border: `1px solid ${elegantGold}44`,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Active State Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${elegantGold}33, ${cosmicPurple}33)`,
                        border: `1px solid ${elegantGold}`,
                        boxShadow: `0 0 20px ${elegantGold}66, inset 0 0 20px ${elegantGold}11`,
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        duration: 0.6,
                      }}
                    />
                  )}

                  {/* Text */}
                  <motion.span
                    className={`relative z-10 block ${isActive ? "text-blue-100" : "text-blue-300"}`}
                    whileHover={{ color: "#dbeafe", scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.span>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0"
                    style={{
                      background: `radial-gradient(circle, ${elegantGold}44, transparent)`,
                      filter: "blur(8px)",
                    }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Mobile Menu */}
        <motion.div
          className={`sm:hidden absolute top-full left-0 right-0 ${deepNavy} border-t border-${elegantGold}22`}
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="relative px-4 py-3 text-sm font-bold tracking-[0.15em] block text-blue-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.span
                      className={`relative z-10 block ${isActive ? "text-blue-100" : "text-blue-300"}`}
                      whileHover={{ color: "#dbeafe", scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.span>
                    {isActive && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1"
                        style={{ background: elegantGold }}
                        layoutId="mobile-active-pill"
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </motion.div>
      </motion.header>
    </>
  );
}
