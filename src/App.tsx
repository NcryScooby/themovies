import { Router } from "./router/Router";
import { GlobalStyles } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";
import { GlobalStateContext } from "./contexts/GlobalStateContext";
import { useEffect, useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <GlobalStateContext.Provider
        value={{
          theme,
          setTheme,
        }}
      >
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </GlobalStateContext.Provider>
    </>
  );
};

export default App;
