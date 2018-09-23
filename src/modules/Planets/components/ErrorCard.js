// @flow
import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Components from './Styled';

const ErrorCard = (props: Props) => {
  return (
    <Components.Card raised>
      <CardHeader title="Error" />
      <CardContent>
        <Typography color="inherit" variant="subheading">
          There was an unexpected error. Please, try again.
        </Typography>
      </CardContent>
    </Components.Card>
  );
}

export default ErrorCard;
