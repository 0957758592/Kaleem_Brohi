import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider, StylesProvider, jssPreset } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
/* eslint-disable-next-line */
import { create } from 'jss';
import { ThemeProvider } from 'styled-components/macro';
import { Provider, inject, observer } from 'mobx-react';
import { compose, withProps } from 'recompose';

import Main from '@/layouts';
import Stores, { STORE_KEYS } from '@/stores';
import theme from '@/theme/darkTheme';
import createGlobalStyles from './globalStyles';

const jss = create({
    ...jssPreset(),
    // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
    insertionPoint: 'jss-insertion-point'
});

const muiTheme = theme =>
    createMuiTheme({
        palette: {
            type: theme.muiTheme
        },
        appTheme: theme
    });

const GlobalStyles = createGlobalStyles();

class ThemedAppComponent extends React.Component {
    render() {
        return (
            <Main />
        );
    }
}

const ThemedApp = compose(
    inject(STORE_KEYS.VIEWMODESTORE),
    observer,
    withProps(({ [STORE_KEYS.VIEWMODESTORE]: { viewMode } }) => ({
        viewMode
    }))
)(ThemedAppComponent);

const App = () => (
    <Provider {...Stores()}>
        <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                <MuiThemeProvider theme={muiTheme(theme)}>
                    <GlobalStyles />
                    <CssBaseline />
                    <ThemedApp />
                </MuiThemeProvider>
            </ThemeProvider>
        </StylesProvider>
    </Provider>
);

export default App;
