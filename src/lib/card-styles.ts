import { cn } from './utils';

export function getCardClasses(theme: 'light' | 'dark', mobile = true): string {
  const baseClasses = 'rounded-lg p-6 transition-all duration-300 gpu-accelerated';

  if (theme === 'light') {
    return cn(
      baseClasses,
      mobile ? 'card-light-mobile' : 'card-light'
    );
  }

  return cn(
    baseClasses,
    mobile ? 'card-dark-mobile' : 'card-dark'
  );
}

export function getSectionClasses(): string {
  return 'content-visibility-auto';
}
