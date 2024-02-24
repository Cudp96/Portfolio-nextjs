import { HoverEffect } from "./ui/card-hover-effect";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  return (
    <section className="p-5">
      <h2 className="text-center text-3xl">Skills</h2>
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
];
