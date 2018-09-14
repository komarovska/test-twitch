import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSortingType } from '../selectors';
import { fetchAllStreamers } from '../actions';

import {
    List,
    Title, 
    Circle,
  } from '../styles.js';
  
  class TableHeader extends Component {
    
    componentDidMount() {
      this.props.onFetchAllStreamers();
    }

    makeInvisible = (arr) => {
      Array.from(arr).forEach(function(item) {
        item.style.display = 'none';
     });
    }

    makeVisible = (arr) => {
      Array.from(arr).forEach(function(item) {
        item.style.display = 'block';
     });
    }

    sortStreamers = (filter) => {
      let offlines = document.getElementsByClassName('OfflineStream row');
      let onlines = document.getElementsByClassName('OnlineStream row');
      if (filter === 'online') {
        this.makeInvisible(offlines);
        this.makeVisible(onlines);
      } else if (filter === 'offline') {
        this.makeInvisible(onlines);
        this.makeVisible(offlines);
      } else {
        this.makeVisible(onlines);
        this.makeVisible(offlines);
      }
    }
  
    handleSort = (fieldName) => type => {
      if (!type.target.classList.contains('sorted')) {
        let element = document.getElementsByClassName('sorted').item(0);
        element.className = 'indicator animate-indicator clickable';
        type.target.className = 'indicator animate-indicator sorted clickable';
        this.sortStreamers(fieldName);
      } 
    };
    
    render() {
      return (
        <List className='row'>
            <Title className='text-center col-xs-9'>TWITCH STREAMERS</Title>
            <Title className='col-xs-3'>
              <div className='animate-indicator sorted' onClick={this.handleSort('all')}>
                <Circle className='circle-brown'></Circle>
                all
              </div>
              <div className='animate-indicator clickable' onClick={this.handleSort('online')}>
                <Circle className='circle-green'></Circle>
                online
              </div>
              <div className='animate-indicator clickable' onClick={this.handleSort('offline')}>
                <Circle className='circle-blue' ></Circle>
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