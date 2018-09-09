import {
    names,
    CHANNELS,
    STREAMS,
    FETCH_CHANNELS,
    //FETCH_STREAMS
} from './constants';

import axios from 'axios';

export const fetchAllStreamers = () => {
    let chain = Promise.resolve();

    const streamers = [];

    names.forEach(function(name) {
    chain = chain
    .then(() => Promise.all([
        axios.get(CHANNELS+name),
        axios.get(STREAMS+name),
    ])
    .then((stream) => {
        streamers.push(stream);
        }))
    });
    return {
        type: FETCH_CHANNELS,
        payload: streamers
    };
}

export const fetchOnline = () => {
    return null;
}

export const fetchOffline = () => {
    return null;
}