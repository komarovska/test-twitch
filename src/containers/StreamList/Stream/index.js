import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TableCell, StreamRow } from '../styles';
import { selectStreams } from '../selectors';
import { createStructuredSelector } from 'reselect';

export default class Stream extends Component {
    render() {
        const { position, stream: { display_name, logo, all, online, offline } } = this.props;
        return (
          <StreamRow>
            <TableCell className='text-center'>{position}</TableCell>
            <TableCell >
              <a href={`https://www.twitch.tv/${display_name}`} target='_blank'>
                <img className='img' src={logo} alt='oops!'/>
                <span>{display_name}</span>
              </a>
            </TableCell>
            <TableCell className='text-center'>{all}</TableCell>
            <TableCell className='text-center'>{online}</TableCell>
            <TableCell className='text-center'>{offline}</TableCell>
          </StreamRow>
        );
    }
}

