import { FETCH_ALL } from './constants';
import { FETCH_ONLINE } from './constants';
import { FETCH_OFFLINE } from './constants';

const initialState = {
    Streams: [],
    sortingType: 'online'
};

const StreamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL:
          return { ...state, Streams: action.payload, sortingType: 'all' };

        case FETCH_ONLINE:
          return { ...state, Streams: action.payload, sortingType: 'online' };

        case FETCH_OFFLINE:
          return { ...state, Streams: action.payload, sortingType: 'offline' };

        default:
           return state;
    
    }

}


export default StreamsReducer;