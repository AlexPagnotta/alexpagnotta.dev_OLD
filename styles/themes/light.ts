import shiki from '../shiki';

const themeLight = {
  '.theme-light': {
    '--colors-body': 'hsl(var(--colors-white))',
    '--colors-text-primary': 'hsl(var(--colors-black))',
    '--colors-text-secondary': 'hsl(var(--colors-grey))',
    '--colors-foreground': 'hsl(var(--colors-grey-lightest))',
    '--colors-content-item-bg-hover': 'hsl(var(--colors-grey-light))',

    '--colors-selection-bg': 'hsl(var(--colors-pink))',
    '--colors-selection-content': 'hsl(var(--colors-white))',

    '--colors-focus-ring': 'hsl(var(--colors-pink))',

    '--colors-link': 'hsl(var(--colors-pink))',
    '--colors-link-header-hover': 'var(--gradient-pink)',

    '--colors-logo': 'var(--gradient-pink)',

    '--colors-button-primary-content': 'hsl(var(--colors-white))',
    '--colors-button-primary-bg': 'hsl(var(--colors-black))',
    '--colors-button-primary-content-hover': 'hsl(var(--colors-pink-dark))',
    '--colors-button-primary-bg-hover': 'hsl(var(--colors-pink-light))',
    '--colors-button-secondary-content': 'hsl(var(--colors-black))',
    '--colors-button-secondary-bg': 'hsl(var(--colors-white))',
    '--colors-button-secondary-content-hover': 'hsl(var(--colors-pink-dark))',
    '--colors-button-secondary-bg-hover': 'hsl(var(--colors-pink-light))',

    '--colors-chip-bg': 'hsl(var(--colors-grey-light))',

    '--colors-switch-bg': 'hsl(var(--colors-grey-dark))',
    '--colors-switch-bg-checked': 'hsl(var(--colors-pink))',
    '--colors-switch-content': 'hsl(var(--colors-white))',

    '--colors-code-block-bg': 'hsl(var(--colors-white))',
    '--colors-code-block-highlight': 'hsl(var(--colors-grey-light))',
    '--colors-code-block-error-text': 'hsl(var(--colors-pink-dark))',
    '--colors-code-block-error-bg': 'hsl(var(--colors-pink-light))',
    '--colors-code-block-syntax-plain': 'hsl(var(--colors-black))',
    '--colors-code-block-syntax-comment': 'hsl(var(--colors-grey))',
    '--colors-code-block-syntax-keyword': 'hsl(var(--colors-pink))',
    '--colors-code-block-syntax-tag': 'hsl(var(--colors-pink-dark))',
    '--colors-code-block-syntax-punctuation': 'hsl(var(--colors-black))',
    '--colors-code-block-syntax-definition': 'hsl(var(--colors-pink))',
    '--colors-code-block-syntax-property': 'hsl(var(--colors-pink))',
    '--colors-code-block-syntax-static': 'hsl(var(--colors-pink-dark))',
    '--colors-code-block-syntax-string': 'hsl(var(--colors-pink-dark))',

    ...shiki,
  },
};

export default themeLight;
