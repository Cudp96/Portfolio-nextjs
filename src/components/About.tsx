import { BackgroundBeams } from "./ui/background-beam";

export default function About() {
  return (
    <section
      id="about"
      className="h-[40rem] md:min-h-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased my-4"
    >
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="relative z-10 text-2xl md:text-5xl lg:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Hi,I am <span className="text-violet-400">Sudeep Shrestha</span> from
          Nepal.
        </h1>
        <p className="text-neutral-400  text-sm sm:text-xl mx-auto my-2 text-justify relative z-10">
          <span className="text-2xl font-bold">I</span> am aspiring front-end
          developer with a focus on creating user-friendly and visually
          appealing web experiences. I am passionate about learning and
          mastering the art of creating visually appealing and user-friendly
          websites. Armed with foundational knowledge of HTML, CSS, and
          JavaScript, I am excited to embark on this journey to build
          captivating web interfaces.I possess a diverse skill set that
          encompasses HTML, CSS, and JavaScript, allowing me to craft visually
          stunning and highly interactive user interfaces. Leveraging frameworks
          such as Bootstrap and Tailwind CSS, I streamline development processes
          and ensure consistent design patterns while prioritizing
          responsiveness and accessibility. My proficiency in React and Next.js
          enables me to build dynamic, single-page applications with ease,
          leveraging component-based architecture and client-side routing for
          seamless navigation. With a keen eye for detail and a commitment to
          best practices, I employ TypeScript to enhance code quality and
          maintainability, ensuring robust and scalable frontend solutions.
          Continuously pushing the boundaries of innovation, I thrive in
          collaborative environments, where I can leverage my expertise to
          deliver cutting-edge web experiences that delight users and drive
          business success.
        </p>
      </div>
      <BackgroundBeams />
    </section>
  );
}
