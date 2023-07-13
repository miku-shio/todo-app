import { ThemeProvider, createTheme } from '@mui/material';
import { Todo } from './components/pages/Todo';
import { cyan } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[700],
    }
  },
  breakpoints: {
    values: {
      xs:0,
      sm: 414,
      md: 768,
      lg: 1200,
      xl:1536
    }
  },
  typography: {
    "fontFamily": "\"Zen Maru Gothic\", \"sans-serif\"",
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Todo />
      </main>
    </ThemeProvider>

  )
}

export default App;
