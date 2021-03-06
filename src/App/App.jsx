import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
  Container,
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core';
import Form from '../Question/Form';

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
    fontSize: 16,
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'capitalize'
      }
    }
  }
});

const styles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
});

const App = () => {
  const classes = styles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xlg" className={classes.container}>
        <Header />
        <Form />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
