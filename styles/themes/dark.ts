import shiki from '../shiki';

const themeDark = {
  '.theme-dark': {
    '--colors-body': 'hsl(var(--colors-black))',
    '--colors-text-primary': 'hsl(var(--colors-white))',
    '--colors-text-secondary': 'hsl(var(--colors-grey))',
    '--colors-foreground': 'hsl(var(--colors-grey-darkest))',
    '--colors-content-item-bg-hover': 'hsl(var(--colors-grey-dark))',

    '--colors-selection-bg': 'hsl(var(--colors-yellow))',
    '--colors-selection-content': 'hsl(var(--colors-black))',

    '--colors-focus-ring': 'hsl(var(--colors-yellow))',

    '--colors-link': 'hsl(var(--colors-yellow))',
    '--colors-link-header-hover': 'var(--gradient-yellow)',

    '--colors-logo': 'var(--gradient-yellow)',

    '--colors-button-primary-content': 'hsl(var(--colors-black))',
    '--colors-button-primary-bg': 'hsl(var(--colors-white))',
    '--colors-button-primary-content-hover': 'hsl(var(--colors-yellow-dark))',
    '--colors-button-primary-bg-hover': 'hsl(var(--colors-yellow-light))',
    '--colors-button-secondary-content': 'hsl(var(--colors-white))',
    '--colors-button-secondary-bg': 'hsl(var(--colors-black))',
    '--colors-button-secondary-content-hover': 'hsl(var(--colors-yellow-dark))',
    '--colors-button-secondary-bg-hover': 'hsl(var(--colors-yellow-light))',

    '--colors-chip-bg': 'hsl(var(--colors-grey-dark))',

    '--colors-switch-bg': 'hsl(var(--colors-grey-light))',
    '--colors-switch-bg-checked': 'hsl(var(--colors-yellow))',
    '--colors-switch-content': 'hsl(var(--colors-grey-dark))',

    '--colors-code-block-bg': 'hsl(var(--colors-black))',
    '--colors-code-block-highlight': 'hsl(var(--colors-grey-dark))',
    '--colors-code-block-error-text': 'hsl(var(--colors-pink-dark))',
    '--colors-code-block-error-bg': 'hsl(var(--colors-pink-light))',
    '--colors-code-block-syntax-plain': 'hsl(var(--colors-white))',
    '--colors-code-block-syntax-comment': 'hsl(var(--colors-grey))',
    '--colors-code-block-syntax-keyword': 'hsl(var(--colors-yellow))',
    '--colors-code-block-syntax-tag': 'hsl(var(--colors-yellow-dark))',
    '--colors-code-block-syntax-punctuation': 'hsl(var(--colors-white))',
    '--colors-code-block-syntax-definition': 'hsl(var(--colors-yellow))',
    '--colors-code-block-syntax-property': 'hsl(var(--colors-yellow))',
    '--colors-code-block-syntax-static': 'hsl(var(--colors-yellow-dark))',
    '--colors-code-block-syntax-string': 'hsl(var(--colors-yellow-dark))',

    ...shiki,
  },
};

export default themeDark;
