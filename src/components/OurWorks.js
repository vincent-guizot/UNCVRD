"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ScrollContext } from "../context/ScrollProvider";
import Carousel from "./Carousel";

export default function OurWorks() {
  const sectionRef = useRef(null);
  const { scrollY } = useContext(ScrollContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const top = sectionRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      setShow(true);
    }
  }, [scrollY]);

  return (
    <section ref={sectionRef} className="bg-black text-white py-24 px-6">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Our Works
      </motion.h2>

      {show && <Carousel />}
    </section>
  );
}
