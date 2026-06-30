"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-6xl font-bold tracking-widest"
      >
        <span className="text-white">Sharanya</span>
        <span className="text-cyan-400">.</span>
      </motion.h1>
    </div>
  );
}