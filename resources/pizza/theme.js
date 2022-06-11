import { createTheme } from "@mui/material";

export const colors = {
  white: {
    main: "rgb(234,234,234)",
  },
  promoCode: {
    button: "rgb(106, 106, 118)",
    main: "rgba(62, 72, 89, 0.5)",
    contrastText: "rgb(255,255,255)",
  },
  domino: {
    main: "rgb(227, 24, 54)",
    contrastText: "rgb(255,255,255)",
  },
};

const theme = createTheme({
  palette: {
    domino: {
      main: "rgb(227, 24, 54)",
    },
    white: {
      main: colors.white.main,
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
    MuiTextField: {
      styleOverrides: {
        root: (props) => {
          const styles = {
            "& .MuiOutlinedInput-input": {
              textTransform: "capitalize",
              padding: "14px 16px",
            },
          };

          if (props.color === "white") {
            styles.color = colors.white.main;

            styles["& label.Mui-focused"] = {
              color: colors.white.main,
            };

            styles["& .MuiInputLabel-root"] = {
              color: colors.white.main,
            };

            if (props.variant === "outlined") {
              styles["&&& fieldset"] = {
                "borderColor": colors.white.main,
                ":hover": {
                  borderColor: colors.white.main,
                },
              };

              styles["& .MuiOutlinedInput-input"] = {
                ...styles["& .MuiOutlinedInput-input"],
                color: colors.white.main,
              };
            }
          }

          return styles;
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: (props) => {
          const styles = {
            "display": "flex",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiSelect-select": {
              display: "flex",
            },
          };

          if (props.color === "white") {
            styles["& .MuiSvgIcon-root"] = {
              color: colors.white.main,
            };

            styles.color = colors.white.main;
          }

          return styles;
        },
        outlined: {
          border: "none",
        },
        select: () => {
          const styles = {
            textTransform: "capitalize",
            padding: "2px 8px",
          };

          return styles;
        },
      },
    },
  },
});

export default theme;
