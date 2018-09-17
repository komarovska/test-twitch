import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStreams, receivedProps } from './selectors';
import { fetchAllStreamers } from './actions';

import Stream from './Stream';
import TableHeader from './TableHeader';

class StreamList extends Component {
    
    render() {
        const { streamList, isFetched } = this.props;
        const streams = streamList.map((stream, index) => {
            return (
                <Stream stream={stream} key={stream.name} position={++index} />
            );
        });
    
        return (
          <div>
            <TableHeader />
            <div>
            {streams}
            </div>
            <div>
                {isFetched === false ? 
                (<div className="loader"></div>) :
                (<span></span>)
                }
            </div>
          </div>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    streamList: selectStreams(),
    isFetched: receivedProps()
  });

const mapDispatchToProps = {
    onFetchAllStreamers: fetchAllStreamers,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
