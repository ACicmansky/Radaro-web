import { MotionWrapper } from "@/components/animations/MotionWrapper";
import { Direction } from "@/lib/animations";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: "white" | "light" | "dark";
  spacing?: "default" | "sm" | "lg";
  // Animation props
  animate?: boolean;
  reveal?: boolean;
  direction?: Direction;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  useGPU?: boolean;
}

export function SectionContainer({
  id,
  className = "",
  children,
  background = "white",
  spacing = "default",
  // Animation props
  animate = false,
  reveal = true, // Default to reveal animation for sections
  direction = "up",
  delay = 0,
  duration,
  threshold = 0.1,
  once = true,
  useGPU = true
}: SectionContainerProps) {
  const bgClasses = {
    white: "bg-white",
    light: "bg-gray-50",
    dark: "bg-gray-900 text-white"
  };
  
  const spacingClasses = {
    default: "py-section", // Using our custom 5rem (80px) spacing value
    sm: "py-section-sm",   // Using our custom 2.5rem (40px) spacing value
    lg: "py-section-lg"    // Using our custom 7.5rem (120px) spacing value
  };

  // Combine classes for the section
  const sectionClasses = `${bgClasses[background]} ${spacingClasses[spacing]} ${className}`;
  
  // If animation is enabled, wrap the section with MotionWrapper
  if (animate || reveal) {
    return (
      <MotionWrapper
        animate={animate}
        reveal={reveal}
        direction={direction}
        delay={delay}
        duration={duration}
        threshold={threshold}
        once={once}
        useGPU={useGPU}
        className={sectionClasses}
      >
        <section id={id}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </section>
      </MotionWrapper>
    );
  }
  
  // Otherwise render the standard section without animation
  return (
    <section 
      id={id} 
      className={sectionClasses}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}