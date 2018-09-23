// @flow
import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Components from './Styled';

type Props = {
  title?: string;
  message?: string;
}

const ErrorCard = (props: Props) => (
  <Components.Card raised>
    <CardHeader title={props.title} />
    <CardContent>
      <Typography color="inherit" variant="subheading">
        {props.message}
      </Typography>
    </CardContent>
  </Components.Card>
);

ErrorCard.defaultProps = {
  title: 'Error',
  message: 'There was an unexpected error. Please, try again.',
};

export default ErrorCard;
