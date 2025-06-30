"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ScrollContext } from "../context/ScrollProvider";

export default function OurStory() {
  const { scrollY } = useContext(ScrollContext);
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const top = sectionRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      setShow(true);
    }
  }, [scrollY]);

  const variants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-red-800 w-full text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
        <motion.div
          className="text-left"
          variants={variants}
          initial="hidden"
          animate={show ? "visible" : "hidden"}
        >
          <h1 className="text-4xl font-bold">Our Story</h1>
        </motion.div>

        <motion.div
          className="text-right"
          variants={variants}
          initial="hidden"
          animate={show ? "visible" : "hidden"}
        >
          <h2 className="text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
