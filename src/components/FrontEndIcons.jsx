import React from "react";
import  frontEndSvg  from "./FrontEndSvg";
import {AnimateFromRight} from "./PageAnimations"

export default function FrontEndIcons () {
    const mySvg = new frontEndSvg();

    return (
        <AnimateFromRight>
          <div className="flex flex-wrap justify-center space-x-4 space-y-2">
            <div className='animate-bounce' style={{ animationDelay: '0s' }}>
            {mySvg.reactIcon()}
            </div>
        
            <div className='animate-bounce' style={{ animationDelay: '0.1s' }}>
            {mySvg.cssIcon()}
            </div>

           <div className='animate-bounce' style={{ animationDelay: '0.2s' }}>
            {mySvg.htmlIcon()}
            </div>

            <div className='animate-bounce' style={{ animationDelay: '0.3s' }}>
            {mySvg.jsIcon()}
            </div>

            <div className='animate-bounce' style={{ animationDelay: '0.4s' }}>
            {mySvg.tailwindIcon()}
            </div>

            <div className='animate-bounce' style={{ animationDelay: '0.5s' }}>
            {mySvg.bootStrapIcon()}
            </div>

           </div>
            </AnimateFromRight>
    )


}