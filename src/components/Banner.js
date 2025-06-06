import Image from "next/image";
import React from "react";
import UNCVRDProduction from "@/assets/images/logo.png";

export default function Banner() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-stone-900">
      <div>
        <Image width={576} src={UNCVRDProduction} alt="Logo" />
        <h1 className="banner-bodytext text-center text-3xl py-5">
          "Uncovering Visuals from your Vision."
        </h1>
      </div>
    </div>
  );
}
