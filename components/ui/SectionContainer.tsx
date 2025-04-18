interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: "white" | "light" | "dark";
  spacing?: "default" | "sm" | "lg";
}

export function SectionContainer({
  id,
  className = "",
  children,
  background = "white",
  spacing = "default"
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

  return (
    <section 
      id={id} 
      className={`${bgClasses[background]} ${spacingClasses[spacing]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}