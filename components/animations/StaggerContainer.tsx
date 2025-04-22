import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export const StaggerContainer = ({
  children,
  delay = 0,
  staggerChildren = 0.1,
  className = "",
  once = true,
  threshold = 0.1,
}: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerChildren,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
