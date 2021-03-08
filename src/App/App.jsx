import React from 'react';
import {
  Container,
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Question from '../Question/Question';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFF59D',
      light: '#FFF9C4',
    },
    type: 'dark',
    background: {
      default: '#262626',
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 600,
    fontSize: 16,

    h1: {
      fontSize: 32,
    }
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'capitalize'
      }
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: '#FFF9C4'
      }
    }
  }
});

const styles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    // eslint-disable-next-line no-dupe-keys
    height: '100vh',
    // eslint-disable-next-line no-dupe-keys
    maxHeight: '-webkit-fill-available',
},
});

const App = () => {
  const classes = styles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className={classes.container}>
        <Header />
        <Question />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
