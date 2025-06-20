"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedWord from "./AnimatedWord";

const wordPositions = [
  { label: "We", className: "top-4 left-4" },
  { label: "Believe", className: "top-4 left-1/2 -translate-x-1/2" },
  { label: "You", className: "top-4 right-4" },
  { label: "Have", className: "top-1/2 -translate-y-1/2 left-4" },
  { label: "A", className: "top-1/2 -translate-y-1/2 right-4" },
  { label: "Story", className: "bottom-4 left-4" },
  { label: "Worth", className: "bottom-4 left-1/2 -translate-x-1/2" },
  { label: "Telling", className: "bottom-4 right-4" },
];

export default function Hero() {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    wordPositions.forEach((_, i) => {
      setTimeout(() => {
        setVisibleIndexes((prev) => [...prev, i]);
      }, (i + 1) * 300);
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/IMG_4267.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Words */}
      {wordPositions.map((word, i) =>
        visibleIndexes.includes(i) ? (
          <AnimatedWord
            key={i}
            label={word.label}
            positionClass={word.className}
            delay={i * 0.1}
            isRed={isHover}
          />
        ) : null
      )}

      {/* Center image fade-in from top */}
      <motion.div
        className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Image
          src="/assets/images/logo_tr.png"
          alt="center logo"
          width={360}
          height={360}
        />
      </motion.div>
    </section>
  );
}
