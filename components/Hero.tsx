"use client";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <p className="text-cyan-400 text-xl mb-4">
        Hello, I'm
      </p>

      <h1
        style={{ fontFamily: "GeneralSans" }}
        className="text-center leading-[0.92]"
      >
        <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-white">
  PONUGOTI
</span>

<span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
  SHARANYA
</span>
      </h1>

      <div className="mt-8">
        <TypeAnimation
  sequence={[
    "Computer Science Student",
    1500,
    "AI Enthusiast",
    1500,
    "Machine Learning Engineer",
    1500,
    "Full Stack Developer",
    1500,
  ]}
  wrapper="span"
  speed={40}
  repeat={Infinity}
  className="mt-6 block text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-medium min-h-[40px]"
/>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-semibold inline-block"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-cyan-500 hover:text-black transition duration-300"
        >
          Let's Connect
        </a>
      </div>
    </section>
  );
}