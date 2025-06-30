"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/9bZkp7q19f0",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  "https://www.youtube.com/embed/L_jWHffIx5E",
  "https://www.youtube.com/embed/CevxZvSJLk8",
];

const ITEMS_PER_VIEW = 3;
const ITEM_WIDTH_PERCENT = 100 / ITEMS_PER_VIEW; // = 33.333%

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const totalItems = videos.length;

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // generate the current visible set (3 videos sliding one by one)
  const getVisibleItems = () => {
    return Array.from({ length: ITEMS_PER_VIEW }).map((_, i) => {
      const videoIndex = (index + i) % totalItems;
      return videos[videoIndex];
    });
  };

  const visibleVideos = getVisibleItems();

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Video Track */}
      <div className="overflow-hidden">
        <motion.div
          key={index} // triggers re-animation on index change
          className="flex gap-4"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {visibleVideos.map((url, i) => (
            <div
              key={i}
              className="w-1/3 shrink-0 bg-black rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src={url}
                title={`YouTube Video ${index + i}`}
                className="w-full h-48 md:h-60"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-6 px-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}
