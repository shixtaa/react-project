import * as ActionType from '../../../Redux/ActionTypes';
const initialState = { list: [] };

export default (state = initialState, payload) => {

  switch (payload.type) {
  case ActionType.LOAD_RECORD:
    return {
      ...state,
      list:payload.data.list
    };
  default:
    return state;
  }
};

