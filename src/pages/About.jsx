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
        <p className="pb-1 text-lg text-gray dark:text-white">
          I'm thrilled to share that I've successfully completed the UNC Full Stack Coding Bootcamp and earned my certificate. With a solid foundation in 
          web development, I am now actively seeking opportunities in the field, whether part-time or full-time, to further advance my skills and contribute
          to exciting projects.
        </p>

        <p className="pb-1 text-lg text-gray dark:text-white">
          During my bootcamp journey, I acquired a comprehensive set of skills, including proficiency in HTML, CSS, API (both client and server-side), jQuery,
          Bootstrap, Tailwind, Git, GitHub, Node.js, React, and more. As I continue my gorwth in this dynamic field, I am excited about the prospect of diving deeper 
          into these technologies.
        </p>

        <p className="pb-1 text-lg text-gray dark:text-white">
          My passion lies in using technology to solve real-world problems and craft user-friendly applications. I believe in the power of clean, efficient code 
          to make a difference, and I'm enthusiactic about the opportunities that lie ahead as i progress on my path as a full stack developer.
        </p>

        <p className="pb-1 text-lg text-gray dark:text-white">
          Feel free to explore my portfolio to see examples of my work, and please don't hesitate to reach out if you'd like to connect or discuss potential 
          collborations. I'm always open to new challenges and eager to take my knowledge and skills to the next level in the ever-evolving world of web development.
        </p>

        <p className="pb-5 text-lg text-gray dark:text-white">
          Thank you for visiting, and I look forward to connecting with you!
        </p>
      </div>
    </AnimatedPage>
  );
}
