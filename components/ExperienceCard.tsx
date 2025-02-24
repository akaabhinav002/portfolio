import React from "react";
import { motion } from "framer-motion";

interface ExperienceProps {
  experience: {
    title: string;
    company: string;
    date: string;
    description: string;
  };
}

export default function ExperienceCard({ experience }: ExperienceProps) {
  return (
    <motion.div
      className="bg-[#EAEAEA] p-6 rounded-lg shadow-md text-gray-700 w-5/12 mb-6 
      hover:bg-gray-300 hover:shadow-lg transition duration-500 ease-in-out"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h4 className="text-lg font-semibold text-gray-600">{experience.title}</h4>
      <p className="text-gray-500">{experience.company}</p>
      <p className="text-gray-400 text-sm mb-2">{experience.date}</p>
      <p className="text-gray-600 text-sm">{experience.description}</p>
    </motion.div>
  );
}
