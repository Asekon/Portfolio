import { motion } from "framer-motion";
import React from "react";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [5, 1],
        opacity: 1,
        borderRadius: ["100%", "20%"],
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52 " />
      <div className="rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52 " />
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse " />
      <div className="rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52 " />
    </motion.div>
  );
}
