import {
  SandpackProvider,
  SandpackFiles,
  SandpackPredefinedTemplate,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackTheme,
  DeepPartial,
} from '@codesandbox/sandpack-react';
import tw, { styled, theme } from 'twin.macro';

export type Props = {
  template: SandpackPredefinedTemplate;
  files: SandpackFiles;
};

const customTheme: DeepPartial<SandpackTheme> = {
  colors: {
    surface1: 'var(--colors-code-block-bg)',
    surface2: 'var(--colors-code-block-bg)',
    surface3: 'var(--colors-code-block-highlight)',
    clickable: 'var(--colors-text-secondary)',
    hover: 'var(--colors-link)',
    accent: 'var(--colors-link)',
    error: 'var(--colors-code-block-error-text)',
    errorSurface: 'var(--colors-code-block-error-bg)',
  },
  syntax: {
    plain: 'var(--colors-code-block-syntax-plain)',
    comment: {
      color: 'var(--colors-code-block-syntax-comment)',
      fontStyle: 'italic',
    },
    keyword: 'var(--colors-code-block-syntax-keyword)',
    tag: 'var(--colors-code-block-syntax-tag)',
    punctuation: 'var(--colors-code-block-syntax-punctuation)',
    definition: 'var(--colors-code-block-syntax-definition)',
    property: 'var(--colors-code-block-syntax-property)',
    static: 'var(--colors-code-block-syntax-static)',
    string: 'var(--colors-code-block-syntax-string)',
  },
  font: {
    body: theme`fontFamily.sans`,
    mono: theme`fontFamily.mono`,
    size: theme`fontSize.body-1[0]`,
    lineHeight: theme`fontSize.body-1[1].lineHeight`,
  },
};

const StyledLayout = styled('div', {
  ...tw`block`,
  '.theme-light &': { colorScheme: 'light' },
  '.theme-dark &': { colorScheme: 'dark' },
  '.sp-stack': tw`h-352`,
  '.sp-tabs': tw`border-0`,
  '.sp-tab-button': tw`h-60`,
  '.cm-content': tw`focus:ring-0`,
  '.sp-code-editor': {
    '::selection': {
      ...tw`bg-theme-colors-code-block-selection-bg text-theme-colors-code-block-selection-text`,
    },
  },
});

const LiveCodeBlock = ({ template, files }: Props) => {
  return (
    <SandpackProvider
      template={template}
      files={files}
      theme={customTheme}
      options={{
        classes: {
          'sp-wrapper': 'live-code-block-wrapper',
        },
      }}
    >
      <StyledLayout>
        <SandpackCodeEditor />
        <SandpackPreview />
      </StyledLayout>
    </SandpackProvider>
  );
};

export default LiveCodeBlock;
