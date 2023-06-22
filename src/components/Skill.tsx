import React from "react";
import { motion } from "framer-motion";
export default function Skill({
  directionLeft,
  logo,
  name,
}: {
  directionLeft: boolean;
  logo: string;
  name: string;
}) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -300 : 300, opacity: 0 }}
        transition={{ duration: 1, type: "spring" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={logo}
        className=" object-cover rounded-3xl w-15s h-15 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 rounded-3xl transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32  z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-1xl font-bold text-black opacity-100">{name}</p>
        </div>
      </div>
    </div>
  );
}
