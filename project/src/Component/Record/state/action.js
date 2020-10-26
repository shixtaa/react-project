import * as ActionType from '../../../Redux/ActionTypes';
import { exchangeRecord } from '../../../Request/exchangeRecord';
export  function loadRecord (){
  return async (dispatch)=>{
    let result = await exchangeRecord();
    dispatch({ type:ActionType.LOAD_RECORD ,data:{ list:result } });
  };
}