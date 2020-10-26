import { getInfo } from '../../../Request/user';
import * as ActionType from '../../../Redux/ActionTypes';
export  function loadUserInfo (history){
  return async (dispatch)=>{
    try {
      dispatch({ type:ActionType.SHOW_LOADING });
      let result = await getInfo();
      dispatch({ type:ActionType.LOAD_USER ,data:{ userInfo:result } });
    } catch (error) {
      dispatch({ type:ActionType.SHOW_MODAL,data:{ message:error.message },func:()=>{
        history.push('/login');
      } });
    }finally{
      dispatch({ type:ActionType.HIDE_LOADING });
    }
  };
}
