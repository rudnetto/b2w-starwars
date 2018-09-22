import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { injectGlobal, ThemeProvider } from 'styled-components';

import theme from '../../theme';

import Planets from '../Planets';

// eslint-disable-next-line
injectGlobal`
  body {
    background-color: ${theme.defaultTheme.bgColor};
    margin: 0;
  }
`;

const App = () => (
  <ThemeProvider theme={theme.defaultTheme}>
    <MuiThemeProvider theme={theme.muiTheme}>
      <BrowserRouter>
        <Switch>
          <Route path="/planets" component={Planets} />
          <Redirect to="/planets" />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </ThemeProvider>
);

export default App;
