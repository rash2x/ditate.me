import React from 'react';
import Header from '../Header/Header';
import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Form from '../Question/Form';
const theme = createMuiTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xlg">
        <Header />
        <Form />
      </Container>
    </ThemeProvider>
  );
};

export default App;
