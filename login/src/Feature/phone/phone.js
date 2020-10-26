import React,{ useState,useRef,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './phone.css';
export default function Phone () {
  const pattern = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
  const [ value,setValue ] = useState('');
  const inputRef = useRef();
  const history = useHistory();
  async function setPhone (e){
    let v = e.target.value;

    if(v.length >= 11){
      // 截断
      v = v.substring(0,11);
    }
    setValue(v);
  }
  useEffect(() => {
    inputRef.current.focus();
    let result = pattern.test(value);
    if(result){
      setTimeout(() => {
        history.push('/code');
      }, 500);
    }
  }, [ history, pattern, value ]);
  return (
    <div className="phone">
      <h1>请输入手机号:</h1>
      <input placeholder='请输入手机号' value={ value } ref={ inputRef } onChange={ setPhone }></input>
    </div>
  );
}
