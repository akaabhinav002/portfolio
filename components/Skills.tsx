import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

const skills = [
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", progress: 95 },
  { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", progress: 85 },
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", progress: 90 },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", progress: 90 },
  { name: "Streamlit", image: "https://streamlit.io/favicon.svg", progress: 95 },
  { name: "Flask", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", progress: 80 },
  { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", progress: 85 },
  { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", progress: 75 },
  { name: "WordPress", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg", progress: 70 },
  { name: "Machine Learning", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", progress: 80 },
  { name: "Artificial Intelligence", image: "/gimini.png", progress: 95 },
  { name: "Tenserflow", image: "/Langchain.png", progress: 85 },
  { name: "C", image: "/crew.svg", progress: 80 },
];

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col text-center justify-center items-center max-w-[2000px] xl:px-10 min-h-screen mx-auto"
    >
      {/* ✅ Fixed Centered Headings */}
      <div className="sticky top-16 z-10 bg-inherit text-center w-full">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
          Skills
        </h3>
        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm mt-2">
          Hover over a skill for current proficiency
        </h3>
      </div>

      {/* ✅ Icons below headings (Properly Centered) */}
      <div className="grid grid-cols-4 gap-6 mt-10">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}

        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill.name} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
