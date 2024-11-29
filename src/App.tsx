import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/Global.styles";



export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
    </ThemeProvider>
  )
}


