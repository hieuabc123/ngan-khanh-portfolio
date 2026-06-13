import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FCFCFD",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0D0B12",
      secondary: "#5D5968",
    },
    primary: {
      main: "#2F0C8E",
      dark: "#220767",
      light: "#ECE7FF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#8D70FF",
      dark: "#6F54DD",
      light: "#F1ECFF",
    },
    success: {
      main: "#0E9F6E",
      light: "#DDF8EA",
    },
    divider: "#E9E5F0",
  },
  typography: {
    fontFamily:
      'var(--font-sans), Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 900,
      lineHeight: 1.04,
      letterSpacing: 0,
    },
    h2: {
      fontWeight: 800,
      lineHeight: 1.12,
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 800,
      lineHeight: 1.18,
      letterSpacing: 0,
    },
    h4: {
      fontWeight: 750,
      letterSpacing: 0,
    },
    h5: {
      fontWeight: 750,
      letterSpacing: 0,
    },
    h6: {
      fontWeight: 750,
      letterSpacing: 0,
    },
    body1: {
      lineHeight: 1.72,
    },
    body2: {
      lineHeight: 1.64,
    },
    button: {
      fontWeight: 800,
      textTransform: "none",
      letterSpacing: 0,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FCFCFD",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 42,
          borderRadius: 8,
          boxShadow: "none",
          transition:
            "transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease, border-color 180ms ease",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 12px 28px rgba(47, 12, 142, 0.18)",
          },
          "&:focus-visible": {
            outline: "3px solid rgba(47, 12, 142, 0.2)",
            outlineOffset: 3,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 750,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: "1px solid #E9E5F0",
          boxShadow: "0 12px 32px rgba(47, 12, 142, 0.06)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "inherit",
          textDecorationColor: "rgba(47, 12, 142, 0.28)",
          textUnderlineOffset: 4,
        },
      },
    },
  },
});
