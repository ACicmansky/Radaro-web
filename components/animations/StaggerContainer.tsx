import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STAGGER, ANIMATION, getStaggerContainerProps } from "@/lib/animations";

interface StaggerContainerProps {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
  useGPU?: boolean;
}

export const StaggerContainer = ({
  children,
  delay = 0,
  staggerChildren = STAGGER.standard,
  className = "",
  once = true,
  threshold = ANIMATION.thresholds.standard,
  useGPU = true
}: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  
  // Get animation props from utility
  const animationProps = getStaggerContainerProps(delay, staggerChildren, once, threshold);
  
  // Override the animation state based on current view state
  const animate = isInView ? "visible" : "hidden";
  
  // Apply GPU acceleration if enabled
  const gpuStyles = useGPU ? {
    style: { willChange: "transform" as const, transformStyle: "preserve-3d" as const }
  } : {};

  return (
    <motion.div
      ref={ref}
      className={className}
      {...animationProps}
      animate={animate}
      {...gpuStyles}
    >
      {children}
    </motion.div>
  );
}
