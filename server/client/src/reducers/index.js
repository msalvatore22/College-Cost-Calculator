import {combineReducers} from 'redux';
import collegesReducer from './collegesReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  colleges: collegesReducer,
  form: formReducer
})