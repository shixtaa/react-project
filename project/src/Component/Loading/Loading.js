import React from 'react';
import imgUrl from '../../Assets/loading.gif';
import './Loading.css';
import { useSelector } from 'react-redux';
export default function Loading () {
  const isLoading = useSelector(state => state.loading.isLoading);
  return (
    isLoading ?
      <div className={ 'loading' }>
        <img className={ 'loading-box' } src={ imgUrl } alt="loading"></img>
      </div> : null
  );
}
