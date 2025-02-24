import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [text] = useTypewriter({
    words: [
      "Hi, I'm Abhinav S Kangale",
      "I build AI-driven applications 🤖",
      "And I love problem-solving 🧠",
      "I also enjoy playing guitar 🎸",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      {/* ✅ Use Next.js Image with unoptimized for local files */}
      {isMounted && (
        <Image
          className="relative rounded-full object-cover"
          src="/profile.png"
          alt="Abhinav S Kangale"
          width={250}
          height={250}
          priority
          unoptimized
        />
      )}

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
          <b>AI/ML Developer</b>
        </h2>
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{isMounted ? text : "Loading..."}</span>
          <Cursor cursorColor="#68B2A0" />
        </h1>

        <div className="pt-5">
          <Link href="#about" className="heroButton">About</Link>
          <Link href="#experience" className="heroButton">Experience</Link>
          <Link href="#skills" className="heroButton">Skills</Link>
          <Link href="#projects" className="heroButton">Projects</Link>
        </div>
      </div>
    </div>
  );
}
