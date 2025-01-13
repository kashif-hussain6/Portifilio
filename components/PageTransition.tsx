"use client";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PageTransition = ({ children}: Props) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div 
        initial={{opacity:1}}
        animate={{opacity:0}}
        transition={{
            delay:1,
            duration:0.4,
            ease: "easeInOut",    
        }
    }
        className="h-screen w-screen fixed bg-bodyColor top pointer-events-none">
        </motion.div>
          {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
