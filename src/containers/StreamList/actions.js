import {
    names,
    CHANNELS,
    STREAMS,
    FETCH_ALL,
} from './constants';

import axios from 'axios';

export const fetchAllStreamers = () => {
    const data = names.map(name => Promise.all([
      axios.get(CHANNELS+name),
      axios.get(STREAMS+name),
    ]));
    return ({
      type: FETCH_ALL,
      payload: Promise.all(data)
    });
  };

