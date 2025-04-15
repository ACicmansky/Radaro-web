import { ReactNode } from "react";
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";

interface MotionWrapperProps {
  children: ReactNode;
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: boolean | TargetAndTransition | VariantLabels;
  exit?: TargetAndTransition | VariantLabels;
  transition?: any;
  className?: string;
}

export function MotionWrapper({
  children,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  exit = { opacity: 0 },
  transition = { duration: 0.5 },
  className = "",
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
