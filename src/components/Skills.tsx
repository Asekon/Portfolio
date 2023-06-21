import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import {
  cssIcon,
  expoIcon,
  githubIcon,
  javascriptIcon,
  nextIcon,
  reactIcon,
  sassIcon,
  typescriptIcon,
} from "@/utils";

export default function Skills() {
  const SkillList = [
    {
      level: "100%",
      logo: githubIcon,
      name: "Github",
      directionLeft: true,
    },
    {
      level: "100%",
      logo: expoIcon,
      name: "Expo",
      directionLeft: true,
    },
    {
      level: "100%",
      logo: typescriptIcon,
      name: "Typescript",
      directionLeft: false,
    },
    {
      level: "100%",
      logo: javascriptIcon,
      name: "Javascript",
      directionLeft: false,
    },
    {
      level: "100%",
      logo: cssIcon,
      name: "CSS",
      directionLeft: true,
    },
    {
      level: "100%",
      logo: reactIcon,
      name: "React",
      directionLeft: true,
    },
    {
      level: "100%",
      logo: nextIcon,
      name: "Next",
      directionLeft: false,
    },
    {
      level: "100%",
      logo: sassIcon,
      name: "Sass",
      directionLeft: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex flex-row relative  text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-16">
        {SkillList.map((skill) => (
          <Skill
            key={skill.name}
            directionLeft={skill.directionLeft}
            name={skill.name}
            logo={skill.logo}
          />
        ))}
      </div>
    </motion.div>
  );
}
