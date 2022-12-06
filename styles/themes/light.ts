const themeLight = {
  '.theme-light': {
    '--colors-body': 'hsl(var(--colors-white))',
    '--colors-text-primary': 'hsl(var(--colors-black))',
    '--colors-text-secondary': 'hsla(var(--colors-black), 60%)',
    '--colors-section-bg': 'hsl(var(--colors-grey-lightest))',
    '--colors-section-bg-hover': 'hsl(var(--colors-grey-light))',

    '--colors-selection-bg': 'hsl(var(--colors-pink))',
    '--colors-selection-content': 'hsl(var(--colors-white))',

    '--colors-focus-ring': 'hsl(var(--colors-pink))',

    '--colors-link': 'hsl(var(--colors-pink))',
    '--colors-link-header-hover': 'var(--gradient-pink)',

    '--colors-logo': 'var(--gradient-pink)',

    '--colors-button-primary-content': 'hsl(var(--colors-white))',
    '--colors-button-primary-bg': 'hsl(var(--colors-black))',
    '--colors-button-primary-bg-hover': 'var(--gradient-grey-dark)',
    '--colors-button-secondary-content': 'hsl(var(--colors-black))',
    '--colors-button-secondary-bg': 'hsl(var(--colors-white))',
    '--colors-button-secondary-bg-hover': 'var(--gradient-grey)',

    '--colors-chip-bg': 'hsl(var(--colors-grey-light))',

    '--colors-code-block-bg': 'hsl(var(--colors-white))',

    // Code block theme
    '--shiki-color-text': 'hsl(var(--colors-black))',
    // '--shiki-color-background': 'hsl(var(--colors-black))',
    '--shiki-token-constant': 'hsl(var(--colors-black))',
    '--shiki-token-string': 'hsl(var(--colors-black))',
    '--shiki-token-comment': 'hsl(var(--colors-black))',
    '--shiki-token-keyword': '#hsl(var(--colors-black))',
    '--shiki-token-parameter': 'hsl(var(--colors-black))',
    '--shiki-token-function': 'hsl(var(--colors-black))',
    '--shiki-token-string-expression': 'hsl(var(--colors-black))',
    '--shiki-token-punctuation': 'hsl(var(--colors-black))',
    ' --shiki-token-link': 'hsl(var(--colors-black))',
  },
};

export default themeLight;
