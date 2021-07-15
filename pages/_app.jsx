import React from 'react';
import { SnackbarProvider } from 'notistack';
import { Collapse, CssBaseline, ThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Airtable from 'airtable';
import AirtableProvider from '../src/App/airtable/provider';
import theme from '../src/theme';

export const airtableBase = new Airtable({
  apiKey: 'keyEXP4qnVysxeAWt',
}).base('appAB6mLnImrAFBWa');

const MyApp = ({ Component, pageProps }) => (
  <React.StrictMode>
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
              <Component {...pageProps} />
            </MuiPickersUtilsProvider>
          </StyledThemeProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </AirtableProvider>
  </React.StrictMode>
);

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
