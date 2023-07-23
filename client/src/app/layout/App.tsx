import Catalog from "../../features/catalog/Catalog";
import { Container, CssBaseline } from "@mui/material";
import Header from "./Header";

function App() {
  return (
    <>
      {/* Normalizing browser inconsistencies and achieving consistent styling across different browsers. */}
      <CssBaseline />
      <Header />
      <Container>
        {/* 
      Catalog component receives the required properties through the Props interface,
      ensuring that all necessary parameters are passed.
      */}
        <Catalog />
      </Container>
    </>
  );
}

export default App;
