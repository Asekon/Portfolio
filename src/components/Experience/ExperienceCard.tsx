import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
export default function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mb-5">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src="/IBS.png"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Frontend developer</h4>
        <p className="font-bold text-2xl mt-1">Rescounts</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="rounded-full"
            src="/IBS.png"
            alt=""
            height={10}
            width={10}
          ></Image>
        </div>
        <p className="uppercase text-gray-300">started -ended</p>
        <ul className="list-disc ml-5 text-lg">
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>
      </div>
    </article>
  );
}
