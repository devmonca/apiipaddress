import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global.styles";
import { theme } from "./styles/theme";
import { Home } from "./pages/Home";


export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Home/>
    </ThemeProvider>
  )
}


