import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { receivedProps, recjectedProps, sortStreams } from './selectors';
import { fetchAllStreamers } from './actions';

import TableHeader from './TableHeader';
import Stream from './Stream';

class StreamList extends Component {
  componentDidMount() {
    const { onFetchAllStreamers } = this.props;
    onFetchAllStreamers();
  }

  render() {
    const { streamList, isFetched, isError } = this.props;
    return (
      <div>
        <TableHeader />
        <div>
          {(isFetched === false) ? (<div className="loader" />) : (
            <div>
              {streamList.map(stream => (
                <Stream
                  key={stream.id}
                  name={stream.name}
                  status={stream.status}
                  userpic={stream.userpic}
                  game={stream.game}
                  styling={stream.styling}
                />))}
            </div>) }
          {(isError) ? (<div className="error-message">{isError}</div>) : (<span />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetched: receivedProps(),
  isError: recjectedProps(),
  streamList: sortStreams,
});

const mapDispatchToProps = {
  onFetchAllStreamers: fetchAllStreamers,
};

StreamList.propTypes = {
  isFetched: PropTypes.bool,
  isError: PropTypes.bool,
  streamList: PropTypes.array,
  onFetchAllStreamers: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
