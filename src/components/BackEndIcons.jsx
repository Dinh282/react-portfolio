import React from "react";
import  backEndSvg  from "./BackEndSvg";
import {AnimateFromRight} from "./PageAnimations"

export default function BackEndIcons () {
    const mySvg = new backEndSvg();

    return (
        <AnimateFromRight>
          <div className="flex flex-wrap justify-center space-x-4 space-y-2">
            <div className='animate-bounce' style={{ animationDelay: '0.5s' }}>
            {mySvg.mysqlIcon()}
            </div>
        
            <div className='animate-bounce' style={{ animationDelay: '0.3s' }}>
            {mySvg.mongodbIcon()}
            </div>

           <div className='animate-bounce' style={{ animationDelay: '0' }}>
            {mySvg.graphqlIcon()}
            </div>

            <div className='animate-bounce' style={{ animationDelay: '0.3s' }}>
            {mySvg.jwtIcon()}
            </div>

            <div className='animate-bounce' style={{ animationDelay: '0.5s' }}>
            {mySvg.nodejsIcon()}
            </div>

            <div className='animate-bounce' style={{ animationDelay: '0.5s' }}>
            {/* {mySvg.bootStrapIcon()} */}
            </div>

           </div>
            </AnimateFromRight>
    )


}