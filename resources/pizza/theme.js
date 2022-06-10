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
    MuiSelect: {
      styleOverrides: {
        root: {
          "display": "flex",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiSelect-select": {
            display: "flex",
          },
        },
        icon: {
          color: "rgb(234,234,234)",
        },
        outlined: {
          border: "none",
        },
        select: (props) => {
          const styles = {
            textTransform: "capitalize",
            padding: "2px 8px",
            color: "rgb(234,234,234)",
          };

          if (props.color === "white") {
            styles.color = "rgb(234,234,234)";
          }

          return styles;
        },
      },
    },
  },
});

export default theme;
