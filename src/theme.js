import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFF59D',
      light: '#FFF9C4',
    },
    secondary: {
      main: '#3E3D31'
    },
    type: 'dark',
    background: {
      default: '#191A1C',
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 600,
    fontSize: 13,

    h1: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: 1.54
    },

    button: {
      fontSize: 16,
    },
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiContainer: {
      root: {
        paddingLeft: 24,
        paddingRight: 20
      }
    },
    MuiButton: {
      root: {
        textTransform: 'capitalize',
        fontSize: 16,
        fontWeight: 700,
      },
      containedSizeLarge: {
        fontSize: 18
      }
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: '#FFF9C4'
      }
    }
  }
});
