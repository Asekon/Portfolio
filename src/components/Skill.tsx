import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Skill({
  directionLeft,
  logo,
  name,
}: {
  directionLeft: boolean;
  logo: string;
  name: string;
}) {
  const isMobile = window.innerWidth < 900;
  const direction = !isMobile ? (directionLeft ? -300 : 300) : 0;
  return (
    <motion.div
      initial={{ x: direction, opacity: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="group relative flex cursor-pointer"
    >
      <Image
        src={logo}
        alt=""
        height={300}
        width={300}
        className=" object-cover rounded-3xl w-15 h-15 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 rounded-3xl transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32  z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-1xl font-bold text-black opacity-100">{name}</p>
        </div>
      </div>
    </motion.div>
  );
}
