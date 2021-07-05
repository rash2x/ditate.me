import React from 'react';
import ReactDOM from 'react-dom';
import DateFnsUtils from '@date-io/date-fns';
import { BrowserRouter } from 'react-router-dom';

import { Collapse, CssBaseline, ThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import AirtableProvider from './App/airtable/provider';
import theme from './theme';

import App from './App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AirtableProvider>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            TransitionComponent={Collapse}
          >
            <StyledThemeProvider theme={theme}>
              <CssBaseline />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <App />
              </MuiPickersUtilsProvider>
            </StyledThemeProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </AirtableProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);

reportWebVitals();
