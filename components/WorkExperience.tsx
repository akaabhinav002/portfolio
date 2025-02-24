import React, { useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

export default function WorkExperience() {
  const [activeTab, setActiveTab] = useState("Professional"); // ✅ Default to Professional

  const educationData = [
    {
      title: "Bachelor of Engineering – Artificial Intelligence and Machine Learning",
      company: "Mangalore Institute of Technology & Engineering",
      date: "2025 - Present",
      description: "CGPA: 8.8",
    },
    {
      title: "Senior Secondary (12th)",
      company: "KLE’s Prerana PU College, Hubli",
      date: "2021",
      description: "Percentage: 93.5%",
    },
    {
      title: "Secondary School (SSLC)",
      company: "KLE Society’s English Medium School",
      date: "2019",
      description: "Percentage: 93.76%",
    },
  ];

  const professionalData = [
    {
      title: "Machine Learning Intern",
      company: "DataNex",
      date: "Oct 2023 - Nov 2023",
      description:
        "Worked on Heart Disease Prediction project using Python, Machine Learning, and Streamlit. Developed a predictive model improving accuracy by 15% using Logistic Regression, Decision Trees, and Random Forest algorithms.",
    },
    {
      title: "COO at Wooden Styles",
      company: "Funded Startup",
      date: "Nov 2023 - Jan 2024",
      description:
        "Managed logistics and onboarded clients for Wooden Styles, an e-commerce platform specializing in customized furniture.",
    },
  ];

  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center max-w-7xl px-10 mx-auto text-gray-700 bg-[#F8F8F8]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }} // ✅ Smooth fade-in transition
    >
      <h3 className="text-3xl font-light tracking-[10px] md:tracking-[15px] text-gray-500 uppercase mb-4">
        <b>Experience</b>
      </h3>
      <p className="text-gray-500 text-sm mb-8">
        My journey in the academic & professional front
      </p>

      {/* Tabs */}
      <div className="flex space-x-10 mb-10">
        <button
          onClick={() => setActiveTab("Academic")}
          className={`text-lg font-semibold flex items-center space-x-2 transition duration-300 ease-in-out ${
            activeTab === "Academic"
              ? "text-gray-700 underline"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          📚 Academic
        </button>
        <button
          onClick={() => setActiveTab("Professional")}
          className={`text-lg font-semibold flex items-center space-x-2 transition duration-300 ease-in-out ${
            activeTab === "Professional"
              ? "text-gray-700 underline"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          💼 Professional
        </button>
      </div>

      {/* Timeline Layout */}
      <div className="relative flex flex-col items-center w-full max-w-4xl">
        {/* Vertical Line in Center */}
        <div className="absolute w-1 bg-gray-300 h-full top-0 left-1/2 transform -translate-x-1/2"></div>

        {(activeTab === "Academic" ? educationData : professionalData).map(
          (exp, index) => (
            <motion.div
              key={index}
              className={`flex w-full items-center justify-between transition duration-500 ease-in-out ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Card */}
              <ExperienceCard experience={exp} />

              {/* Dot in the center */}
              <div className="w-4 h-4 bg-gray-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  );
}
