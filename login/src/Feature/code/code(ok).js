import React,{ useState, useRef, useEffect } from 'react';
import './code.css';
// import _ from 'lodash';
export default function Code () {
  const inputRef = useRef([]);
  const reg = /^[0-9]|$/;

  const [ inputValue, setInputValue ] = useState({
    input0:'',
    input1:'',
    input2:'',
    input3:'',
  });
  function control1 (e){
    let v = e.target.value;
    if(v.length >= 1){
      v = v.substring(0,1);
    }
    if(v !== ' ' && reg.test(v) ){
      setInputValue({
        ...inputValue,
        input0:v
      });
    }
  }
  function control2 (e){
    let v = e.target.value;
    if(v.length >= 1){
      v = v.substring(0,1);
    }
    if(v !== ' ' ){
      setInputValue({
        ...inputValue,
        input1:v
      });
    }
  }
  function control3 (e){
    let v = e.target.value;
    if(v.length >= 1){
      v = v.substring(0,1);
    }
    if(v !== ' '){
      setInputValue({
        ...inputValue,
        input2:v
      });
    }
  }
  function control4 (e){
    let v = e.target.value;
    if( v.length >= 1){
      v = v.substring(0,1);
    }
    if(v !== ' '){
      setInputValue({
        ...inputValue,
        input3:v
      });
    }
  }

  // useEffect(()=>{
  //   if(inputValue.input0.length >= 1){
  //     inputRef.current[1].focus();
  //   }
  // },[ inputValue.input0 ]);

  // useEffect(()=>{
  //   if(inputValue.input1.length >= 1){
  //     inputRef.current[2].focus();
  //   }else{
  //     inputRef.current[0].focus();
  //   }
  // },[ inputValue.input1 ]);

  // useEffect(()=>{
  //   if(inputValue.input2.length >= 1){
  //     inputRef.current[3].focus();
  //   }else{
  //     inputRef.current[1].focus();
  //   }
  // },[ inputValue.input2 ]);

  /* eslint-disable */
  useEffect(()=>{
    if(inputValue.input3.length >= 1){
      console.log(inputValue);
    }
  },[ inputValue.input3  ]);



  useEffect(()=>{
    inputRef.current[0].focus();
  },[]);

// function test0(e){
//   if(e.key!=='Backspace'){
//     if(e.target.value.length==1){
//       inputRef.current[1].focus()
//     }
//     else{
//       inputRef.current[0].focus()
//     }
//   }
// }
function test(e,index){
  if(e.key!=='Backspace'){
    if(e.target.value.length==1){
      if(index<3){
        inputRef.current[index+1].focus()
      }
    }
    else{
      inputRef.current[index].focus()
    }
  }
  else{
    if(e.target.value.length<1 && index>0) {
      inputRef.current[index-1].focus()
    }else{
      inputRef.current[index].focus()
    }
  }
}
// function test2(e){
  //   if(e.key!=='Backspace'){
    //     if(e.target.value.length==1){
      //       inputRef.current[3].focus()
      //     }
      //     else{
        //       inputRef.current[2].focus()
        //     }
        //   }else{
          //     if(e.target.value.length<1) {
            //       inputRef.current[1].focus()
            //     }else{
              //       inputRef.current[2].focus()
              //     }
              //   }
              // }
// function test3(e){
//   if(e.key==='Backspace'){
//     if(e.target.value.length<1){
//       inputRef.current[2].focus()
//     }
//   }
// }
              
  return (
    <div className='code'>
      <h1>请输入验证码:</h1>
      <div>
        <input onChange={ control1  } value={ inputValue.input0 } ref={ (el)=>{ inputRef.current[0] = el } } onKeyDown={(e)=>{test(e,0)}}></input>
        <input onChange={ control2  } value={ inputValue.input1 } ref={ (el)=>{ inputRef.current[1] = el } } onKeyDown={(e)=>{test(e,1)}}></input>
        <input onChange={ control3  } value={ inputValue.input2 } ref={ (el)=>{ inputRef.current[2] = el } } onKeyDown={(e)=>{test(e,2)}}></input>
        <input onChange={ control4  } value={ inputValue.input3 } ref={ (el)=>{ inputRef.current[3] = el } } onKeyDown={(e)=>{test(e,3)}}></input>
      </div>
    </div>
  );
}
