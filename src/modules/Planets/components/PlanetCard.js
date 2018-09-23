// @flow
import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Components from './Styled';
import { Planet } from '../Models';

type Props = {
  planet?: Planet;
}

const PlanetCard = (props: Props) => {
  return (
    <Components.Card raised>
      { props.planet && 
        <React.Fragment>
          <CardHeader title={props.planet.name} />
          <CardContent>
            <Typography color="inherit" variant="subheading">
              <b>Population:</b> {props.planet.population}
            </Typography>
            <Typography color="inherit" variant="subheading">
              <b>Climate:</b> {props.planet.climate}
            </Typography>
            <Typography color="inherit" variant="subheading">
            <b>Terrain:</b> {props.planet.terrain}
            </Typography>
            <Typography color="inherit" variant="subheading">
            This planet was featured in <b>{props.planet.filmsFeatured}</b> film(s).
            </Typography>
          </CardContent>
        </React.Fragment>
      }
      {
        !props.planet &&
        <React.Fragment>
          <CardHeader title="Error" />
          <CardContent>
            <Typography color="inherit" variant="subheading">
              Something happened when reaching the server. Please try again.
            </Typography>
          </CardContent>
        </React.Fragment>
      }
    </Components.Card>
  );
}

export default PlanetCard;
