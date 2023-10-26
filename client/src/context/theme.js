import React from 'react';
import { useEffect, useState } from 'react'

const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.theme);
    const body = document.querySelector("body");

    useEffect(() => {
        theme === 'dark' ? body.classList.add('dark') : body.classList.remove('dark')
        localStorage.setItem('theme', theme);
    }, [theme, body]);

    function darkToggle() {
        theme === 'dark' ? setTheme("light") : setTheme("dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, darkToggle }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };