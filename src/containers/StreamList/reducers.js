import { FETCH_CHANNELS } from './constants';
//import { FETCH_RECENT } from './constants';

const initialState = {
    Streams: [],
    sortingType: 'all'
};

const StreamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHANNELS:
          return { ...state, Streams: action.payload, sortingType: 'all' };

        //case FETCH_ONLINE:
          //  return { ...state, Streams: action.payload, sortingType: 'recent' };

        default:
           return state;
    
    }

}


export default StreamsReducer;