import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import {
  cssIcon,
  expoIcon,
  githubIcon,
  ibsLogo,
  javascriptIcon,
  nextIcon,
  reactIcon,
  rescountsLogo,
  sassIcon,
  typescriptIcon,
} from "@/utils";
const data = [
  {
    img: rescountsLogo,
    position: "Frontend developer",
    name: "Rescounts",
    technologies: [
      githubIcon,
      expoIcon,
      javascriptIcon,
      cssIcon,
      typescriptIcon,
      reactIcon,
    ],
    started: "June 2021",
    ended: "Feb 2022",
  },
  {
    img: ibsLogo,
    position: "Frontend developer",
    name: "International Business Services",
    technologies: [
      githubIcon,
      expoIcon,
      typescriptIcon,
      javascriptIcon,
      cssIcon,
      reactIcon,
      nextIcon,
      sassIcon,
    ],
    started: "Feb 2022",
    ended: "Present",
  },
];

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll pt-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin scroll">
        {data.map((company, index) => (
          <ExperienceCard key={index} company={company} />
        ))}
      </div>
    </motion.div>
  );
}
