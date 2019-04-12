import axios from 'axios';
import { FETCH_COLLEGES } from './types';

export const fetchColleges = (collegeName) => async dispatch => {
  const res = await axios.post('/api/colleges', collegeName);

  console.log(res.data)
  dispatch({type: FETCH_COLLEGES, payload: res.data})
}