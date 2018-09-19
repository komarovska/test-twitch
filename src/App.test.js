import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/index';

it('renders without crashing', () => {
  const div = this.document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
