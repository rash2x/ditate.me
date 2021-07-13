import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import DayjsUtils from '@date-io/dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import isoWeek from 'dayjs/plugin/isoWeek';

import { Collapse, CssBaseline, ThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import AirtableProvider from './App/airtable/provider';
import theme from './theme';

import App from './App/App';
import reportWebVitals from './reportWebVitals';

dayjs.locale('ru');
dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.extend(isoWeek);

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
              <MuiPickersUtilsProvider utils={DayjsUtils}>
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
