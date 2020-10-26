import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './Modal.css';
import { hideModal } from '../../Redux/Action/modal';
export default function Modal () {
  const modal = useSelector(state => state.modal);
  const dispatch = useDispatch();
  return (
    modal.isShow ?
      <div className={ 'modal' }>
        <div className={ 'modal-box' }>
          <span>{modal.message}</span>
          <button onClick={ ()=>{
            dispatch(hideModal());
          } }>close</button>
        </div>
      </div> : null
  );
}
