import * as ActionType from '../../../Redux/ActionTypes';
const initialState = { shopList: [] };

export default (state = initialState, payload) => {

  switch (payload.type) {
  case ActionType.LOAD_SHOPLIST:
    return {
      ...state,
      shopList:payload.data.shopList
    };
  default:
    return state;
  }
};

