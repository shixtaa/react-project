import React, { useState, useEffect, useRef } from 'react';
import './test.css';
import _ from 'lodash';
export default function Code () {
  const reg = /^[0-9]$/;
  const inputRef = useRef();
  const [ value,setValue ] = useState('');

  function change (e){
    let v = e.target.value;
    let array = v.split('');
    _.map(array,(item,index)=>{
      if(!item || !reg.test(item)){
        array.splice(index,1);
      }
    });
    if(array.length >= 4){
      // 截断
      array = array.splice(0,4);
    }
    setValue(array);
  }

  useEffect(()=>{
    inputRef.current.focus();
  },[]);

  /* eslint-disable */
  useEffect(()=>{
    if(value.length === 4){
      console.log(value.join(''));
    }
  },[ value[3] ]);

  return (
    <div className='test'>
      <h2>请输入验证码：</h2>
      <div>
        <span> { value[0] }</span>
        <span> { value[1] }</span>
        <span> { value[2] }</span>
        <span> { value[3] }</span>
      </div>
      <input ref={ inputRef } value={ value} onChange={ change } className='testInp' onBlur={()=>{inputRef.current.focus()}}></input>
    </div>
  );
}
