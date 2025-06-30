"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { ScrollContext } from "@/context/ScrollProvider";
import Image from "next/image";
import galleryImg from "@/assets/images/IMG_42671.jpg"; // Replace with your image

export default function Galleries() {
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
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Top Div */}
      <div className="h-[40vh] bg-neutral-900 flex items-center justify-center px-4">
        <h2 className="text-white text-2xl md:text-4xl text-center">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
      </div>

      {/* Bottom Div */}
      <div className="h-[60vh] relative bg-white">
        <div className="absolute inset-0 flex items-center justify-end pr-4">
          <div className="h-full max-h-full w-auto">
            <Image
              src={galleryImg}
              alt="Gallery"
              className="h-full object-cover rounded-lg shadow-lg"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
