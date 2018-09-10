import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TableCell, StreamRow } from '../styles';
import { selectStreams } from '../selectors';
import { createStructuredSelector } from 'reselect';

class Stream extends Component {

    render () {

            return (
              <div> </div>
            );

    }
    /*renderStream(streamData) {
        return (
            <div>
                <div>
                    {streamData[0].data.name}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
            {this.props.Streams.map(this.renderStream)}
            </div>*/
            /*<StreamRow>
                <TableCell>
                </TableCell>
                <TableCell>
                </TableCell>
                <TableCell>
                </TableCell>
            </StreamRow>*/

}

const mapStateToProps = createStructuredSelector({
    streamList: selectStreams()
  });

export default connect(mapStateToProps)(Stream);