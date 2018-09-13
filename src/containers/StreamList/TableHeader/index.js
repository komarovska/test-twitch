import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStreams, selectSortingType } from '../selectors';
import { fetchAllStreamers } from '../actions';

import {
    List,
    Title, 
    Circle,
  } from '../styles.js';
  import { 
    lightBrown, 
    lightGreen,
    lightBlue, 
  } from '../constants';
  
  class TableHeader extends Component {
  
    sortStreamers = (filter) => {
        if (filter === 'online') {
          this.props.onFetchOnline();
        } else if (filter === 'offline') {
          this.props.onFetchOffline();
        } else {
          this.props.onFetchAllStreamers();
        }
    }
  
    handleSort = (fieldName) => type => {
      if (!type.target.classList.contains('sorted')) {
        let element = document.getElementsByClassName('sorted').item(0);
        element.className = 'indicator animate-indicator clickable';
        type.target.className = 'indicator animate-indicator sorted clickable';
        this.sortStreamers(fieldName);
      } 
    }
    render() {
      return (
        <List className='row'>
            <Title className='text-center col-xs-9'>TWITCH STREAMERS</Title>
            <Title className='col-xs-3'>
              <div className='animate-indicator clickable'>
                <Circle style={{ backgroundColor: lightBrown }} onClick={this.handleSort('all')}></Circle>
                all
              </div>
              <div className='animate-indicator clickable'>
                <Circle style={{ backgroundColor: lightGreen }} onClick={this.handleSort('all')}></Circle>
                online
              </div>
              <div className='animate-indicator clickable'>
                <Circle style={{ backgroundColor: lightBlue }}></Circle>
                offline
              </div>
            </Title> 
        </List>
        );
      }
    }
    
  
const mapStateToProps = createStructuredSelector({
      streamsSortingType: selectSortingType()
});
  
const mapDispatchToProps = {
      onFetchAllStreamers: fetchAllStreamers,
  };
    
  export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);