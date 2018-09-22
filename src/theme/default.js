import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import teal from '@material-ui/core/colors/teal';

const muiTheme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: teal,
  },
});

const defaultTheme = {
  bgColor: '#151515',
};

export default {
  defaultTheme,
  muiTheme,
};
