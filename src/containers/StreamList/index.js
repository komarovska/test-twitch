import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectStreams, selectSortingType } from './selectors';
import { fetchAllStreamers } from './actions';

import Stream from './Stream';
import TableHeader from './TableHeader';

class StreamList extends Component {
    componentDidMount = () => {
        this.props.onFetchAllStreamers();
      }
    render() {
        return (
          <div>
            <TableHeader />
            <Stream />
          </div>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    streamList: selectStreams()
  });

const mapDispatchToProps = {
    onFetchAllStreamers: fetchAllStreamers
};
  
  export default connect(mapStateToProps, mapDispatchToProps)(StreamList);

