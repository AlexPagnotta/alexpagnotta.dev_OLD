import { theme as twTheme } from 'twin.macro';

// NOTE: Keep in sync with tailwind breakpoints
type Screen = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const breakpoints = Object.entries(twTheme`screens`).reduce((accumulator, [key, value]) => {
  if (key === 'support-hover') return accumulator;

  return { ...accumulator, [key]: `(min-width: ${value})` };
}, {} as Record<Screen, 'string'>);
