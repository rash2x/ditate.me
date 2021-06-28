import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFF59D',
      light: '#FFF9C4',
    },
    secondary: {
      main: '#3E3D31',
    },
    type: 'dark',
    background: {
      default: '#191A1C',
      paper: '#2f3237',
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: '"Nunito", sans-serif',
    fontSize: 14,

    h1: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.54,
    },

    h2: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.54,
    },

    h3: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.54,
    },

    subtitle2: {
      fontWeight: 700,
    },

    button: {
      fontSize: 16,
    },
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        fontSize: 16,
        fontWeight: 700,
      },
      containedSizeLarge: {
        fontSize: 18,
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: '#FFF9C4',
      },
    },
    MuiAutocomplete: {
      popupIndicator: {
        color: '#2f3237',
      },
      clearIndicator: {
        color: '#2f3237',
      },
    },
    MuiInput: {
      root: {
        color: 'rgba(0, 0, 0, 0.54)',
      },
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: '8px',
      },
    },
    MuiCssBaseline: {
      '@global': {
        html: {
          fontSize: 10,
        },
      },
    },
  },
});
