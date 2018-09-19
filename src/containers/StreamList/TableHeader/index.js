import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { sortStreams, receivedProps } from '../selectors';
import { sortStreamers } from '../actions';
import { ALL, ONLINE, OFFLINE } from '../constants'

import {
    List,
    Title, 
    Circle,
  } from '../styles.js';
  
  class TableHeader extends Component {

    handleSort = (fieldName) => type => {
      if (!type.target.classList.contains('sorted')) {
        let element = document.getElementsByClassName('sorted').item(0);
        element.className = 'indicator animate-indicator clickable';
        type.target.className = 'indicator animate-indicator sorted clickable';
        this.props.onSortStreamers(fieldName);
      } 
    };
    
    render() {
      return (
        <List className='row'>
            <Title className='text-center col-xs-9'>TWITCH STREAMERS</Title>
            <Title className='col-xs-3'>
              <div className='animate-indicator sorted' onClick={this.handleSort({ALL})}>
                <Circle className='circle-brown'></Circle>
                all
              </div>
              <div className='animate-indicator clickable' onClick={this.handleSort({ONLINE})}>
                <Circle className='circle-green'></Circle>
                online
              </div>
              <div className='animate-indicator clickable' onClick={this.handleSort({OFFLINE})}>
                <Circle className='circle-blue' ></Circle>
                offline
              </div>
            </Title> 
        </List>
        );
      }
    }
    
    
  
const mapStateToProps = createStructuredSelector({
      streamList: sortStreams,
      isFetched: receivedProps(),
});
  
const mapDispatchToProps = {
      onSortStreamers: sortStreamers,
  };
    
  export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);