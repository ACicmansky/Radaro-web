import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ANIMATION, Direction, createFadeInVariant, getHoverProps } from "@/lib/animations";

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: Direction;
  hover?: boolean;
  tap?: boolean;
  useGPU?: boolean;
  animate?: boolean; // Controls if the component should animate on mount
  reveal?: boolean; // Controls if the component should animate on scroll
  threshold?: number; // Viewport threshold for reveal animations
  once?: boolean; // Whether reveal animation happens only once
}

export const MotionWrapper = ({ 
  children, 
  delay = 0, 
  duration = ANIMATION.durations.medium,
  className = "",
  direction = "up",
  hover = false,
  tap = false,
  useGPU = true,
  animate = true, // Default to animating on mount
  reveal = false, // Default to not using scroll reveal
  threshold = ANIMATION.thresholds.standard,
  once = true
}: MotionWrapperProps) => {
  // Get the appropriate variants for the direction
  const variants = createFadeInVariant(direction, duration);
  
  // Get hover and tap effects if enabled
  const interactionProps = hover || tap ? getHoverProps() : {};
  
  // Create animation props based on whether we're doing reveal or standard animation
  const animationProps = reveal ? {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once, amount: threshold },
    variants
  } : animate ? {
    initial: "hidden",
    animate: "visible",
    variants
  } : {}; // Empty object if no animation needed
  
  // Apply GPU acceleration if enabled
  const gpuStyles = useGPU ? {
    style: { willChange: "transform" as const, transformStyle: "preserve-3d" as const }
  } : {};
  
  return (
    <motion.div
      {...animationProps}
      {...gpuStyles}
      transition={{
        duration,
        delay,
        ease: ANIMATION.easings.easeOut
      }}
      {...interactionProps}
      className={className}
    >
      {children}
    </motion.div>
  );
}
