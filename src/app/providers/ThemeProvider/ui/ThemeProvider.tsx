import React from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'shared/lib';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT;

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = React.useState<Theme>(defaultTheme);

    const themeProps = React.useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={themeProps}>
            {children}
        </ThemeContext.Provider>
    );
};