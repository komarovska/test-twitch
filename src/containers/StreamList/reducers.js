import { FETCH_ALL } from './constants';

const initialState = {
    Streams: [],
    sortingType: 'all'
};

const StreamsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ALL:
      const streams = action.payload.map(stream => {
        const channelData = stream[0].data;
        const streamData = stream[1].data;
        return {
          id: channelData.name,
          name: channelData.display_name,
          status: streamData.stream ? streamData.stream.game : 'offline',
          userpic: channelData.logo,
        };
    }); 
        console.log(streams);
        return { ...state, Streams: [this.id, this.name, this.display_name, this.logo ], sortingType: 'all' };

      default:
        console.log(state);
        return state;
    
    }

}

export default StreamsReducer;
