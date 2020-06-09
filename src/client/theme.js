import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "rgba(152, 184, 182, 1)",
      main: "rgba(153, 184, 152, 1)",
      dark: "rgba(92, 110, 91, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(253, 220, 195, 1)",
      main: "rgba(252, 180, 127, 1)",
      dark: "rgba(187, 151, 125, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "rgba(247, 173, 168, 1)",
      main: "rgba(251, 88, 78, 1)",
      dark: "rgba(184, 96, 90, 1)",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});

export default theme;
