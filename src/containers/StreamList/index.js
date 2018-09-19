import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { receivedProps, recjectedProps } from './selectors';
import { fetchAllStreamers } from './actions';

import TableHeader from './TableHeader';
import Stream from './Stream';

const StreamList = ({ isFetched, isError }) => (
  <div>
    <TableHeader />
    <div>
      {(isFetched === false) ? (<div className="loader" />) : 
       (isError) ? (<div className="error-message">{isError}</div>) : 
       (<Stream />)
          }
    </div>
  </div>

);
const mapStateToProps = createStructuredSelector({
  isFetched: receivedProps(),
  isError: recjectedProps(),
});

const mapDispatchToProps = {
  onFetchAllStreamers: fetchAllStreamers,
};

StreamList.propTypes = {
  isFetched: PropTypes.bool,
  isError: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
