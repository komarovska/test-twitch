import React, { Component } from 'react';

import { fetchAllStreamers, fetchOnline, fetchOffline } from '../actions';

import {
    List,
    Title, 
    Indicator,
    Circle,
  } from '../styles.js';
  import { 
    lightBrown, 
    lightGreen,
    lightBlue, 
  } from '../constants';
  
  class TableHeader extends Component {
  
  
    render() {
  
      return (
      //const { StreamsSortingType } = this.props;
        <List className='row'>
            <Title className='text-center col-xs-9'>TWITCH STREAMERS</Title>
            <Title className='col-xs-3'>
              <Indicator className='animate-indicator' onClick={fetchAllStreamers}>
                <Circle style={{ backgroundColor: lightBrown }}></Circle>
                all
              </Indicator>
              <Indicator className='animate-indicator' onClick={fetchOnline}>
                <Circle style={{ backgroundColor: lightGreen }}></Circle>
                online
              </Indicator>
              <Indicator className='animate-indicator' onClick={fetchOffline}>
                <Circle style={{ backgroundColor: lightBlue }}></Circle>
                offline
              </Indicator>
              </Title> 
        </List>
        );
      }
    }
    
  
  export default TableHeader;