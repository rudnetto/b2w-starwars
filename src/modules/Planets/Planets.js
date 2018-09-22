// @flow
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Components from './Components';

import { Planet } from './Models';

type State = {
  planet: Planet;
}

class Planets extends Component<State> {
  constructor() {
    super();
  }

  render() {
    return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Star Wars Trivia Helper
          </Typography>
        </Toolbar>
      </AppBar>

      <Components.MainContainer>
        <Components.ContentContainer>
          <Components.Card raised>
            <CardHeader title="Planet name" />
            <CardContent>
              <Typography color="inherit">
                Content
              </Typography>
            </CardContent>
          </Components.Card>
        </Components.ContentContainer>
        <Components.ContentContainer>
          <Button variant="contained" color="primary" size="large">Next Planet</Button>
        </Components.ContentContainer>
      </Components.MainContainer>
    </div>
  )};
};

export default Planets;
