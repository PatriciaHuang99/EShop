import Catalog from "../../features/catalog/Catalog";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  backdropClasses,
  createTheme,
} from "@mui/material";
import Header from "./Header";
import { dark } from "@mui/material/styles/createPalette";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  // Create a theme provider to customise the theme variable
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: { default: paletteType === "light" ? "#eaeaea" : "#121212" },
    },
  });
  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      {/* Normalizing browser inconsistencies and achieving consistent styling across different browsers. */}
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
