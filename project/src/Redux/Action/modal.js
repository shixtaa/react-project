import * as ActionType from '../ActionTypes';
export function showModal ({ message }){
  return (dispatch)=>{
    dispatch({ type:ActionType.SHOW_MODAL,data:{ message } });
  };
}
export function hideModal (){
  return (dispatch)=>{
    dispatch({ type:ActionType.HIDE_MODAL });
  };
}