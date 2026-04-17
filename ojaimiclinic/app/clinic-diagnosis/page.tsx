"use client";

import { motion } from "framer-motion";
import {
  FaEye,
  FaStethoscope,
  FaMicroscope,
  FaCheckCircle,
  FaShieldAlt,
  FaUserMd,
  FaHospital,
  FaClock,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ClinicDiagnosis() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px]" />
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
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Clinic Diagnosis
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Comprehensive eye examinations using advanced diagnostic
                technology
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
                  Advanced{" "}
                  <span className="text-blue-400">Eye Diagnostics</span>
                </motion.h2>
                <motion.p
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Our clinic provides comprehensive eye examinations using
                  state-of-the-art diagnostic equipment to detect and monitor
                  various eye conditions, from common refractive errors to
                  complex ocular diseases.
                </motion.p>
                <motion.p
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Early detection is crucial for effective treatment. Our
                  advanced diagnostic tools allow us to identify potential
                  issues before they become serious problems.
                </motion.p>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/30">
                  <FaStethoscope className="text-6xl text-blue-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Comprehensive Care
                  </h3>
                  <p className="text-gray-300">
                    Full spectrum of diagnostic services for complete eye health
                    assessment
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Diagnostic Services Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-blue-500/5">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our <span className="text-blue-400">Diagnostic Services</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Comprehensive Eye Exam",
                  description:
                    "Complete vision assessment including refraction and eye health evaluation",
                  features: [
                    "Visual acuity testing",
                    "Refraction",
                    "Eye pressure measurement",
                  ],
                  icon: FaEye,
                },
                {
                  title: "Retinal Imaging",
                  description:
                    "High-resolution digital imaging of the retina and optic nerve",
                  features: [
                    "Fundus photography",
                    "OCT scanning",
                    "Fluorescein angiography",
                  ],
                  icon: FaMicroscope,
                },
                {
                  title: "Visual Field Testing",
                  description:
                    "Peripheral vision assessment for glaucoma and neurological conditions",
                  features: [
                    "Automated perimetry",
                    "Glaucoma screening",
                    "Neurological testing",
                  ],
                  icon: FaStethoscope,
                },
                {
                  title: "Corneal Topography",
                  description:
                    "Detailed mapping of corneal surface for contact lenses and surgery planning",
                  features: [
                    "Corneal mapping",
                    "Astigmatism analysis",
                    "Surgical planning",
                  ],
                  icon: FaEye,
                },
                {
                  title: "Anterior Segment Imaging",
                  description:
                    "Detailed examination of cornea, iris, and lens structures",
                  features: [
                    "Slit lamp photography",
                    "Anterior OCT",
                    "Pachymetry",
                  ],
                  icon: FaMicroscope,
                },
                {
                  title: "Dry Eye Assessment",
                  description:
                    "Comprehensive evaluation of tear film and ocular surface health",
                  features: [
                    "Tear break-up time",
                    "Schirmer test",
                    "Meibography",
                  ],
                  icon: FaStethoscope,
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-colors"
                >
                  <service.icon className="text-3xl text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <FaCheckCircle className="text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions We Detect Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Conditions We{" "}
              <span className="text-blue-400">Detect & Monitor</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Cataracts",
                  description: "Clouding of the natural lens",
                },
                {
                  title: "Glaucoma",
                  description: "Optic nerve damage from high pressure",
                },
                {
                  title: "Macular Degeneration",
                  description: "Age-related central vision loss",
                },
                {
                  title: "Diabetic Retinopathy",
                  description: "Diabetes-related retinal damage",
                },
                {
                  title: "Dry Eye Syndrome",
                  description: "Insufficient tear production",
                },
                {
                  title: "Corneal Diseases",
                  description: "Various corneal conditions",
                },
                {
                  title: "Refractive Errors",
                  description: "Nearsightedness, farsightedness, astigmatism",
                },
                {
                  title: "Ocular Tumors",
                  description: "Eye and orbital tumors",
                },
              ].map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/50 transition-colors text-center"
                >
                  <h3 className="text-lg font-bold mb-2 text-blue-400">
                    {condition.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {condition.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-blue-500/5">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our <span className="text-blue-400">Advanced Technology</span>
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "OCT (Optical Coherence Tomography)",
                  description:
                    "High-resolution cross-sectional imaging of retinal layers",
                  benefits: [
                    "Micron-level resolution",
                    "Non-invasive",
                    "Early disease detection",
                  ],
                },
                {
                  title: "Digital Fundus Camera",
                  description:
                    "Advanced retinal imaging for detailed documentation",
                  benefits: [
                    "Wide-field imaging",
                    "Color accuracy",
                    "Telemedicine capability",
                  ],
                },
                {
                  title: "Automated Perimeter",
                  description:
                    "Precise visual field mapping for glaucoma and neurological conditions",
                  benefits: [
                    "Standardized testing",
                    "Progression analysis",
                    "Early detection",
                  ],
                },
                {
                  title: "Corneal Topographer",
                  description:
                    "Detailed corneal surface mapping for surgical planning",
                  benefits: [
                    "3D mapping",
                    "Surgical guidance",
                    "Contact lens fitting",
                  ],
                },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <h3 className="text-xl font-bold mb-3 text-blue-400">
                    {tech.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <FaCheckCircle className="text-blue-400 mr-2" />
                        {benefit}
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
              Why Choose Our{" "}
              <span className="text-blue-400">Diagnostic Services?</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FaCheckCircle,
                  title: "Early Detection",
                  description: "Identify conditions before symptoms appear",
                },
                {
                  icon: FaClock,
                  title: "Quick Results",
                  description:
                    "Most diagnostic tests completed during your visit",
                },
                {
                  icon: FaShieldAlt,
                  title: "Non-Invasive",
                  description: "Painless procedures with minimal discomfort",
                },
                {
                  icon: FaUserMd,
                  title: "Expert Interpretation",
                  description:
                    "Experienced ophthalmologists analyze all results",
                },
                {
                  icon: FaHospital,
                  title: "State-of-the-Art Equipment",
                  description:
                    "Latest diagnostic technology for accurate results",
                },
                {
                  icon: FaEye,
                  title: "Comprehensive Reports",
                  description: "Detailed documentation for treatment planning",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-colors"
                >
                  <benefit.icon className="text-3xl text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
