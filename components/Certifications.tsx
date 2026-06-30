"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Python Programming in Hindi",
    issuer: "Great Learning Academy",
    year: "May 2024",
  },
  {
    title: "C for Beginners",
    issuer: "Great Learning Academy",
    year: "Dec 2023",
  },
  {
    title: "Introduction to SQL",
    issuer: "Simplilearn SkillUp",
    year: "Apr 2025",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    year: "Apr 2025",
  },
  {
    title: "CLA: Programming Essentials in C",
    issuer: "Cisco Networking Academy",
    year: "Nov 2024",
  },
  {
    title: "Software Development Internship",
    issuer: "SkillCraft Technology",
    year: "Oct – Nov 2025",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-16"
      >
        Certifications
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg hover:border-cyan-400 transition-all duration-300"
          >
            <Award className="text-cyan-400 mb-5" size={36} />

            <h3 className="text-xl font-semibold text-white">
              {cert.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {cert.issuer}
            </p>

            <p className="text-cyan-400 font-medium mt-2">
              {cert.year}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}