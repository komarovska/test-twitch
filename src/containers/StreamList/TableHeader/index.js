import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectStreams, selectSortingType } from '../selectors';
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
  
    sortStreamers = (filter) => {
      if (filter !== this.props.streamersSortingType) {
        if (filter === 'online') {
          this.props.onFetchOnline();
        } else if (filter === 'offline') {
          this.props.onFetchOffline();
        } else {
          this.props.onFetchAllStreamers();
        }
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
      const { streamsSortingType } = this.props;
      return (
      
        <List className='row'>
            <Title className='text-center col-xs-9'>TWITCH STREAMERS</Title>
            <Title className='col-xs-3'>
              <div className='animate-indicator sorted' onClick={this.handleSort('all')}>
                <Circle style={{ backgroundColor: lightBrown }}></Circle>
                all
              </div>
              <div className='animate-indicator clickable' onClick={this.handleSort('online')}>
                <Circle style={{ backgroundColor: lightGreen }}></Circle>
                online
              </div>
              <div className='animate-indicator clickable' onClick={this.handleSort('offline')}>
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
      onFetchOnline: fetchOnline,
      onFetchOffline: fetchOffline
  };
    
  export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);