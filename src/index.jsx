import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { Collapse, CssBaseline, ThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from './theme';

import App from './App/App';
import { AirtableProvider } from './App/airtable/provider';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }} TransitionComponent={Collapse}>
        <AirtableProvider>
          <ThemeProvider theme={theme}>
            <StyledThemeProvider theme={theme}>
              <CssBaseline />
              <App />
            </StyledThemeProvider>
          </ThemeProvider>
        </AirtableProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);

reportWebVitals();
