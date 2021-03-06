import React from 'react';
import Header from '../Header/Header';
import Form from '../Question/Form';
import Footer from '../Footer/Footer';
import {
  Container,
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core';
import Success from '../Question/Success';

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
        {/* <Success /> */}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
