import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { ANIMATION, Direction, createFadeInVariant, getScrollRevealProps, getHoverProps } from "@/lib/animations";

// Animation props that can be applied to any component
export interface AnimationProps {
  animate?: boolean;
  direction?: Direction;
  delay?: number;
  duration?: number;
  hover?: boolean;
  tap?: boolean;
  reveal?: boolean;
  threshold?: number;
  once?: boolean;
  stagger?: boolean;
  staggerChildren?: number;
  delayChildren?: number;
  useGPU?: boolean;
}

// Higher-order component to add animation capabilities to any component
export function withAnimation<T extends object>(Component: React.ComponentType<T>) {
  type WithAnimationProps = T & AnimationProps & { className?: string };
  
  const WithAnimation = React.forwardRef<HTMLElement, WithAnimationProps>(
    ({
      animate = false,
      direction = "up",
      delay = 0,
      duration = ANIMATION.durations.medium,
      hover = false,
      tap = false,
      reveal = false,
      threshold = ANIMATION.thresholds.standard,
      once = true,
      stagger = false,
      staggerChildren = 0.1,
      delayChildren = 0,
      useGPU = true,
      className = "",
      ...props
    }, ref) => {
      // Base animation props if animate is true
      const baseAnimationProps: HTMLMotionProps<"div"> = animate
        ? {
            initial: "hidden",
            animate: "visible",
            variants: createFadeInVariant(direction, duration),
            transition: {
              duration,
              delay,
              ease: ANIMATION.easings.easeOut
            }
          }
        : {};

      // Scroll reveal props if reveal is true
      const scrollProps = reveal
        ? getScrollRevealProps(direction, delay, once, threshold)
        : {};

      // Hover and tap props if enabled
      const interactionProps = (hover || tap)
        ? getHoverProps()
        : {};

      // GPU acceleration if enabled
      const gpuProps = useGPU
        ? {
            style: {
              willChange: "transform" as const,
              transformStyle: "preserve-3d" as const,
            }
          }
        : {};

      // Create the combined animation props
      const animationProps = {...baseAnimationProps, ...scrollProps, ...interactionProps, ...gpuProps};

      // Add the motion component wrapping if any animation is enabled
      if (animate || reveal || hover || tap) {
        return (
          <motion.div
            ref={ref as React.Ref<HTMLDivElement>}
            className={className}
            {...animationProps}
          >
            <Component {...props as unknown as T} />
          </motion.div>
        );
      }

      // Return the component as is if no animation is needed
      return <Component ref={ref} className={className} {...props as unknown as T} />;
    }
  );

  WithAnimation.displayName = `WithAnimation(${Component.displayName || Component.name || 'Component'})`;
  return WithAnimation;
}

// Hook to get motion props based on animation configuration
export function useAnimationProps({
  animate = false,
  direction = "up",
  delay = 0,
  duration = ANIMATION.durations.medium,
  hover = false,
  tap = false,
  reveal = false,
  threshold = ANIMATION.thresholds.standard,
  once = true,
  useGPU = true
}: Partial<AnimationProps> = {}): HTMLMotionProps<"div"> {
  // Base animation props
  const baseAnimationProps: HTMLMotionProps<"div"> = animate
    ? {
        initial: "hidden",
        animate: "visible",
        variants: createFadeInVariant(direction, duration),
        transition: {
          duration,
          delay,
          ease: ANIMATION.easings.easeOut
        }
      }
    : {};

  // Scroll reveal props
  const scrollProps = reveal
    ? getScrollRevealProps(direction, delay, once, threshold)
    : {};

  // Hover and tap props
  const interactionProps = (hover || tap)
    ? getHoverProps()
    : {};

  // GPU acceleration
  const gpuProps = useGPU
    ? {
        style: {
          willChange: "transform" as const,
          transformStyle: "preserve-3d" as const,
        }
      }
    : {};

  return {
    ...baseAnimationProps,
    ...scrollProps,
    ...interactionProps,
    ...gpuProps,
  };
}

// Shortcut component that provides animation capabilities
export const AnimatedElement: React.FC<HTMLMotionProps<"div"> & AnimationProps> = ({
  children,
  animate = false,
  direction = "up",
  delay = 0,
  duration = ANIMATION.durations.medium,
  hover = false,
  tap = false,
  reveal = false,
  threshold = ANIMATION.thresholds.standard,
  once = true,
  stagger = false,
  staggerChildren = 0.1,
  delayChildren = 0,
  useGPU = true,
  className = "",
  ...props
}) => {
  const animationProps = useAnimationProps({
    animate,
    direction,
    delay,
    duration,
    hover,
    tap,
    reveal,
    threshold,
    once,
    useGPU
  });

  return (
    <motion.div
      className={className}
      {...animationProps}
      {...props}
    >
      {children}
    </motion.div>
  );
};
