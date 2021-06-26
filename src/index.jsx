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
        <AirtableProvider>
          <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={3}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                              }} TransitionComponent={Collapse}>
              <StyledThemeProvider theme={theme}>
                <CssBaseline />
                <App />
              </StyledThemeProvider>
            </SnackbarProvider>
          </ThemeProvider>
        </AirtableProvider>
      </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);

reportWebVitals();
