"use client";
import { motion } from "framer-motion";

export default function AnimatedWord({ label, positionClass, delay, isRed }) {
  return (
    <motion.div
      className={`absolute ${positionClass} text-2xl font-semibold ${
        isRed ? "text-red-500" : "text-white"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {label}
    </motion.div>
  );
}
