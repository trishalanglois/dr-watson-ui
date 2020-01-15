import { combineReducers } from 'redux';
import { user } from './user';
import { errorMsg } from './errorMsg';
import { addMessage } from './addMessage';

const rootReducer = combineReducers({
  user,
  errorMsg,
  messages: addMessage
});

export default rootReducer;
