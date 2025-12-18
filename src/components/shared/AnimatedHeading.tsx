import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function AnimatedHeading({
  children,
  className = '',
  as = 'h2'
}: AnimatedHeadingProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ fontWeight: 600 }}
      whileInView={{ fontWeight: 800 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      {children}
    </Component>
  );
}
