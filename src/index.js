import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App textProp="whatever" numberProp={5}/>,
  document.getElementById('root')
);
