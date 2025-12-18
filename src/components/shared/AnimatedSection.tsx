import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fluidRevealTransition, staggeredRevealVariants, revealViewport } from '@/lib/animation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export function AnimatedSection({ children, className = '', delay = 0, id }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
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
