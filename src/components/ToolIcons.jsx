import React from "react";
import  toolSvg  from "./ToolSvg";
import {AnimateFromRight} from "./PageAnimations"

export default function ToolIcons () {
    const mySvg = new toolSvg();

    return (
        <AnimateFromRight>
          <div className="flex flex-wrap justify-center space-x-6 pb-5 space-y-2">
            <div className='animate-bounce tooltip tooltip-info' data-tip="Visual Studio Code" style={{ animationDelay: '0.5s' }}>
            {mySvg.vscIcon()}
            </div>
        
            <div className='animate-bounce tooltip tooltip-info' data-tip="Node Package Manager" style={{ animationDelay: '0s' }}>
            {mySvg.npmIcon()}
            </div>

           <div className='animate-bounce tooltip tooltip-info' data-tip="Insomnia" style={{ animationDelay: '0.5s' }}>
            {mySvg.insomniaIcon()}
            </div>

            <div className='animate-bounce tooltip tooltip-info' data-tip="Git" style={{ animationDelay: '0s' }}>
            {mySvg.gitIcon()}
            </div>

            <div className='animate-bounce tooltip tooltip-info' data-tip="Heroku" style={{ animationDelay: '0.5s' }}>
            {mySvg.herokuIcon()}
            </div>

            <div className='animate-bounce tooltip tooltip-info' data-tip="Webpack" style={{ animationDelay: '0s' }}>
            {mySvg.webpackIcon()}
            </div>

           </div>
            </AnimateFromRight>
    )


}