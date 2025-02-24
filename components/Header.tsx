import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {
  linkedinUrl: string;
  githubUrl: string;
};

export default function Header({ linkedinUrl, githubUrl }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      
      {/* Social Icons (LinkedIn & GitHub) */}
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center space-x-4"
      >
        {/* LinkedIn Icon */}
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <svg
            className="h-6 w-6 md:h-8 md:w-8 fill-gray-400 hover:fill-gray-200 transition duration-300"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C4.98 2.12 6.1 1 7.48 1s2.5 1.12 2.5 2.5S8.86 6 7.48 6c-1.38 0-2.5-1.12-2.5-2.5zM4 8h7v12H4V8zm9 0h7v12h-7V8zm2-3.5c0-1.38 1.12-2.5 2.5-2.5S20 3.12 20 4.5 18.88 7 17.5 7c-1.38 0-2.5-1.12-2.5-2.5z" />
          </svg>
        </a>

        {/* GitHub Icon */}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <svg
            className="h-6 w-6 md:h-8 md:w-8 fill-gray-400 hover:fill-gray-200 transition duration-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.66.5.5 5.66.5 12c0 5.08 3.29 9.38 7.86 10.91.58.1.79-.25.79-.56v-2.13c-3.21.7-3.89-1.49-3.89-1.49-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.19.08 1.82 1.22 1.82 1.22 1.05 1.81 2.76 1.29 3.44.99.1-.76.41-1.29.75-1.59-2.57-.29-5.27-1.29-5.27-5.74 0-1.27.45-2.31 1.2-3.13-.12-.3-.52-1.49.11-3.1 0 0 .98-.31 3.2 1.18.93-.26 1.93-.39 2.92-.39.99 0 2 .13 2.92.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.61.23 2.8.11 3.1.75.82 1.2 1.86 1.2 3.13 0 4.46-2.7 5.45-5.28 5.74.42.36.81 1.08.81 2.18v3.24c0 .31.21.66.8.55C20.71 21.38 24 17.08 24 12c0-6.34-5.16-11.5-11.5-11.5z" />
          </svg>
        </a>
      </motion.div>

      {/* Contact Section - ✅ Fixed <a> inside <a> issue */}
      <motion.div
        initial={{ x: 500, opacity: 0.5, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center cursor-pointer"
        onClick={() => (window.location.href = "#contact")}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}
