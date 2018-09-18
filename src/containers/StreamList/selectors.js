export const selectStreams = () => state => state.StreamsReducer.Streams;
export const selectOnlineStreams = () => state => state.StreamsReducer.Streams.filter(function(stream) {
    return stream.status !== 'offline';
});
export const selectOfflineStreams = () => state => state.StreamsReducer.Streams.filter(function(stream) {
    return stream.status === 'offline';
});
export const receivedProps = () => state => state.StreamsReducer.isReceived;
export const recjectedProps = () => state => state.StreamsReducer.isRejected;


  