import {
  AnimatedPage,
  AnimateFromLeft,
} from "../components/PageAnimations";

import FrontEndIcons from "../components/FrontEndIcons";
import BackEndIcons from "../components/BackEndIcons";
import ToolIcons from "../components/ToolIcons";

export default function Resume() {
 

  return (
    <AnimatedPage>
      <div className="flex flex-col justify-center items-center space-y-4 mx-auto w-[80%] pt-6">
        <AnimateFromLeft>
          <div className="text-5xl text-blue-500">Front-end</div>
        </AnimateFromLeft>
        <FrontEndIcons />
        
        <AnimateFromLeft>
          <div className="text-5xl text-blue-500">Back-end</div>
        </AnimateFromLeft>
        <BackEndIcons />

        <AnimateFromLeft>
          <div className="text-5xl text-blue-500">Tools</div>
        </AnimateFromLeft>
        <ToolIcons />

        <a href="/assets/documents/Dinh Nguyen's Resume.pdf" download="Dinh Nguyen's Resume.pdf" target="_blank" className="link text-blue-600 hover:scale-110"><h1>Download my full Resume</h1></a>
        <p className="dark:text-white text-black">Icons used with the courtsey of <a target="_blank" href="https://icons8.com" className="link text-blue-600">Icons8</a></p>
      </div>
      
    </AnimatedPage>
  );
}
