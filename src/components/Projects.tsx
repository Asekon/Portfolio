import {
  ibsAppImages,
  ibsDashboardImages,
  ibsMobileIcon,
  rescountsLogo,
  rescountsProjectImages,
} from "@/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useRef } from "react";
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";
export default function Projects() {
  const projectList = [
    {
      title: "IBS Mobile",
      description:
        "Cross-platfrom mobile app for IBS's employees to track their salaries, insurance status, chat with customer support and more",
      logo: ibsMobileIcon,
      images: ibsAppImages,
      link: "https://play.google.com/store/apps/details?id=com.ibs.mobile&hl=en&gl=US",
    },
    {
      title: "IBS Dashboard",
      description:
        "An internal dashboard for managing IBS employees and all their data",
      logo: ibsMobileIcon,
      images: ibsDashboardImages,
      // link: "https://play.google.com/store/apps/details?id=com.ibs.mobile&hl=en&gl=US",
    },
    {
      title: "Rescounts",
      description:
        "Cross-platfrom mobile app for food pre-ordering in restaurants",
      logo: rescountsLogo,
      images: rescountsProjectImages,
      link: "https://play.google.com/store/apps/details?id=com.rescounts.app&hl=en&gl=US",
    },
  ];

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const containerRef: any = useRef(null);

  const scrollToNextProject = () => {
    const nextIndex = (activeProjectIndex + 1) % projectList.length;
    setActiveProjectIndex(nextIndex);

    if (containerRef && containerRef.current) {
      containerRef.current.children[nextIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };
  const scrollToPreviousProject = () => {
    const previousIndex =
      activeProjectIndex - 1 < 0
        ? projectList.length - 1
        : activeProjectIndex - 1;
    setActiveProjectIndex(previousIndex);

    if (containerRef && containerRef.current) {
      containerRef.current.children[previousIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <button
        className="absolute left-20 top-1/2 transform z-50 hidden md:block"
        onClick={scrollToPreviousProject}
      >
        <ArrowLeftCircleIcon className="text-[#141414] h-16 w-16 " />
      </button>
      <div
        ref={containerRef}
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projectList.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <div className="flex flex-row space-x-5 items-center justify-center">
              {project.images.map((image, index) => (
                <motion.img
                  initial={{
                    y: -300,
                    opacity: 0,
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl w-50 h-40 md:w-24 md:h-44 lg:w-max lg:h-72 "
                  src={image}
                  alt=""
                  key={index}
                />
              ))}
            </div>
            <div className="space-y-3 px-0 md:px-10 max-w-6xl flex flex-col items-center">
              <a
                className="flex items-center space-x-5"
                href={project.link}
                target="_blank"
              >
                <Image
                  src={project.logo}
                  width={300}
                  height={300}
                  alt=""
                  className="rounded-full w-12 h-12 md:w-16 md:h-16 xl:w-23 xl:h-23"
                />
                <h4 className="text-2xl font-semibold text-center md:text-3xl">
                  <span className="underline decoration-[#F7AB0A]/50">
                    {project.title}
                  </span>
                </h4>
              </a>
              <p className="text-xl text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
      <button
        className="absolute right-20 top-1/2 transform -translate-y-1/2  z-50 hidden md:block"
        onClick={scrollToNextProject}
      >
        <ArrowRightCircleIcon className="text-[#141414] h-16 w-16 " />
      </button>
    </motion.div>
  );
}
