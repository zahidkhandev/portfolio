import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./_app.css";
import { GlobalStyles, lightTheme, darkTheme } from "../utils/ThemeConfig";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme == "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      {/* <button onClick={toggleTheme}>Switch Theme</button> */}
      <Component
        {...pageProps}
        theme={theme}
        setTheme={setTheme}
        toggleTheme={toggleTheme}
      />
    </ThemeProvider>
  );
}
export default MyApp;
