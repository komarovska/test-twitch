import React, { Component } from 'react';

import { TableCell, Logo } from '../styles';


export default class Stream extends Component {
    render() {
        const { stream: { game, name, userpic, status } } = this.props;
        return (
          <div>

              {status === 'offline' ?  
              (<div className='OfflineStream row'>
              <Logo className='col-xs-2' src={userpic}/>
              <TableCell className='col-xs-3'><a href={`https://www.twitch.tv/${name}`}>{name}</a></TableCell>
              <TableCell className='stream-name col-xs-7'>Offline</TableCell>
              </div>) : 
              (<div className='OnlineStream row'>
              <Logo className='col-xs-2' src={userpic}/>
              <TableCell className='col-xs-3'><a href={`https://www.twitch.tv/${name}`}>{name}</a></TableCell>
              <TableCell className='stream-name col-xs-7'>{game}: {status}</TableCell>
              </div>)
              }
         
          </div>
        );
    }
}

