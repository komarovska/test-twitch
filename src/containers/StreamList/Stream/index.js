import React, { Component } from 'react';

import { TableCell, StreamRow } from '../styles';


export default class Stream extends Component {
    render() {
        const { position, stream: { id, name, status, userpic } } = this.props;
        return (
          <StreamRow>
            <TableCell className='text-center'>{position}</TableCell>
            <TableCell >
              <a href={`https://www.twitch.tv/${name}`} target='_blank'>
                <img className='img' src={userpic} alt='oops!'/>
                <span>{name}</span>
              </a>
            </TableCell>
              <span>{id}</span>
              <span>{status}</span>
          </StreamRow>
        );
    }
}

