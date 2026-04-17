"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Years Experience", value: "20+" },
  { label: "Successful Surgeries", value: "15k+" },
  { label: "Expert Specialists", value: "12" },
];

export default function AboutSection() {
  return (
    <section
      id="about services"
      className="relative py-24 bg-[#0a0f1a] overflow-hidden"
    >
      {/* Matching Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Grid */}
          
          <div className="relative h-[500px] md:h-[600px]">
            {/* Main Large Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-4/5 h-4/5 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image
                src="/clinicImage2.jpg"
                alt="Modern Clinic"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Staggered Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-20"
            >
              <Image
                src="/Clinic building.jpg"
                alt="Expert Surgeon"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Floating Detail Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute top-1/4 -right-4 w-1/3 h-1/4 rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-30 hidden md:block"
            >
              <Image
                src="/ClinicImage.webp"
                alt="Technology Detail"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm uppercase tracking-[0.3em] text-yellow-500 font-semibold mb-3">
                Precision in Every Detail
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Pioneering the Future of <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Ophthalmic Care
                </span>
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              With over two decades of excellence, our clinic combines
              cutting-edge robotic technology with personalized surgical
              expertise. We don't just treat eyes; we restore the way you
              experience the world.
            </motion.p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center backdrop-blur-sm"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-wider text-gray-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-6"
            >
              <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-yellow-400 transition-all duration-300">
                Discover Our Story
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
