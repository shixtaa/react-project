import { combineReducers } from 'redux';
/* global */
import loading from './loading';
import modal from './modal';

/* page */
import login from '../../Feature/Login/state/reducer';
import user from '../../Feature/UserCenter/state/reducer';
import exchange from '../../Component/Record/state/reducer';
import mall from '../../Component/Mall/state/reducer';
const rootReducer = combineReducers({
  login,user,exchange,mall,loading,modal
});

export default rootReducer;