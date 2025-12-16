import { motion } from 'framer-motion';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export const GradientText = ({ children, className = '', animate = true }: GradientTextProps) => {
  return (
    <motion.span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${className}`}
      animate={animate ? {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      } : {}}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        backgroundSize: '200% 200%',
      }}
    >
      {children}
    </motion.span>
  );
};
