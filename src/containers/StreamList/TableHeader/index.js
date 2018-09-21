import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { sortStreams } from '../selectors';
import { sortStreamers, fetchAllStreamers } from '../actions';
import { ALL, ONLINE, OFFLINE } from '../constants';

import {
  List,
  Title,
  Circle,
} from '../styles';

class TableHeader extends Component {
  componentDidMount() {
    const { onFetchAllStreamers } = this.props;
    onFetchAllStreamers();
  }

    handleSort = fieldName => type => {
      const Target = type;
      if (!type.target.classList.contains('sorted')) {
        const onSortStreamers = this.props;
        const element = document.getElementsByClassName('sorted').item(0);
        element.className = 'indicator animate-indicator clickable';
        Target.target.className = 'indicator animate-indicator sorted clickable';
        onSortStreamers(fieldName);
      }
    };

    render() {
      return (
        <List className="row">
          <Title className="text-center col-xs-9">TWITCH STREAMERS</Title>
          <Title className="col-xs-3 button-container">
            <button type="button" className="animate-indicator sorted" onClick={this.handleSort(ALL)}>
              <Circle className="circle-brown" />
                all
            </button>
            <button type="button" className="animate-indicator clickable" onClick={this.handleSort(ONLINE)}>
              <Circle className="circle-green" />
                online
            </button>
            <button type="button" className="animate-indicator clickable" onClick={this.handleSort(OFFLINE)}>
              <Circle className="circle-blue" />
                offline
            </button>
          </Title>
        </List>
      );
    }
}


const mapStateToProps = createStructuredSelector({
  streamList: sortStreams,
});

const mapDispatchToProps = {
  onSortStreamers: sortStreamers,
  onFetchAllStreamers: fetchAllStreamers,
};

TableHeader.propTypes = {
  onFetchAllStreamers: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
