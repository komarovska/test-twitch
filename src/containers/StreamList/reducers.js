import { FETCH_ALL } from './constants';

const initialState = {
    Streams: [],
    sortingType: 'all'
};

const StreamsReducer = (state = initialState, action) => {
    switch (action.type) {
      case `${FETCH_ALL}_FULFILLED`:
        console.log('from reducer');
        console.log(action.payload);
        const streams = action.payload.map(stream => {
          const channelData = stream[0].data;
          const streamData = stream[1].data;
          return {
            id: channelData.name,
            name: channelData.display_name,
            game: channelData.game,
            status: streamData.stream ? streamData.stream.game : 'offline',
            userpic: channelData.logo,
          };
      });
        console.log(streams);
        return { ...state, Streams: streams, sortingType: 'all' };
      default:
        console.log(state);
        return state;
    }

}

export default StreamsReducer;
