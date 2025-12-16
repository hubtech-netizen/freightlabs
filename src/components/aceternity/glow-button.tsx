import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const GlowButton = ({ children, onClick, className = '' }: GlowButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-8 py-3 rounded-lg font-medium text-white overflow-hidden group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100">
        <span className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <span className="absolute inset-y-0 -left-px w-px bg-gradient-to-b from-transparent via-white to-transparent" />
        <span className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-white to-transparent" />
      </span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
