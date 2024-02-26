"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import Restaurant from '@/assets/Restauranr.png'
import Pokemon from '@/assets/Pokemon.png'
import Ecommerce from '@/assets/E-commerce.png'
import Gurucool from '@/assets/Gurucool.png'

export default function DotBackgroundDemo() {
  const projects = [
    {
      title: "Gurucool",
      description: "Website Made for IT learning Center",
      imageUrl: Gurucool,
      liveUrl: "https://gurucool.io/",
      githubUrl:
        "https://github.com/Cudp96/frotend-class/tree/master/assignment/Weather%20App",
    },
    {
      title: "Pokemon Website",
      description:
        "Website for Pokemon Characters and can see it's characteristics",
      imageUrl: Pokemon,
      liveUrl: "https://dazzling-ganache-eaf57d.netlify.app/",
      githubUrl: "https://github.com/Cudp96/pokemon-website",
    },
    {
      title: "Ecommerce Website",
      description: "Simple Website for ecommerce",
      imageUrl: Ecommerce,
      liveUrl: "https://visionary-granita-1124ba.netlify.app/",
      githubUrl: "https://github.com/Cudp96/Ecommerce-website",
    },
    {
      title: "Restaurant Website",
      description: "Simple Restaurant Website",
      imageUrl: Restaurant,
      liveUrl: "https://reliable-raindrop-881b63.netlify.app/",
      githubUrl: "https://github.com/Cudp96/restaurant-page",
    },
  ];
  return (
    <div id="/projects" className="min-h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative ">
      {/* Radial gradient for the container to give a faded look */}
      <p className=" text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Projects
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-6">
        {projects &&
          projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              title={project.title}
              href={project.githubUrl}
              image={project.imageUrl}
            />
          ))}
      </div>
    </div>
  );
}
