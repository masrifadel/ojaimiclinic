"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { FaEye, FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "HOME", href: "#hero" },
  { name: "SERVICES", href: "#services", hasDropdown: true },
  { name: "ABOUT", href: "#about" },
  { name: "CONTACT", href: "#contact" },
];

const servicesMenu = [
  { name: "Cataract Surgery", href: "/cataract-surgery" },
  { name: "Refractive Surgery", href: "/refractive-surgery" },
  { name: "Clinic Diagnosis", href: "/clinic-diagnosis" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { scrollY } = useScroll();

  // Smooth scroll function
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();

    // Check if we're on the homepage
    if (pathname === "/") {
      // On homepage, use smooth scroll
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Close mobile menu if open
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    } else {
      // On service pages, navigate to homepage with hash
      window.location.href = "/" + targetId;
      // Close mobile menu if open
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

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
                    transformOrigin: "center",
                    left: "50%",
                    top: "50%",
                    marginLeft: "-4px",
                    marginTop: "-4px",
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </motion.div>
          </Link>

          <Link href="/" className="hidden sm:block">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
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
                animate={
                  {
                    background: [
                      `linear-gradient(90deg, ${elegantGold}, ${cosmicPurple}, ${elegantGold})`,
                    ],
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundSize: "200% 100%",
                  } as any
                }
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                Eye Clinic
              </motion.p>
            </motion.div>
          </Link>
        </div>

        {/* Premium Mobile Menu Button */}
        <motion.button
          className="sm:hidden relative w-12 h-12 z-50 flex items-center justify-center"
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          whileHover={{
            scale: 1.15,
            rotate: [0, 5, -5, 0],
          }}
          whileTap={{ scale: 0.9 }}
          style={{
            background: `linear-gradient(135deg, ${elegantGold}22, ${cosmicPurple}22)`,
            backdropFilter: "blur(20px)",
            border: `1px solid ${elegantGold}44`,
            borderRadius: "12px",
            boxShadow: `0 4px 20px ${elegantGold}33, inset 0 0 20px ${elegantGold}11`,
          }}
        >
          {/* Animated Background Glow */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{
              background: `radial-gradient(circle, ${elegantGold}22, transparent)`,
              filter: "blur(8px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Morphing Hamburger/X Lines */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="relative z-10 "
          >
            {/* Top Line */}
            <motion.line
              x1="4"
              y1="6"
              x2="20"
              y2="6"
              stroke={elegantGold}
              strokeWidth="2"
              strokeLinecap="round"
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y1: mobileMenuOpen ? 12 : 6,
                y2: mobileMenuOpen ? 12 : 6,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                mass: 0.8,
              }}
            />

            {/* Middle Line */}
            <motion.line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
              stroke={elegantGold}
              strokeWidth="2"
              strokeLinecap="round"
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
                x1: mobileMenuOpen ? 12 : 4,
                x2: mobileMenuOpen ? 12 : 20,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                mass: 0.8,
              }}
            />

            {/* Bottom Line */}
            <motion.line
              x1="4"
              y1="18"
              x2="20"
              y2="18"
              stroke={elegantGold}
              strokeWidth="2"
              strokeLinecap="round"
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y1: mobileMenuOpen ? 12 : 18,
                y2: mobileMenuOpen ? 12 : 18,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                mass: 0.8,
              }}
            />
          </svg>

          {/* Ripple Effect */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{
              background: `radial-gradient(circle, ${elegantGold}22, transparent)`,
              filter: "blur(8px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating Particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: elegantGold,
                boxShadow: `0 0 4px ${elegantGold}`,
                left: `${20 + i * 8}px`,
                top: `${4 + i * 4}px`,
              }}
              animate={{
                x: [0, 20, 0],
                y: [0, -10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Hover Ring Effect */}
          <motion.div
            className="absolute inset-0 rounded-lg border-2"
            style={{
              borderColor: elegantGold,
              opacity: 0,
            }}
            whileHover={{
              opacity: 1,
              scale: 1.1,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

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
                className="relative"
              >
                {link.hasDropdown ? (
                  <div>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setServicesDropdownOpen(!servicesDropdownOpen);
                      }}
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
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
                    </a>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 min-w-[200px] rounded-xl overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${deepNavy}f5, ${navyGradient}ee)`,
                            backdropFilter: "blur(20px)",
                            border: `1px solid ${elegantGold}33`,
                            boxShadow: `0 10px 40px ${elegantGold}22`,
                          }}
                          onMouseEnter={() => setServicesDropdownOpen(true)}
                          onMouseLeave={() => setServicesDropdownOpen(false)}
                        >
                          {servicesMenu.map((service, serviceIndex) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-3 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/10 transition-colors"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
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
                  </a>
                )}
              </motion.div>
            );
          })}
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="sm:hidden absolute top-full left-0 right-0 z-40 overflow-hidden"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                background: `linear-gradient(135deg, ${deepNavy}f5, ${navyGradient}ee)`,
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                borderTop: `1px solid ${elegantGold}33`,
                boxShadow: `
          0 30px 80px ${elegantGold}22,
          inset 0 0 60px ${elegantGold}11
        `,
              }}
            >
              {/* Glow Overlay */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${elegantGold}22, transparent 70%)`,
                  filter: "blur(40px)",
                }}
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <nav className="relative flex flex-col p-6 space-y-4">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 40, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{
                        delay: index * 0.08,
                        type: "spring",
                        stiffness: 140,
                        damping: 16,
                      }}
                    >
                      {link.hasDropdown ? (
                        <div>
                          <a
                            href={link.href}
                            onClick={(e) => {
                              e.preventDefault();
                              // Navigate to homepage for services
                              if (pathname !== "/") {
                                window.location.href = "/#about";
                              } else {
                                handleSmoothScroll(e, "#about");
                              }
                              setMobileMenuOpen(false);
                            }}
                            className="relative block px-6 py-4 rounded-xl overflow-hidden"
                          >
                            {/* Glass Card */}
                            <motion.div
                              className="absolute inset-0 rounded-xl"
                              style={{
                                background: isActive
                                  ? `linear-gradient(135deg, ${elegantGold}33, ${cosmicPurple}33)`
                                  : `linear-gradient(135deg, ${elegantGold}11, ${cosmicPurple}11)`,
                                backdropFilter: "blur(25px)",
                                border: isActive
                                  ? `1px solid ${elegantGold}66`
                                  : `1px solid ${elegantGold}22`,
                              }}
                              whileHover={{
                                scale: 1.04,
                                background: `linear-gradient(135deg, ${elegantGold}22, ${cosmicPurple}22)`,
                                boxShadow: `0 0 30px ${elegantGold}44`,
                              }}
                              transition={{ duration: 0.25 }}
                            />

                            {/* Liquid Glow Sweep */}
                            <motion.div
                              className="absolute inset-0 rounded-xl"
                              style={{
                                background: `linear-gradient(120deg, transparent, ${elegantGold}33, transparent)`,
                                opacity: 0,
                              }}
                              whileHover={{
                                opacity: 1,
                                x: ["-100%", "100%"],
                              }}
                              transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                              }}
                            />

                            {/* Active Pulse */}
                            {isActive && (
                              <motion.div
                                className="absolute inset-0 rounded-xl"
                                style={{
                                  background: `radial-gradient(circle, ${elegantGold}33, transparent)`,
                                  filter: "blur(12px)",
                                }}
                                animate={{
                                  scale: [1, 1.15, 1],
                                  opacity: [0.5, 0.9, 0.5],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                }}
                              />
                            )}

                            {/* Text */}
                            <motion.span
                              className={`relative z-10 font-bold tracking-[0.15em] ${
                                isActive ? "text-white" : "text-blue-300"
                              }`}
                              whileHover={{
                                scale: 1.06,
                                textShadow: `0 0 20px ${elegantGold}`,
                              }}
                            >
                              {link.name}
                            </motion.span>

                            {/* Bottom Glow Line */}
                            <motion.div
                              className="absolute bottom-0 left-0 h-[2px] rounded-full"
                              style={{
                                background: `linear-gradient(90deg, transparent, ${elegantGold}, transparent)`,
                                width: isActive ? "100%" : "0%",
                              }}
                              whileHover={{ width: "100%" }}
                              transition={{ duration: 0.3 }}
                            />
                          </a>
                        </div>
                      ) : (
                        <a
                          href={link.href}
                          onClick={(e) => handleSmoothScroll(e, link.href)}
                          className="relative block px-6 py-4 rounded-xl overflow-hidden"
                        >
                          {/* Glass Card */}
                          <motion.div
                            className="absolute inset-0 rounded-xl"
                            style={{
                              background: isActive
                                ? `linear-gradient(135deg, ${elegantGold}33, ${cosmicPurple}33)`
                                : `linear-gradient(135deg, ${elegantGold}11, ${cosmicPurple}11)`,
                              backdropFilter: "blur(25px)",
                              border: isActive
                                ? `1px solid ${elegantGold}66`
                                : `1px solid ${elegantGold}22`,
                            }}
                            whileHover={{
                              scale: 1.04,
                              background: `linear-gradient(135deg, ${elegantGold}22, ${cosmicPurple}22)`,
                              boxShadow: `0 0 30px ${elegantGold}44`,
                            }}
                            transition={{ duration: 0.25 }}
                          />

                          {/* Liquid Glow Sweep */}
                          <motion.div
                            className="absolute inset-0 rounded-xl"
                            style={{
                              background: `linear-gradient(120deg, transparent, ${elegantGold}33, transparent)`,
                              opacity: 0,
                            }}
                            whileHover={{
                              opacity: 1,
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 0.8,
                              ease: "easeInOut",
                            }}
                          />

                          {/* Active Pulse */}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 rounded-xl"
                              style={{
                                background: `radial-gradient(circle, ${elegantGold}33, transparent)`,
                                filter: "blur(12px)",
                              }}
                              animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.5, 0.9, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            />
                          )}

                          {/* Text */}
                          <motion.span
                            className={`relative z-10 font-bold tracking-[0.15em] ${
                              isActive ? "text-white" : "text-blue-300"
                            }`}
                            whileHover={{
                              scale: 1.06,
                              textShadow: `0 0 20px ${elegantGold}`,
                            }}
                          >
                            {link.name}
                          </motion.span>

                          {/* Bottom Glow Line */}
                          <motion.div
                            className="absolute bottom-0 left-0 h-[2px] rounded-full"
                            style={{
                              background: `linear-gradient(90deg, transparent, ${elegantGold}, transparent)`,
                              width: isActive ? "100%" : "0%",
                            }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </a>
                      )}
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
