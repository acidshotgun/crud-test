import { createContext, useMemo, useState } from "react";

type ThemeContextType = {
  darkTheme: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({ isDark: false });

// export const ThemeProvider = ({ children }) => {
//   const [isDark, setIsDark] = useState(false);

//   const toggleTheme = () => {
//     setIsDark((isDark) => !isDark);
//   };

//   const value = useMemo(() => ({ isDark, toggleTheme }), [isDark]);

//   return (
//     <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
//   );
// };

// import { createContext, useMemo, useState } from "react";

// type ThemeContextType = {
//   darkTheme: boolean;
//   toggleTheme: () => void;
// };

// export const ThemeContext = createContext({ isDark: false });

// export const ThemeProvider = ({ children }: any) => {
//   const [isDark, setIsDark] = useState(false);

//   const toggleTheme = () => {
//     setIsDark((isDark) => !isDark);
//   };

//   const value = useMemo(() => ({ isDark, toggleTheme }), [isDark]);

//   return (
//     <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
//   );
// };
