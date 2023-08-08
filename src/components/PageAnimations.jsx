import {motion} from "framer-motion";

const animations = {
    initial: {opacity: 0,  },
    animate: {opacity: 1,  },
    exit: { opacity: 0, },
}   

export const titleVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
    fromLeft: { opacity: 0, x: -100 },
    fromRight: { opacity: 0, x: 100 },
  };

export const AnimatedPage = ({children}) => {
    return (
        <motion.div 
        variants={animations} 
        initial='initial' 
        animate='animate' 
        exit='exit'
        transition= {{ duration: 3 }}
        >
            {children}
        </motion.div>
    )
}

export const AnimateFromLeft = ({ children }) => (
    <motion.h1
      initial="fromLeft"
      animate="animate"
      variants={titleVariants}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.h1>
  );
  
  export const AnimateFromRight = ({ children }) => (
    <motion.h1
      initial="fromRight"
      animate="animate"
      variants={titleVariants}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.h1>
  );
  
