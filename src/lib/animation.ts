import { Transition } from 'framer-motion';

export const gpuAcceleration = {
  transform: 'translateZ(0)',
  willChange: 'transform',
  backfaceVisibility: 'hidden',
} as const;

export const withGPU = (style?: React.CSSProperties) => ({
  ...gpuAcceleration,
  ...style,
});

export const fluidRevealTransition: Transition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
};

export const staggeredRevealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const revealViewport = {
  once: true,
  amount: 0.2 as const,
};

export function getStaggerDelay(index: number, baseDelay = 0.1): number {
  return index * baseDelay;
}
