import { USER_LOGIN, USER_LOGOUT } from '../../../Redux/ActionTypes';

const initialState = { isLogin: false };

export default (state = initialState, payload) => {

  switch (payload.type) {
  case USER_LOGIN:
    return {
      ...state,
      isLogin: true
    };

  case USER_LOGOUT:
    return {
      ...state,
      isLogin: false,
      data:payload.data
    };
  default:
    return state;
  }
};