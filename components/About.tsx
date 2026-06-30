"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl text-center"
      >
        <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-semibold mb-4">
          ABOUT ME
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-10">
          Who I Am
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-10">
          Hi! I'm{" "}
          <span className="text-cyan-400 font-semibold">
            Ponugoti Sharanya
          </span>
          , a fourth-year Computer Science Engineering student with a
          <span className="text-white font-semibold"> CGPA of 9.22</span>.
        </p>

        <p className="mt-8 text-lg md:text-xl text-gray-400 leading-10">
          I enjoy building AI-powered applications, full-stack web applications,
          and solving real-world problems using modern technologies like Python,
          React, Next.js, Flask, Machine Learning, and TensorFlow.
        </p>

        <p className="mt-8 text-lg md:text-xl text-gray-400 leading-10">
          I'm always eager to learn new technologies, participate in internships,
          and create impactful software solutions that improve people's lives.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          <div className="rounded-2xl bg-white/5 border border-zinc-700 p-8 hover:border-cyan-400 transition-all">
            <h3 className="text-4xl font-bold text-cyan-400">4th</h3>
            <p className="mt-2 text-gray-400">Year B.Tech</p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-zinc-700 p-8 hover:border-cyan-400 transition-all">
            <h3 className="text-4xl font-bold text-cyan-400">9.22</h3>
            <p className="mt-2 text-gray-400">CGPA</p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-zinc-700 p-8 hover:border-cyan-400 transition-all">
            <h3 className="text-2xl font-bold text-cyan-400">SkillCraft</h3>
            <p className="mt-2 text-gray-400">Internship</p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-zinc-700 p-8 hover:border-cyan-400 transition-all">
            <h3 className="text-4xl font-bold text-cyan-400">AI</h3>
            <p className="mt-2 text-gray-400">ML Enthusiast</p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}