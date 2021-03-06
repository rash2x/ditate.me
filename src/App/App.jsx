import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container, createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import Success from '../Question/Success';
const theme = createMuiTheme();

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
}));
const App = () => {
  const classes = styles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xlg" className={classes.container}>
        <Header />
        {/* <Form /> */}
        <Success />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
