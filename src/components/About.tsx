import { BackgroundBeams } from "./ui/background-beam";

export default function About() {
  return (
    <section id="about" className="h-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Hi,I am <span className="text-violet-400">Sudeep Shrestha</span> from
          Nepal.
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          <span className="text-2xl font-bold">I</span> am aspiring front-end
          developer with a focus on creating user-friendly and visually
          appealing web experiences. I am passionate about learning and
          mastering the art of creating visually appealing and user-friendly
          websites. Armed with foundational knowledge of HTML, CSS, and
          JavaScript, I am excited to embark on this journey to build
          captivating web interfaces.
        </p>
      </div>
      <BackgroundBeams />
    </section>
  );
}
