import * as ActionType from '../../../Redux/ActionTypes';
import { loadShopList } from '../../../Request/mall';
import { exchange } from '../../../Request/exchange';
// import { getInfo } from '../../../Request/user';
export  function loadShop (history){
  return async (dispatch)=>{
    try {
      dispatch({ type:ActionType.SHOW_LOADING });
      let  result = await (loadShopList());
      dispatch({ type:ActionType.LOAD_SHOPLIST ,data:{ shopList:result } });
    } catch (error) {
      dispatch({ type:ActionType.SHOW_MODAL,data:{ message:error.message },func:()=>{
        history.push('/login');
      } });
    }finally{
      dispatch({ type:ActionType.HIDE_LOADING });
    }
  };
}
export function putExchange (value){
  return async (dispatch)=>{
    try {
      dispatch({ type:ActionType.SHOW_LOADING });
      await exchange(value);
    } catch (error) {
      dispatch({ type:ActionType.SHOW_MODAL,data:{ message:error.message } });
    }finally{
      dispatch({ type:ActionType.HIDE_LOADING });
    }
  };
}