import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
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

    subtitle1: {
      fontWeight: 700,
    },

    subtitle2: {
      fontWeight: 700,
      lineHeight: 1.45,
    },

    subtitle3: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 24,
    },

    button: {
      fontSize: 16,
    },
  },
  shape: {
    borderRadius: 8,
    borderRadiusSmall: 4,
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
        borderColor: '#2f3237',
        '&:hover': {
          borderColor: '#2f3237',
        },
      },
      root: {
        '&:hover .MuiOutlinedInput-notchedOutline ': {
          borderColor: '#2f3237',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#2f3237',
        },
      },
      input: {
        '&:-webkit-autofill': {
          caretColor: '#000',
          '-webkitBoxShadow': '0 0 0 100px #FFF59D inset',
          '-webkitTextFillColor': '#000',
        },
      },
    },

    MuiFormHelperText: {
      root: {
        '&:not(.Mui-error)': {
          color: 'inherit',
        },
      },
    },
    MuiFormLabel: {
      root: {
        '&:not(.Mui-error)': {
          color: 'inherit',
        },
      },
    },
    MuiInputBase: {
      root: {
        color: '#000',
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
      root: {
        '&:hover': {
          borderColor: '#2f3237',
        },
      },
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
    MuiDialog: {
      paper: {
        margin: 8,
      },
    },
  },
});

export default theme;
