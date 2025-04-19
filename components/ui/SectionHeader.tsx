import { MotionWrapper } from "@/components/animations/MotionWrapper";
import { Direction } from "@/lib/animations";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
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

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = "",
  // Animation props
  animate = false,
  reveal = true, // Default to reveal animation for section headers
  direction = "up",
  delay = 0.1, // Small default delay for headers
  duration,
  threshold = 0.1,
  once = true,
  useGPU = true
}: SectionHeaderProps) {
  // Content to be rendered
  const content = (
    <div className={`max-w-3xl mx-auto mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-4xl font-bold tracking-tight text-gray-800 mb-4">{title}</h2>
      <div className={`w-20 h-1 bg-radaro-red ${centered ? "mx-auto" : ""} mb-6`} />
      {subtitle && (
        <p className="text-lg text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
  
  // If animation is enabled, wrap with MotionWrapper
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
      >
        {content}
      </MotionWrapper>
    );
  }
  
  // Otherwise return the content without animation
  return content;
}