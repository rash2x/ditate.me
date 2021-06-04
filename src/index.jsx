import React from 'react';
import ReactDOM from 'react-dom';
import {CssBaseline, ThemeProvider} from '@material-ui/core';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import {theme} from './theme';
import Store from './App/airtable/context';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Store>
                <ThemeProvider theme={theme}>
                    <StyledThemeProvider theme={theme}>
                        <CssBaseline/>
                        <App/>
                    </StyledThemeProvider>
                </ThemeProvider>
            </Store>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
