import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { receivedProps, recjectedProps, selectStreams } from './selectors';
import { fetchAllStreamers } from './actions';

import TableHeader from './TableHeader';
import Stream from './Stream';

class StreamList extends Component {
  componentDidMount() {
    const onFetchAllStreamers = this.props;
    onFetchAllStreamers();
  }

  render() {
    const { streamList, isFetched, isError } = this.props;
    streamList.map(stream => (
      <Stream stream={stream} key={stream.name} />
    ));
    return (
      <div>
        <TableHeader />
        <div>
          {(isFetched === false) ? (<div className="loader" />) : <Stream /> }
          {(isError) ? (<div className="error-message">{isError}</div>) : (<span />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetched: receivedProps(),
  isError: recjectedProps(),
  streamList: selectStreams(),
});

const mapDispatchToProps = {
  onFetchAllStreamers: fetchAllStreamers,
};

StreamList.propTypes = {
  isFetched: PropTypes.bool,
  isError: PropTypes.bool,
  streamList: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
