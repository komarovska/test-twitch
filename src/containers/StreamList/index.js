import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { receivedProps, recjectedProps } from './selectors';
import { fetchAllStreamers } from './actions';

import TableHeader from './TableHeader';
// import Stream from './Stream';

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
  isFetched: receivedProps(),
  isError: recjectedProps(),
});

const mapDispatchToProps = {
  onFetchAllStreamers: fetchAllStreamers,
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
