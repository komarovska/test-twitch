import { createSelector } from 'reselect';
import { ALL, ONLINE, OFFLINE } from 'constants';

export const selectStreams = state => state.StreamsReducer.Streams;
export const selectSortingType = state => state.StreamsReducer.sortingType;

export const sortStreams = createSelector(
    selectStreams, 
    selectSortingType,
    (Streams, sortingType) => {
        if (sortingType === ALL ) {
            return Streams;
        } else if (sortingType === ONLINE) {
            return Streams.filter(stream => stream.status !== 'offline');
        } else if (sortingType === OFFLINE) {
            return Streams.filter(stream => stream.status === 'offline');
        } else {
            return []
        }
    }
  )

export const receivedProps = () => state => state.StreamsReducer.isReceived;
export const recjectedProps = () => state => state.StreamsReducer.isRejected;


  