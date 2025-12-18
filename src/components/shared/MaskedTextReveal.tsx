import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fluidRevealTransition } from '@/lib/animation';

interface MaskedTextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MaskedTextReveal({ children, className = '', delay = 0 }: MaskedTextRevealProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          ...fluidRevealTransition,
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
