export const selectStreams = () => state => state.StreamsReducer.Streams;
export const selectSortingType = () => state => state.StreamsReducer.sortingType;
export const receivedProps = () => state => state.StreamsReducer.isReceived;
export const recjectedProps = () => state => state.StreamsReducer.isRejected;
