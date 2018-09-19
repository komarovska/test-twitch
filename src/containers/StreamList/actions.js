import axios from 'axios';
import {
  names,
  CHANNELS,
  STREAMS,
  FETCH_ALL,
  SELECT_SORTING_TYPE
} from 'constants';


export const fetchAllStreamers = () => {
  const data = names.map(name => Promise.all([
    axios.get(CHANNELS + name),
    axios.get(STREAMS + name),
  ]));
  return ({
    type: FETCH_ALL,
    payload: Promise.all(data),
  });
};

export const selectSortingType = sortingType => {
  return ({
    type: SELECT_SORTING_TYPE,
    sortingType
  })
}
