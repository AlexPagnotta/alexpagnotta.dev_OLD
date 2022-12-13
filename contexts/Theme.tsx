import React, { useContext, useEffect } from 'react';

import { isEnum } from '/utils/common';

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

type ContextState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleMode: () => void;
};

const DefaultTheme = Theme.LIGHT;

export const LocalStorageKey = 'theme';

const ThemeMode = {
  [Theme.LIGHT]: 'light',
  [Theme.DARK]: 'dark',
  // [Theme.RED]: 'dark'
} as const;

const ThemeContext = React.createContext<ContextState | undefined>(undefined);

const prefersDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

const updateThemeClass = (prevTheme: Theme, nextTheme: Theme) => {
  document.body.classList.remove('theme-' + prevTheme);
  document.body.classList.add('theme-' + nextTheme);
  document.documentElement.style.setProperty('color-scheme', ThemeMode[nextTheme]);
};

const updateThemeLocalStorage = (theme: Theme) => {
  window.localStorage.setItem(LocalStorageKey, theme);
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, dispatchTheme] = React.useState(DefaultTheme);

  const setTheme = React.useCallback(
    (value: Theme, updateLocalStorage = true) => {
      dispatchTheme((prevTheme) => {
        updateThemeClass(prevTheme, value);

        if (updateLocalStorage) updateThemeLocalStorage(value);
        return value;
      });
    },
    [dispatchTheme]
  );

  const toggleMode = React.useCallback(() => {
    dispatchTheme((prevTheme) => {
      const nextTheme = prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

      updateThemeClass(prevTheme, nextTheme);
      updateThemeLocalStorage(nextTheme);
      return nextTheme;
    });
  }, [dispatchTheme]);

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem(LocalStorageKey);

    if (localStorageTheme && isEnum(Theme, localStorageTheme)) {
      return setTheme(localStorageTheme);
    }

    if (prefersDarkMode()) setTheme(Theme.DARK, false);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      dispatchTheme((prevTheme) => {
        if (prevTheme !== Theme.LIGHT && prevTheme !== Theme.DARK) return prevTheme;

        const nextTheme = e.matches ? Theme.DARK : Theme.LIGHT;

        updateThemeClass(prevTheme, nextTheme);
        updateThemeLocalStorage(nextTheme);
        return nextTheme;
      });
    });
  }, [setTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme, Theme };
