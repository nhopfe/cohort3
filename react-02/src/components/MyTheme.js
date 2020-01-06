import React from 'react';

export const themes = {
    default: {
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, #282c34 15%, #09d3ac 100%)',
    },
    dark: {
        background: '#282c34',
    }
};

export const ThemeContext = React.createContext(themes.default);