import { createSelector } from 'reselect';
import { ALL, ONLINE, OFFLINE } from './constants';

export const selectStreams = state => state.StreamsReducer.Streams;
export const selectSortingType = state => state.StreamsReducer.sortingType;

export const sortStreams = createSelector(
  [selectSortingType, selectStreams],
  (sortingType, Streams) => {
    switch (sortingType) {
      case ALL:
        return Streams;
      case ONLINE:
        return Streams.filter(stream => stream.status !== 'offline');
      case OFFLINE:
        return Streams.filter(stream => stream.status === 'offline');
      default:
        return [];
    }
  },
);

export const receivedProps = () => state => state.StreamsReducer.isReceived;
export const recjectedProps = () => state => state.StreamsReducer.isRejected;
