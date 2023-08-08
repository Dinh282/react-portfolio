import {
  AnimatedPage,
  AnimateFromLeft,
  AnimateFromRight,
} from "../components/PageAnimations";

import FrontEndIcons from "../components/FrontEndIcons";
import BackEndIcons from "../components/BackEndIcons";
import ToolIcons from "../components/ToolIcons";

export default function Resume() {
 

  return (
    <AnimatedPage>
      <div className="flex flex-col justify-center items-center space-y-4 mx-auto w-[80%] pt-6">
        <AnimateFromLeft>
          <h1 className="text-5xl text-blue-500">Front-end</h1>
        </AnimateFromLeft>
        <FrontEndIcons />
        
        <AnimateFromLeft>
          <h1 className="text-5xl text-blue-500">Back-end</h1>
        </AnimateFromLeft>
        <BackEndIcons />

        <AnimateFromLeft>
          <h1 className="text-5xl text-blue-500">Tools</h1>
        </AnimateFromLeft>
        <ToolIcons />

        <p>Icons used with the courtsey of <a target="_blank" href="https://icons8.com" className="link text-blue-600">Icons8</a></p>
      </div>
      
    </AnimatedPage>
  );
}
