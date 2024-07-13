import React, { createContext } from 'react';

export enum Theme {
    LIGHT = 'app-light-theme',
    DARK = 'app-dark-theme',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
