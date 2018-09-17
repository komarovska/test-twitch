import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStreams, receivedProps, recjectedProps } from './selectors';
import { fetchAllStreamers } from './actions';

import Stream from './Stream';
import TableHeader from './TableHeader';

class StreamList extends Component {
  render() {
    const { streamList, isFetched, isError } = this.props;
    const streams = streamList.map((stream, index) => (
      <Stream stream={stream} key={stream.name} position={++index} />
    ));

    return (
      <div>
        <TableHeader />
        <div>
          {streams}
        </div>
        <div>
          {(isFetched === false) ? (<div className="loader" />)
            : (isError) ? (<div className="error-message">{isError}</div>)
              : (<span />)
                }
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  streamList: selectStreams(),
  isFetched: receivedProps(),
  isError: recjectedProps(),
});

const mapDispatchToProps = {
  onFetchAllStreamers: fetchAllStreamers,
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
