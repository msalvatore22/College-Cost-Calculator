import {FETCH_COLLEGES} from '../actions/types';

const initalState = {
  colleges: []
};

export default function(state=initalState, action){
  switch(action.type){
    case FETCH_COLLEGES:
      return Object.assign({}, state, {
        colleges: action.payload
      })
    default:
      return state
  }
}