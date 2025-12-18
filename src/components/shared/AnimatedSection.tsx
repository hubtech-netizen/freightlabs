import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fluidRevealTransition, staggeredRevealVariants, revealViewport } from '@/lib/animation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      className={`content-visibility-auto ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={staggeredRevealVariants}
      transition={{
        ...fluidRevealTransition,
        delay,
      }}
    >
      {children}
    </motion.section>
  );
}
