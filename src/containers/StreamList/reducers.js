import { FETCH_ALL } from './constants';

const initialState = {
    Streams: [],
    sortingType: 'all'
};

const StreamsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ALL:
        console.log(action.payload);
        return { ...state, Streams: action.payload, sortingType: 'all' };

      default:
        console.log(state);
        return state;
    
    }

}

export default StreamsReducer;
