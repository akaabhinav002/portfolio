import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col md:flex-row items-center justify-evenly h-screen max-w-7xl px-10 mx-auto text-center md:text-left relative"
    >
      {/* ✅ Fixed heading so it stays at the top of the section */}
      <h3 className="absolute top-5 left-1/2 transform -translate-x-1/2 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        About
      </h3>

      {/* Left Side - Image */}
      {isMounted && (
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex-shrink-0"
        >
          <Image
            className="rounded-lg object-cover w-[300px] h-[400px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px]"
            src="/abt.jpg" // Ensure this image is in your public folder
            alt="Abhinav S Kangale"
            width={400}
            height={500}
            priority
          />
        </motion.div>
      )}

      {/* Right Side - About Content */}
      <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-lg">
        <h4 className="text-xl md:text-4xl font-semibold">
          Here is a <span className="underline decoration-darkGreen/50">little</span> background
        </h4>
        <p className="text-sm md:text-lg lg:text-lg text-justify">
          Artificial Intelligence and Machine Learning engineering student with practical experience in Python and developing 
          AI-driven solutions. Skilled in managing projects and eager to contribute to impactful AI/ML work while 
          continuously learning new technologies. Experienced in collaborating with diverse teams to achieve project goals.
        </p>
      </div>
    </motion.div>
  );
}
