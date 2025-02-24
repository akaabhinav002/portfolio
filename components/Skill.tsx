import React from "react";
import { motion } from "framer-motion";

type Props = {
  skill: {
    name: string;
    image: string;
    progress: number;
  };
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full border-2 border-gray-300 object-cover w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={skill.image}
        alt={skill.name}
      />
      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out bg-white w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
