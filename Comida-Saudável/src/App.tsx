import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyles";
import { Home } from "./pages/Home";
import { BestRecipes } from "./pages/BestRecipes";
import { KnowMore } from "./pages/KnowMore";
import { Blog } from "./pages/Blog";
import { JoinUs } from "./pages/JoinUs";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <BestRecipes />
      <KnowMore />
      <Blog />
      <JoinUs />
    </ThemeProvider>
  );
}

export default App;
