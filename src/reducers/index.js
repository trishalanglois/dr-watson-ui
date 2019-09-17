import { combineReducers } from 'redux';
import { user } from './user';
import { errorMsg } from './errorMsg';

const rootReducer = combineReducers({
  user,
  errorMsg
});

export default rootReducer;