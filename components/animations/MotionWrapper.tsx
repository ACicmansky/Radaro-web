import { ReactNode } from "react";
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";

type AnimationDirection = "up" | "down" | "left" | "right" | "scale" | "none";

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: AnimationDirection;
  hover?: boolean;
  tap?: boolean;
}

export function MotionWrapper({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className = "",
  direction = "up",
  hover = false,
  tap = false
}: MotionWrapperProps) {
  // Standard initial and animate values
  const initial = {
    opacity: 0,
    y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
    x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    scale: direction === "scale" ? 0.95 : 1,
  };

  const animate = { 
    opacity: 1, 
    y: 0, 
    x: 0,
    scale: 1
  };

  // Standard hover effect if enabled
  const hoverEffect = hover ? {
    scale: 1.05,
    transition: { duration: 0.2 }
  } : undefined;

  // Standard tap effect if enabled
  const tapEffect = tap ? {
    scale: 0.98,
    transition: { duration: 0.1 }
  } : undefined;

  return (
    <motion.div
      initial={initial}
      animate={animate}
      whileHover={hoverEffect}
      whileTap={tapEffect}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
