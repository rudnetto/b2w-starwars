import React from 'react';
import theme from '../../theme';

// eslint-disable-next-line
injectGlobal`
  body {
    background-color: ${theme.bgColor};
    margin: 0;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <span>Main component!</span>
  </ThemeProvider>
);

export default App;
