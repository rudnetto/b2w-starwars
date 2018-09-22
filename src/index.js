import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App';

const appElement = document.getElementById('app');
if (!appElement) {
  throw new Error('App Element not Found!');
}

ReactDOM.render(<App />, appElement);
