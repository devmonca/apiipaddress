import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global.styles";
import { theme } from "./styles/theme";
import { Home } from "./pages/Home";
import { LocationProvider } from "./context/LocationContext";

export function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <LocationProvider>
        <GlobalStyles/>
        <Home/>
      </LocationProvider>
    </ThemeProvider>
  )
}


