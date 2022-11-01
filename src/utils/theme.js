import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#6DC4E9",
      main: "#115479",
      darker: "#1A7EB6",
      contrastText: '#fff',
    },
    secondary: {
      light: "#EBC7C7",
      main: "#E1ACAC",
      dark: "#967272",
      contrastText: "#fff",
    },
    custom: {
      light: "#8595C6",
      main: "#4860AA",
      dark: "#304071",
      contrastText: '#fff',
    },
    neutral: {
      main: "#ffffff",
      contrastText: "#000000",
    },
  },
});
