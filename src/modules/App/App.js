import React from 'react';
import { injectGlobal } from 'styled-components';

// eslint-disable-next-line
injectGlobal`
  body {
    background-color: "white";
    margin: 0;
  }
`;

const App = () => (
  <span>Main component!</span>
);

export default App;
