import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    domino: {
      main: "rgb(227, 24, 54)",
    },
    white: {
      main: "rgb(234,234,234)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          padding: "2px 8px",
        },
      },
    },
  },
});

export default theme;
