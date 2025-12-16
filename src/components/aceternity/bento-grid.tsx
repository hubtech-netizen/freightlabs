import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className = '' }: BentoGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
      {children}
    </div>
  );
};

export const BentoCard = ({ children, className = '' }: BentoCardProps) => {
  return (
    <motion.div
      className={`relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-6 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
