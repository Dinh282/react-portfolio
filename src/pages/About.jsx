import { AnimatedPage } from "../components/PageAnimations";

export default function About() {
  return (
    <AnimatedPage>
      <div className="flex flex-col justify-center items-center space-y-4 mx-auto w-[80%]">
        <h1 className="text-4xl dark:text-white text-black underline decoration-1 py-4">
          About Me
        </h1>
        <div className="bg-img" role="img" aria-label="avatar">
          <img
            src="/assets/images/avatar.jpg"
            alt="avatar/photo of webpage author"
          />
        </div>
        <p className="pb-10 text-lg text-gray dark:text-white">
          I am a current student in the UNC coding bootcamp program, focusing on
          developing my skills in full stack development. So far, I have gained
          knowledge in HTML, CSS, API(client and server side), Jquery,
          Bootstrap, Tailwind, Git, and GitHub, which has allowed me to create
          and manage websites. As I continue with the program, I am eager to
          expand my skillset even further, with upcoming courses in Node.js,
          React, and MERN Stack. I am passionate about utilizing technology to
          solve problems and create user-friendly applications, and I am excited
          about the opportunities that lie ahead in my journey as a full stack
          developer.
        </p>
      </div>
    </AnimatedPage>
  );
}
