import { FETCH_ALL, SELECT_SORTING_TYPE } from 'constants';

const initialState = {
  Streams: [],
  isReceived: false,
  isRejected: false,
  sortingType: 'ALL'
};

const StreamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_ALL}_FULFILLED`:
      const streams = action.payload.map((stream) => {
        const channelData = stream[0].data;
        const streamData = stream[1].data;
        return {
          id: channelData.name,
          name: channelData.display_name,
          game: channelData.game,
          status: streamData.stream ? channelData.status : 'offline',
          userpic: channelData.logo,
        };
      });
      return {
        ...state, Streams: streams, isReceived: true,
      };
    case `${FETCH_ALL}_PENDING`:
      return state;
    case `${FETCH_ALL}_REJECTED`:
      const errorMessage = `Attention! ${action.payload}`;
      return { ...state, isRejected: errorMessage, isReceived: true };
    case `${SELECT_SORTING_TYPE}`:
      return { ...state, sortingType: action.sortingType}
    default:
      return state;
  }
};

export default StreamsReducer;
