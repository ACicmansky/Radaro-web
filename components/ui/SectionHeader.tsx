import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  centered = true,
  className = ""
}: SectionHeaderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
      x: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
      className={className}
    >
      <div className={`max-w-3xl mx-auto mb-12 ${centered ? "text-center" : ""}`}>
        <h2 className="text-4xl font-bold tracking-tight text-gray-800 mb-4">{title}</h2>
        <div className={`w-20 h-1 bg-radaro-red ${centered ? "mx-auto" : ""} mb-6`} />
        {subtitle && (
          <p className="text-lg text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}