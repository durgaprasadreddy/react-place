import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import HomePage from './pages/home';

export const themeData = {
  palette: {
    primary: {
      main: "#F16421",
      shadow:'rgba(241, 100, 33, 0.5)',
      dark: "#f75305",
      light: "#f0814d",
      white: '#ffffff'
    },
    tint: {
      main: "#2F4857",
      light:'rgba(47, 72, 87, 0.5)'
    },
  },
}

const theme = createTheme(themeData);

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
       <HomePage />
    </div>
    </ThemeProvider>
  );
}

export default App;
