import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStreams, selectOnlineStreams, selectOfflineStreams, receivedProps } from '../selectors';
import { fetchAllStreamers } from '../actions';

import Stream from '../Stream';

import {
    List,
    Title, 
    Circle,
  } from '../styles.js';
  
  class TableHeader extends Component {
    
    componentDidMount() {
      this.props.onFetchAllStreamers();
      
    }

    componentDidUpdate(prevProps) {
      if (this.props.streamList !== prevProps.streamList) {
        this.sortStreamers('all');
        console.log(this.TEST);
      }
    }

    sortStreamers = (filter) => {
      const { offlineStreamList, onlineStreamList, streamList } = this.props;
      let TEST;
      if (filter === 'online') {
        TEST = onlineStreamList;
      } else if (filter === 'offline') {
        TEST = offlineStreamList;
      } else {
        TEST = streamList;
      }
      console.log(TEST);
      return TEST; 
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
      /*const { isFetched, isError } = this.props;
      const streams = this.TEST.map((stream) => (
        <Stream stream={stream} key={stream.name} />
      ));*/
      return (
        <div>
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
        </div>
        );
      }
    }
    
  
const mapStateToProps = createStructuredSelector({
      streamList: selectStreams(),
      onlineStreamList: selectOnlineStreams(),
      offlineStreamList: selectOfflineStreams(),
      isFetched: receivedProps(),
});
  
const mapDispatchToProps = {
      onFetchAllStreamers: fetchAllStreamers,
  };
    
  export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);