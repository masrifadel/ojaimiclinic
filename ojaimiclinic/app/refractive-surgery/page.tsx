"use client";

import { motion } from "framer-motion";
import {
  FaEye,
  FaBolt,
  FaCheckCircle,
  FaShieldAlt,
  FaUserMd,
  FaHospital,
  FaClock,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RefractiveSurgery() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
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
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Refractive Surgery
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Advanced LASIK and refractive procedures for glasses-free vision
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
                  <span className="text-purple-400">Refractive Surgery?</span>
                </motion.h2>
                <motion.p
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Refractive surgery encompasses various procedures designed to
                  correct vision problems like nearsightedness, farsightedness,
                  and astigmatism, reducing or eliminating the need for glasses
                  or contact lenses.
                </motion.p>
                <motion.p
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Our clinic offers the latest LASIK, PRK, and other advanced
                  refractive procedures using state-of-the-art laser technology
                  for precise and safe vision correction.
                </motion.p>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/30">
                  <FaBolt className="text-6xl text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Precision Laser Technology
                  </h3>
                  <p className="text-gray-300">
                    Advanced excimer laser ensures accurate corneal reshaping
                    for optimal visual outcomes
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Procedures Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-500/5">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our <span className="text-purple-400">Refractive Procedures</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "LASIK",
                  description:
                    "Laser-assisted in situ keratomileusis for most refractive errors",
                  features: [
                    "Quick recovery",
                    "Minimal discomfort",
                    "High success rate",
                  ],
                  icon: FaEye,
                },
                {
                  title: "PRK",
                  description:
                    "Photorefractive keratectomy for patients with thin corneas",
                  features: [
                    "Suitable for thin corneas",
                    "No flap creation",
                    "Excellent safety",
                  ],
                  icon: FaBolt,
                },
                {
                  title: "ICL",
                  description:
                    "Implantable collamer lens for high refractive errors",
                  features: [
                    "Reversible procedure",
                    "No tissue removal",
                    "UV protection",
                  ],
                  icon: FaShieldAlt,
                },
              ].map((procedure, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors"
                >
                  <procedure.icon className="text-3xl text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{procedure.title}</h3>
                  <p className="text-gray-300 mb-4">{procedure.description}</p>
                  <ul className="space-y-2">
                    {procedure.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <FaCheckCircle className="text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Benefits of{" "}
              <span className="text-purple-400">Refractive Surgery</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FaCheckCircle,
                  title: "Visual Freedom",
                  description:
                    "Wake up seeing clearly without glasses or contacts",
                },
                {
                  icon: FaClock,
                  title: "Fast Results",
                  description:
                    "Most patients achieve 20/20 vision within 24 hours",
                },
                {
                  icon: FaShieldAlt,
                  title: "Proven Safety",
                  description:
                    "Over 40 million successful procedures worldwide",
                },
                {
                  icon: FaUserMd,
                  title: "Expert Surgeons",
                  description: "Board-certified refractive surgery specialists",
                },
                {
                  icon: FaHospital,
                  title: "Advanced Technology",
                  description:
                    "Latest wavefront-guided and topography-guided lasers",
                },
                {
                  icon: FaEye,
                  title: "Custom Treatment",
                  description:
                    "Personalized procedures based on your unique eye anatomy",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors"
                >
                  <benefit.icon className="text-3xl text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Candidacy Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-500/5">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Are You a <span className="text-purple-400">Good Candidate?</span>
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-green-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30"
              >
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  Ideal Candidates
                </h3>
                <ul className="space-y-3">
                  {[
                    "Age 18+ with stable prescription",
                    "Healthy eyes with no diseases",
                    "Realistic expectations",
                    "Sufficient corneal thickness",
                    "Moderate to severe refractive error",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-red-500/10 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30"
              >
                <h3 className="text-2xl font-bold mb-4 text-red-400">
                  Considerations
                </h3>
                <ul className="space-y-3">
                  {[
                    "Pregnant or nursing mothers",
                    "Autoimmune diseases",
                    "Severe dry eye syndrome",
                    "Unstable prescription changes",
                    "Certain medications",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <FaShieldAlt className="text-red-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-500/5">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What to <span className="text-purple-400">Expect</span>
            </motion.h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  phase: "Before Surgery",
                  timeframe: "1-2 weeks prior",
                  items: [
                    "Comprehensive eye examination",
                    "Corneal mapping and measurements",
                    "Discussion of procedure options",
                    "Stop wearing contact lenses (1-2 weeks)",
                    "Pre-operative instructions",
                  ],
                },
                {
                  phase: "Day of Surgery",
                  timeframe: "2-3 hours total",
                  items: [
                    "Arrival 30 minutes before procedure",
                    "Numbing drops applied",
                    "10-15 minute laser procedure",
                    "Immediate vision improvement",
                    "Post-operative care instructions",
                  ],
                },
                {
                  phase: "After Surgery",
                  timeframe: "First few weeks",
                  items: [
                    "Vision stabilizes within 1-2 weeks",
                    "Lubricating eye drops for 1-3 months",
                    "Follow-up appointments: Day 1, Week 1, Month 1",
                    "Avoid swimming for 2 weeks",
                    "Return to most activities in 1-2 days",
                  ],
                },
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2 text-purple-400">
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
                        <FaCheckCircle className="text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
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
              className="bg-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30"
            >
              <h3 className="text-xl font-bold mb-4 text-purple-400">
                Important Notes
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-white">Do's:</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>Follow all pre-operative instructions</li>
                    <li>Arrange for transportation home</li>
                    <li>Use lubricating drops as prescribed</li>
                    <li>Wear protective eyewear outdoors</li>
                    <li>Attend all scheduled follow-ups</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">Don'ts:</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>Drive for 24 hours after surgery</li>
                    <li>Rub your eyes for 1 week</li>
                    <li>Swim or use hot tubs for 2 weeks</li>
                    <li>Wear eye makeup for 1 week</li>
                    <li>Participate in contact sports for 1 month</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Recovery Timeline
              </h3>
              <div className="space-y-4">
                {[
                  {
                    time: "Day 1",
                    description: "Most patients achieve 20/40 or better vision",
                  },
                  {
                    time: "Week 1",
                    description:
                      "Vision continues to improve, most daily activities resume",
                  },
                  {
                    time: "Month 1",
                    description: "Vision typically stabilized to final outcome",
                  },
                  {
                    time: "Month 3",
                    description:
                      "Complete healing and final prescription determined",
                  },
                ].map((milestone, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <span className="text-blue-400 font-bold text-sm">
                        {milestone.time}
                      </span>
                    </div>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
