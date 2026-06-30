"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Development Intern",
    company: "SkillCraft Technology",
    duration: "2025",
    points: [
      "Developed responsive web applications using HTML, CSS, JavaScript, and React.",
      "Worked on real-world web development tasks and improved UI/UX design skills.",
      "Used Git and GitHub for version control and project collaboration.",
      "Strengthened problem-solving and debugging skills while completing assigned tasks.",
    ],
  },
  {
    role: "AI & Machine Learning Developer",
    company: "Academic Project",
    duration: "2025 - Present",
    points: [
      "Built a Crop Disease Detection System using CNN, TensorFlow, and Flask.",
      "Implemented image classification to detect plant diseases from leaf images.",
      "Designed a user-friendly interface for disease prediction and treatment recommendations.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Personal Project",
    duration: "2026 - Present",
    points: [
      "Developed a FinTech Expense Tracker using Next.js, Node.js, Express.js, and PostgreSQL.",
      "Implemented authentication, expense tracking, and budget management features.",
      "Created a responsive dashboard with modern UI and secure backend APIs.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-24 max-w-6xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-16"
      >
        Experience
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-cyan-400 transition"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">
                  {exp.role}
                </h3>
                <p className="text-gray-300 text-lg">{exp.company}</p>
              </div>

              <span className="text-gray-400 mt-3 md:mt-0">
                {exp.duration}
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-gray-300">
              {exp.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-cyan-400 mr-3">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}