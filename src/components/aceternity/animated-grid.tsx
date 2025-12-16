import { motion } from 'framer-motion';

export const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-20">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgb(99, 102, 241) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(99, 102, 241) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};
