import {
    names,
    CHANNELS,
    STREAMS,
    FETCH_ALL,
    FETCH_ONLINE,
    FETCH_OFFLINE
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

export const fetchOnline = () => {
    const data = names.map(name => Promise.all([
        axios.get(CHANNELS+name),
        axios.get(STREAMS+name),
      ]));
    return ({
        type: FETCH_ONLINE,
        payload: Promise.all(data)
      });
}

export const fetchOffline = () => {
    const data = names.map(name => Promise.all([
        axios.get(CHANNELS+name),
        axios.get(STREAMS+name),
      ]));
    return ({
        type: FETCH_OFFLINE,
        payload: Promise.all(data)
      });
}