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
    return async dispatch => {
        try {
            dispatch({
                type: FETCH_ALL,
                payload: streamers
            })
        } catch (err) {
            dispatch({
                type: 'FETCH_ALL_ERROR',
                payload: err
            })
        }
    }
}

export const fetchOnline = () => {
    let chain = Promise.resolve();

    const streamers = [];

    names.forEach(function(name) {
    chain = chain
    .then(() => Promise.all([
        axios.get(CHANNELS+name),
        axios.get(STREAMS+name),
    ])
    .then((stream) => {
        if (stream[1].data.stream) {
            streamers.push(stream);
        }
        }))
    });
    return async dispatch => {
        try {
            dispatch({
                type: FETCH_ONLINE,
                payload: streamers
            });
        }
        catch (err) {
            dispatch({
                type: 'FETCH_ONLINE_ERROR',
                payload: err
            });
        }
    }
}

export const fetchOffline = () => {
    let chain = Promise.resolve();

    const streamers = [];

    names.forEach(function(name) {
    chain = chain
    .then(() => Promise.all([
        axios.get(CHANNELS+name),
        axios.get(STREAMS+name),
    ])
    .then((stream) => {
        if (!stream[1].data.stream) {
            streamers.push(stream);
        }
        }))
    });
    return async dispatch => {
        try {
            dispatch({
                type: FETCH_OFFLINE,
                payload: streamers
            });
        } catch (err) {
            dispatch({
                type: 'FETCH_OFFLINE_ERROR',
                payolad: err
            })
        }
    };
}