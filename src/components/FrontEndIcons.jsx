import React from "react";
import  frontEndSvg  from "./FrontEndSvg";
import {AnimateFromRight} from "./PageAnimations"

export default function FrontEndIcons () {
    const mySvg = new frontEndSvg();

    return (
        <AnimateFromRight>
          <div className="flex flex-wrap justify-center space-x-6 space-y-2 pb-5">
            <div className='animate-bounce tooltip tooltip-info' data-tip="React" style={{ animationDelay: '0s' }}>
            {mySvg.reactIcon()}
            </div>
        
            <div className='animate-bounce tooltip tooltip-info' data-tip="CSS 3" style={{ animationDelay: '0.1s' }}>
            {mySvg.cssIcon()}
            </div>

           <div className='animate-bounce tooltip tooltip-info' data-tip="HTML 5" style={{ animationDelay: '0.2s' }}>
            {mySvg.htmlIcon()}
            </div>

            <div className='animate-bounce tooltip tooltip-info' data-tip="JavaScript" style={{ animationDelay: '0.3s' }}>
            {mySvg.jsIcon()}
            </div>

            <div className='animate-bounce tooltip tooltip-info' data-tip="Tailwind" style={{ animationDelay: '0.4s' }}>
            {mySvg.tailwindIcon()}
            </div>

            <div className='animate-bounce tooltip tooltip-info' data-tip="BootStrap" style={{ animationDelay: '0.5s' }}>
            {mySvg.bootStrapIcon()}
            </div>

           </div>
            </AnimateFromRight>
    )


}