
import { useRef } from "react";
import { AnimationControls, Variants } from "framer-motion";

type StaggeredAnimationOptions = {
  delayChildren?: number;
  staggerChildren?: number;
  childrenInitialDelay?: number;
};

export function useStaggeredAnimation(options: StaggeredAnimationOptions = {}) {
  const {
    delayChildren = 0.2,
    staggerChildren = 0.1,
    childrenInitialDelay = 0
  } = options;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: childrenInitialDelay + (i * 0.05)
      }
    })
  };

  const customStartIndex = useRef(0);
  
  const getCustomVariants = (startIndex: number = 0) => {
    customStartIndex.current = startIndex;
    return itemVariants;
  };

  return {
    containerVariants,
    itemVariants,
    getCustomVariants
  };
}
