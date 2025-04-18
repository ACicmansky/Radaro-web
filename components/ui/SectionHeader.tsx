interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = ""
}: SectionHeaderProps) {
  return (
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
}