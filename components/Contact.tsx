"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-16"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg"
      >
        <div className="space-y-8">

          <div className="flex items-center gap-5">
            <Mail className="text-cyan-400" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <a
                href="mailto:sharanyaponu6@gmail.com"
                className="text-white text-lg hover:text-cyan-400"
              >
                sharanyaponu6@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Phone className="text-cyan-400" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <a
                href="tel:+918639912581"
                className="text-white text-lg hover:text-cyan-400"
              >
                +91 8639912581
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <MapPin className="text-cyan-400" size={28} />
            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-white text-lg">
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FaGithub className="text-cyan-400 text-3xl" />
            <div>
              <p className="text-gray-400 text-sm">GitHub</p>
              <a
                href="https://github.com/sharanya2203"
                target="_blank"
                className="text-white text-lg hover:text-cyan-400"
              >
                github.com/sharanya2203
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5">
           <FaLinkedin className="text-cyan-400 text-3xl" />
            <div>
              <p className="text-gray-400 text-sm">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/sharanya-ponugoti-p22"
                target="_blank"
                className="text-white text-lg hover:text-cyan-400"
              >
                linkedin.com/in/sharanya-ponugoti-p22
              </a>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}