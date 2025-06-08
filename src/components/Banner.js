"use client";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

const MotionImage = motion(Image);
export default function Banner() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-stone-900">
      <div className="w-full">
        <div className="w-full p-12 banner-bg">
          <div className="h-full flex items-center justify-center">
            <MotionImage
              width={576}
              height={0}
              src="/assets/images/logo_tr.png"
              alt="Logo"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
        {/* <h1 className="banner-bodytext text-center text-3xl py-5">
          "Uncovering Visuals from your Vision."
        </h1> */}
      </div>
    </div>
  );
}
