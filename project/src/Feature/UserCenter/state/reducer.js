import * as ActionType from '../../../Redux/ActionTypes';
const initialState = { userInfo: {} };

export default (state = initialState, payload) => {

  switch (payload.type) {
  case ActionType.LOAD_USER:
    return {
      ...state,
      userInfo:payload.data.userInfo
    };
  default:
    return state;
  }
};

