"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project, title, href, image }: any) {
  return (
    <div className="h-[23rem] w-full flex items-center justify-center">
      <PinContainer title={title} href={href}>
        <Link href={href}>
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              {project.title}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">{project.description}</span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              <Image src={image} alt="" className="w-full object-cover" />
            </div>
          </div>
        </Link>
      </PinContainer>
    </div>
  );
}
