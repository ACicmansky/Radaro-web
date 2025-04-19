import { Variants, TargetAndTransition } from "framer-motion";

// Animation Constants

export const ANIMATION = {
  durations: { ultraFast: 0.1, fast: 0.2, medium: 0.5, slow: 0.8, ultraSlow: 1.2 },
  easings: { easeOut: "easeOut", easeIn: "easeIn", easeInOut: "easeInOut", smooth: [0.43, 0.13, 0.23, 0.96], bounce: [0.43, 0.13, 0.23, 1.2], elastic: [0.64, 0.57, 0.67, 1.53] },
  thresholds: { minimal: 0.05, standard: 0.1, half: 0.5, full: 0.9 }
};

export const STAGGER = { tight: 0.05, standard: 0.1, relaxed: 0.2, dramatic: 0.3 };

// Standard Transitions

export const transitions = {
  standard: { duration: ANIMATION.durations.medium, ease: ANIMATION.easings.easeOut },
  hover: { duration: ANIMATION.durations.fast, ease: ANIMATION.easings.smooth },
  tap: { duration: ANIMATION.durations.ultraFast, ease: ANIMATION.easings.easeOut },
  spring: { type: "spring", stiffness: 400, damping: 30 },
  bouncy: { type: "spring", stiffness: 400, damping: 10 },
  stagger: (delay = 0, staggerChildren = STAGGER.standard) => ({ staggerChildren, delayChildren: delay, ease: ANIMATION.easings.easeOut })
};

// Direction Variants

export type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

const getOffsetValue = (direction: Direction): { x?: number; y?: number; scale?: number } => {
  switch (direction) {
    case "up":
      return { y: 50 };
    case "down":
      return { y: -50 };
    case "left":
      return { x: 50 };
    case "right":
      return { x: -50 };
    case "scale":
      return { scale: 0.95 };
    default:
      return {};
  }
};

export const createFadeInVariant = (direction: Direction = "up", duration = ANIMATION.durations.medium): Variants => {
  const offset = getOffsetValue(direction);
  return {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      ...Object.fromEntries(Object.keys(offset).map(key => [key, 0])),
      transition: { duration, ease: ANIMATION.easings.easeOut }
    }
  };
};

// Standard Animation Variants

export const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] } }
  },
  fadeUp: createFadeInVariant("up"),
  fadeDown: createFadeInVariant("down"),
  fadeLeft: createFadeInVariant("left"),
  fadeRight: createFadeInVariant("right"),
  fadeScale: createFadeInVariant("scale"),
  hover: {
    scale: 1.05,
    transition: transitions.hover
  },
  tap: {
    scale: 0.98,
    transition: transitions.tap
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: transitions.stagger()
    }
  },
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.standard
    }
  },
  cardHover: {
    rest: { scale: 1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", transition: transitions.hover },
    hover: { scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", transition: { duration: ANIMATION.durations.fast, ease: ANIMATION.easings.smooth } }
  },
  buttonHover: {
    rest: { scale: 1, transition: transitions.hover },
    hover: { scale: 1.05, transition: transitions.hover },
    tap: { scale: 0.98, transition: transitions.tap }
  }
};

// Animation Utils

export const getScrollRevealProps = (
  direction: Direction = "up",
  delay = 0,
  once = true,
  threshold = ANIMATION.thresholds.standard
) => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once, amount: threshold },
  variants: createFadeInVariant(direction),
  transition: { duration: ANIMATION.durations.medium, delay, ease: ANIMATION.easings.easeOut }
});

export const getStaggerContainerProps = (
  once = true,
  threshold = ANIMATION.thresholds.standard
) => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once, amount: threshold },
  variants: variants.staggerContainer
});

export const getHoverProps = (scale = 1.05) => ({
  whileHover: { scale, transition: transitions.hover },
  whileTap: { scale: 0.98, transition: transitions.tap }
});

// Utility to easily apply hardware acceleration
export const withGPU = (animation: TargetAndTransition): TargetAndTransition => ({
  ...animation,
  willChange: "transform",
  transformStyle: "preserve-3d"
});
