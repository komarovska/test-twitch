import React from 'react';
import PropTypes from 'prop-types';

import { TableCell, Logo } from '../styles';


const Stream = ({ name, status, userpic, game, styling }) => (
  <div>
    <div className={styling}>
      <Logo className="col-xs-2" src={userpic} />
      <TableCell className="col-xs-3"><a href={`https://www.twitch.tv/${name}`}>{name}</a></TableCell>
      <TableCell className="stream-name col-xs-7">
        { game }
        {' '}
        {status}
      </TableCell>
    </div>
  </div>
);

Stream.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  userpic: PropTypes.string,
  game: PropTypes.string,
  styling: PropTypes.string,
};

export default Stream;
