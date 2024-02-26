import { HoverEffect } from "./ui/card-hover-effect";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

export default function Skills() {
  return (
    <section className="p-5">
      <p className=" text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-1">
        Skills
      </p>{" "}
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
export const projects = [
  {
    title: "HTML",
    icon: <SiHtml5 />,
  },
  {
    title: "CSS",
    icon: <SiCss3 />,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    title: "Bootstrap",
    icon: <SiBootstrap />,
  },
  {
    title: "Tailwind ",
    icon: <SiTailwindcss />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    title: "React",
    icon: <SiReact />,
  },
  {
    title: "Next js",
    icon: <SiNextdotjs />,
  },
];
