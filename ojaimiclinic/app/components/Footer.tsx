"use client";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0f1a] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Particles */}
        {[...Array(10)].map((_, i) => {
          const positions = [
            { left: 5, top: 20 },
            { left: 15, top: 40 },
            { left: 25, top: 15 },
            { left: 35, top: 35 },
            { left: 45, top: 25 },
            { left: 55, top: 45 },
            { left: 65, top: 30 },
            { left: 75, top: 50 },
            { left: 85, top: 20 },
            { left: 95, top: 40 },
          ];
          const pos = positions[i % positions.length];

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background:
                  i % 3 === 0 ? "#feca57" : i % 3 === 1 ? "#7c3aed" : "#3b82f6",
                boxShadow: `0 0 10px ${i % 3 === 0 ? "#feca57" : i % 3 === 1 ? "#7c3aed" : "#3b82f6"}`,
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          );
        })}

        {/* Gradient Overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, rgba(254, 202, 87, 0.05), transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 50%, rgba(124, 58, 237, 0.05), transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
              Ojaimi Clinic
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expert eye care with advanced surgical technology. We restore
              vision and improve quality of life through precision ophthalmic
              treatments.
            </p>
            <div className="flex space-x-4 pt-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#feca57" }}
                className="text-gray-400 transition-colors"
              >
                <FaFacebook className="text-xl" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#feca57" }}
                className="text-gray-400 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "#feca57" }}
                className="text-gray-400 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#cataract"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Cataract Surgery
                </a>
              </li>
              <li>
                <a
                  href="#refractive"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  LASIK & Refractive Surgery
                </a>
              </li>
              <li>
                <a
                  href="#diagnosis"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Clinical Diagnosis
                </a>
              </li>
              <li>
                <a
                  href="#consultation"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  General Eye Examination
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#appointment"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Book Appointment
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-yellow-400 flex-shrink-0" />
                <span className="text-gray-400">
                  Baabda, Mount Lebanon, Lebanon
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">+961 81 174 657</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-400 flex-shrink-0" />
                <span className="text-gray-400">masrifadel313@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaClock className="text-green-400 flex-shrink-0" />
                <span className="text-gray-400">Mon-Fri: 9AM-6PM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2026 Ojaimi Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#terms"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#privacy"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
