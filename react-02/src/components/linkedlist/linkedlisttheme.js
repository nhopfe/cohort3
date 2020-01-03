import React from 'react';

export const themes = {
    default: {
        background: '#282c34',
        color: 'white',
    },
    dark: {
        background: 'black',
        color: '#61DAFB',
    }
};

export const LinkedListTheme = React.createContext(themes.default);