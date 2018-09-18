import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStreams, selectOfflineStreams, selectOnlineStreams, receivedProps, recjectedProps } from './selectors';
import { fetchAllStreamers } from './actions';

import TableHeader from './TableHeader';

class StreamList extends Component {

  render() {
    const { isFetched, isError } = this.props;


    return (
      <div>
        <TableHeader />
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
    onlineStreamList: selectOnlineStreams(),
    offlineStreamList: selectOfflineStreams(),
    isFetched: receivedProps(),
    isError: recjectedProps(),
  });

  const mapDispatchToProps = {
    onFetchAllStreamers: fetchAllStreamers,
  };

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
