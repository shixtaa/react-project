import * as ActionType from '../ActionTypes';
const initialState = { isLoading: false };

export default (state = initialState, payload) => {

  switch (payload.type) {
  case ActionType.SHOW_LOADING:
    return {
      ...state,
      isLoading: true
    };
  case ActionType.HIDE_LOADING:
    return {
      ...state,
      isLoading: false
    };
  default:
    return state;
  }
};