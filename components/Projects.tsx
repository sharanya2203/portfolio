"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Crop Disease Detection",
    description:
      "A CNN-based web application that detects plant diseases from leaf images and provides treatment recommendations.",
    tech: ["Python", "Flask", "TensorFlow", "CNN"],
    github: "",
    live: "https://crop-health-guardian--sharanyaponu6.replit.app/",
    image: "/images/crop.png",
  },
  {
    title: "Image Colorization",
    description:
      "Deep learning application that converts black-and-white images into realistic color images.",
    tech: ["Python", "OpenCV", "TensorFlow"],
    github: "https://github.com/sharanya2203/image-colorization",
    live: "#",
    image: "/images/colorization.png",
  },
  {
    title: "FinTech Expense Tracker",
    description:
      "Full-stack expense tracker with authentication, budget management, and analytics dashboard.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    github: "https://github.com/sharanya2203/fintech-tracker",
    live: "#",
    image: "/images/fintech.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-24 max-w-7xl mx-auto"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-52 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5 mt-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-3xl text-white hover:text-cyan-400 transition duration-300" />
                  </a>
                )}

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-7 h-7 text-white hover:text-cyan-400 transition duration-300" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}