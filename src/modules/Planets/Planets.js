// @flow
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import Components from './components/Styled';
import PlanetCard from './components/PlanetCard';
import ErrorCard from './components/ErrorCard';

import Service from './Service';

class Planets extends Component {
  constructor() {
    super();
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.setState({ fetchingData: false, fetchError: false });
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ fetchingData: true, fetchError: false });

    Service.getRandomPlanet().then((result) => {
      this.setState({ planet: result, fetchingData: false });
    }).catch((err) => {
      console.error(err);
      this.setState({ planet: null, fetchingData: false, fetchError: true });
    });
  }

  render() {
    return (
      <div>
        <Components.MainContainer>
          <Components.ContentContainer>
            {
              this.state && !this.state.fetchingData && !this.state.fetchError &&
              <React.Fragment>
                <PlanetCard planet={this.state.planet} />
                <br />
                <Button variant="contained" color="primary" size="large" onClick={this.fetchData}>Next Planet</Button>
              </React.Fragment>
            }
            {
              this.state && this.state.fetchingData && !this.state.fetchError &&
              <Components.SpinnerIcon color="primary" style={{ fontSize: 64 }}>
                loop
              </Components.SpinnerIcon>
            }
            {
              this.state && !this.state.fetchingData && this.state.fetchError &&
              <React.Fragment>
                <ErrorCard />
                <br />
                <Button variant="contained" color="primary" size="large" onClick={this.fetchData}>Try again</Button>
              </React.Fragment>
            }
          </Components.ContentContainer>
        </Components.MainContainer>
      </div>
    );
  }
}

export default Planets;
