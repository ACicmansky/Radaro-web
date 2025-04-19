import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { MotionWrapper } from "@/components/animations/MotionWrapper"
import { AnimationProps } from "@/lib/animation-mixins"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    Partial<AnimationProps> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className, 
    variant, 
    size, 
    asChild = false,
    // Animation props 
    animate = false,
    hover = false,
    tap = true, // Enable tap animation by default for buttons
    reveal = false,
    direction = "up",
    delay = 0,
    duration,
    useGPU = true,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Create the base class name
    const baseClassName = cn(
      buttonVariants({ variant, size, className }),
      "transform-gpu will-change-transform"
    )
    
    // If any animation is enabled and it's not an asChild button,
    // wrap the button with MotionWrapper
    if (!asChild && (animate || hover || tap || reveal)) {
      return (
        <MotionWrapper
          animate={animate}
          hover={hover}
          tap={tap}
          direction={direction}
          delay={delay}
          duration={duration}
          className="contents" // Use contents to not affect layout
          useGPU={useGPU}
        >
          <Comp 
            className={baseClassName}
            ref={ref} 
            {...props}
          />
        </MotionWrapper>
      )
    }
    
    // For asChild or non-animated buttons, use regular component
    return (
      <Comp
        className={baseClassName}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
