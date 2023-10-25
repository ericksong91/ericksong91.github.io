import React from 'react';
import { useEffect, useState } from 'react'

const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
    const body = document.querySelector("body");
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";

    console.log(colorTheme, "colorTheme");
    console.log(theme, "theme");

    useEffect(() => {
        body.classList.remove(colorTheme);
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    console.log(localStorage.theme);

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };