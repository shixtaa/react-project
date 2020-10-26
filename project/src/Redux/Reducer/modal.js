import * as ActionType from '../ActionTypes';
const initialState = { isShow: false ,message:'',func:()=>{} };

export default (state = initialState, payload) => {

  switch (payload.type) {
  case ActionType.SHOW_MODAL:
    return {
      ...state,
      isShow: true,
      message:payload.data.message,
      func:payload.func
    };
  case ActionType.HIDE_MODAL:
    return {
      ...state,
      isShow: false
    };
  default:
    return state;
  }
};