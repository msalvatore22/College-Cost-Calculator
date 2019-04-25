import {FETCH_COLLEGES} from '../actions/types';

const initalState = {
  collegeList: []
};

export default function(state=initalState, action){
  switch(action.type){
    case FETCH_COLLEGES:
      return Object.assign({}, state, {
        collegeList: action.payload
      })
    default:
      return state
  }
}