const initialState = {
    Streams: [],
    sortingType: 'all'
};

const StreamsReducer = (state = initialState, action) => {
    //switch (action.type) {
        //case FETCH_ALL:
          //  return { ...state, Streams: action.payload, sortingType: 'alltime' };

        //case FETCH_ONLINE:
          //  return { ...state, Streams: action.payload, sortingType: 'recent' };

        //default:
           return state;
    
}


export default StreamsReducer;