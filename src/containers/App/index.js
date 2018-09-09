import React, { Component } from 'react';

import StreamList from '../StreamList/index.js';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-lg-6 col-lg-offset-3'>
        <StreamList />
          </div>
        </div>
      </div>
    );
  }
}