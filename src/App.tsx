import { Router } from "./router/Router";
import { GlobalStyles } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";
import { GlobalStateContext } from "./contexts/GlobalStateContext";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

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
