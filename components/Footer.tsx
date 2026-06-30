"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Sharanya<span className="text-cyan-400">.</span>
          </h2>

          <p className="text-gray-400 mt-2">
            Building intelligent solutions with AI & Full Stack Development.
          </p>
        </div>

        <div className="flex gap-6 mt-6 md:mt-0">

          <a
            href="https://github.com/sharanya2203"
            target="_blank"
            className="text-3xl text-gray-400 hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sharanya-ponugoti-p22"
            target="_blank"
            className="text-3xl text-gray-400 hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>

      <div className="text-center text-gray-500 text-sm pb-6">
        © 2026 Sharanya Ponugoti. All Rights Reserved.
      </div>
    </footer>
  );
}