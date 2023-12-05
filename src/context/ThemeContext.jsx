import { createContext, useState } from "react";

export const ThemeContext = createContext()

// eslint-disable-next-line react/prop-types
export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light")

    let handleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>{children}</ThemeContext.Provider>
    )
}
