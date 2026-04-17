"use client";

import { motion } from "framer-motion";
import {
  FaEye,
  FaClock,
  FaCheckCircle,
  FaShieldAlt,
  FaUserMd,
  FaHospital,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { metadata } from "./metadata";

export default function CataractSurgery() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Cataract Surgery
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Advanced phacoemulsification technology for clear vision
                restoration
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
            >
              <div>
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  What is{" "}
                  <span className="text-yellow-400">Cataract Surgery?</span>
                </motion.h2>
                <motion.p
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Cataract surgery is a procedure to remove the lens of your eye
                  when it becomes cloudy, which can impair vision. The cloudy
                  lens is replaced with an artificial lens called an intraocular
                  lens (IOL) to restore clear vision.
                </motion.p>
                <motion.p
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Our clinic uses the latest phacoemulsification technique,
                  which uses ultrasound energy to break up the cloudy lens
                  before removing it through a tiny incision.
                </motion.p>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-yellow-500/20 to-blue-500/20 rounded-3xl p-8 backdrop-blur-sm border border-yellow-500/30">
                  <FaEye className="text-6xl text-yellow-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Advanced Technology
                  </h3>
                  <p className="text-gray-300">
                    State-of-the-art equipment ensures precision and safety for
                    optimal outcomes
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-yellow-500/5">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Benefits of{" "}
              <span className="text-yellow-400">Cataract Surgery</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FaCheckCircle,
                  title: "Improved Vision",
                  description:
                    "Restore clear, sharp vision and reduce dependency on glasses",
                },
                {
                  icon: FaClock,
                  title: "Quick Recovery",
                  description:
                    "Most patients return to normal activities within a few days",
                },
                {
                  icon: FaShieldAlt,
                  title: "High Success Rate",
                  description:
                    "Over 95% success rate with minimal complications",
                },
                {
                  icon: FaUserMd,
                  title: "Experienced Surgeons",
                  description:
                    "Board-certified ophthalmologists with extensive experience",
                },
                {
                  icon: FaHospital,
                  title: "Modern Facility",
                  description:
                    "State-of-the-art surgical suite with advanced equipment",
                },
                {
                  icon: FaEye,
                  title: "Customized IOLs",
                  description:
                    "Premium lenses to correct astigmatism and presbyopia",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-400/50 transition-colors"
                >
                  <benefit.icon className="text-3xl text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Procedure Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              The <span className="text-yellow-400">Procedure</span>
            </motion.h2>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Preparation",
                  description:
                    "Eye drops are applied to dilate the pupil and numb the eye",
                },
                {
                  step: "2",
                  title: "Incision",
                  description:
                    "A tiny incision (2.2-2.5mm) is made in the cornea",
                },
                {
                  step: "3",
                  title: "Phacoemulsification",
                  description:
                    "Ultrasound energy breaks up the cloudy lens for removal",
                },
                {
                  step: "4",
                  title: "IOL Implantation",
                  description:
                    "The artificial lens is folded and inserted through the incision",
                },
                {
                  step: "5",
                  title: "Completion",
                  description: "The incision seals naturally without stitches",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-yellow-500/5">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What to <span className="text-yellow-400">Expect</span>
            </motion.h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  phase: "Before Surgery",
                  timeframe: "1-2 weeks prior",
                  items: [
                    "Comprehensive eye examination",
                    "Measurements for IOL calculation",
                    "Discussion of lens options",
                    "Medical history review",
                    "Pre-operative instructions",
                  ],
                },
                {
                  phase: "Day of Surgery",
                  timeframe: "2-3 hours total",
                  items: [
                    "Arrival 1 hour before surgery",
                    "Eye drops and preparation",
                    "15-20 minute procedure",
                    "Brief recovery observation",
                    "Post-operative instructions",
                  ],
                },
                {
                  phase: "After Surgery",
                  timeframe: "First few weeks",
                  items: [
                    "Vision improvement within 24-48 hours",
                    "Eye drops for 2-4 weeks",
                    "Follow-up appointments: Day 1, Week 1, Month 1",
                    "Avoid strenuous activities for 1 week",
                    "Full recovery in 4-6 weeks",
                  ],
                },
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-400/50 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">
                    {phase.phase}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {phase.timeframe}
                  </p>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-gray-300"
                      >
                        <FaCheckCircle className="text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-yellow-500/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30"
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                Important Notes
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-white">Do's:</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>Follow all pre-operative instructions</li>
                    <li>Arrange for someone to drive you home</li>
                    <li>Use prescribed eye drops as directed</li>
                    <li>Attend all follow-up appointments</li>
                    <li>Rest and avoid eye strain</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">Don'ts:</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>Drive for 24-48 hours after surgery</li>
                    <li>Rub or press on your eye</li>
                    <li>Swim or use hot tubs for 2 weeks</li>
                    <li>Engage in strenuous exercise for 1 week</li>
                    <li>Wear eye makeup for 1 week</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
