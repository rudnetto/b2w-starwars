import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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

      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Star Wars Trivia Helper
          </Typography>
        </Toolbar>
      </AppBar>

      <BrowserRouter basename="/b2w-starwars">
        <Switch>
          <Route path="/planets" component={Planets} />
          <Redirect to="/planets" />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </ThemeProvider>
);

export default App;
