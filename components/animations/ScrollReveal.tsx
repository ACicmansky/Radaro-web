import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ANIMATION, Direction, createFadeInVariant } from "@/lib/animations";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
  useGPU?: boolean;
}

export const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = ANIMATION.durations.medium,
  className = "",
  once = true,
  threshold = ANIMATION.thresholds.standard,
  useGPU = true
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  // Get animation variants based on direction
  const variants = createFadeInVariant(direction, duration);
  
  // Create base animation props
  const animationProps = {
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    variants
  };
  
  // Apply GPU acceleration if enabled
  const gpuStyles = useGPU ? {
    style: { willChange: "transform" as const, transformStyle: "preserve-3d" as const }
  } : {};

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      {...gpuStyles}
      transition={{ 
        duration, 
        delay, 
        ease: ANIMATION.easings.easeOut 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
