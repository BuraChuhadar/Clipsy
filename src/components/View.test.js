import React from 'react';
import ReactDOM from 'react-dom';
import View from './View';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<View width="10%"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});