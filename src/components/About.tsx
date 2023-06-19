import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        // viewport={{ once: true }}
        src="/myPic.jpeg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Hello, and welcome to my portfolio! I am a passionate software
          engineer with 2 years of experience in the field. My journey as a
          developer has been driven by my curiosity and passion to explore new
          programming languages and technologies, constantly seeking to expand
          my skill set and deepen my problem-solving abilities. My primary focus
          lies in working with React and React Native, building robust,
          efficient and responsive web and mobile applications. I thrive on the
          excitement of taking on new projects and pushing the boundaries of
          what I can achieve. I find immense satisfaction in overcoming
          obstacles and delivering high-quality solutions that meet and exceed
          expectations. I am thrilled to be part of an ever-evolving industry
          and look forward to tackling new challenges, collaborating with
          talented individuals, and continuing to grow both personally and
          professionally.
        </p>
      </div>
    </motion.div>
  );
}
