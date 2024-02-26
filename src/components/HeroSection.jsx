"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import image1 from "@/assets/image1.png";
import Image from "next/image";

const HeroSection = () => {
  const words = [
    {
      text: "I",
      className: "text-3xl",
    },
    {
      text: "am",
      className: "text-3xl",
    },
    {
      text: "aspiring",
      className: "text-3xl",
    },
    {
      text: "Web",
      className: "text-3xl",
    },
    {
      text: "Developer.",
      className: "text-blue-500 dark:text-blue-500 text-3xl",
    },
  ];
  return (
    <div className="h-auto md:min-h-screen w-full rounded-md flex justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex justify-center items-center flex-col-reverse sm:flex-row md:flex-row ">
        <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-1 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Sudeep Shrestha
          </h1>
          <TypewriterEffect words={words} />
          <div className="mt-4">
            <Link href={"/"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                border
              >
                Explore More!
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={image1}
            className="w-[180px] mt-16 sm:mt-0 object-contain sm:w-[300px] drop-shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
