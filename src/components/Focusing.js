"use client";
import { useContext, useEffect, useState, useRef } from "react";
import { ScrollContext } from "@/context/ScrollProvider";
import Image from "next/image";
import focusBg from "@/assets/images/IMG_42671.jpg"; // replace with your image
import logo from "@/assets/images/logo.png"; // replace with your logo

export default function Focusing() {
  const { scrollY } = useContext(ScrollContext);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionTop = sectionRef.current?.offsetTop || 0;
    const windowHeight = window.innerHeight;

    if (scrollY + windowHeight >= sectionTop + 100) {
      setIsVisible(true);
    }
  }, [scrollY]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[50vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={focusBg}
        alt="Background"
        fill
        className="object-cover z-0"
        priority
      />
      {/* Darker Overlay */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* Content */}
      <div
        className={`relative z-20 max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Left: Logo */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={logo}
            alt="Logo"
            width={280}
            height={280}
            className="object-contain"
          />
        </div>

        {/* Right: Text */}
        <div className="text-white text-lg md:text-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur sem sed sapien vulputate, ac tincidunt justo pharetra.
          </p>
        </div>
      </div>
    </section>
  );
}
