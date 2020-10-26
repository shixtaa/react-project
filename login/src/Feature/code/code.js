import React,{ useState, useRef,useEffect } from 'react';
import './code.css';
import _ from 'lodash';
export default function Code () {
  const inputRef = useRef([]);
  const [ code, setCode ] = useState([]);

  /* 正则检测数字 */
  const reg = /^[0-9]$/;

  /* 页面加载完成定位到第一个输入框 */
  useEffect(()=>{
    inputRef.current[0].focus();
  },[]);

  /* eslint-disable */
  /* code值变化，当code中某个值为空时，删除该值，当新数组长度等于4时，输出新数组 */
  useEffect(()=>{
    let newCode = _.cloneDeep(code);
    _.map(code,(item,index)=>{
      if(!item){
        newCode.splice(index,1)
      }
    })
    if(newCode.length===4){
      console.log(newCode[0]+newCode[1]+newCode[2]+newCode[3])
    }
  },[code]);

  /* input显示输入的值 */
  function control (e,index){
    let v = e.target.value;
    if( v.length >= 1){
      v = v.substring(0,1);
    }
    if(v !== ' '){
      let cloneCode = _.cloneDeep(code);
      cloneCode[index] = v;
      setCode(cloneCode);
    }
  }

  /* onkeydown事件 */
  function keyDown(e,index){
    /* 正常输入 */
    if(e.key!=='Backspace'){
      /* 若框中非空，定位到下一个 ，否则光标仍在当前格*/
      if(e.target.value.length==1){
        if(index<3){
          inputRef.current[index+1].focus()
        }
      }
      else{
          inputRef.current[index].focus()
      }
    }
    /* 删除时 */
    else{
      /* 当前格的值为空，定位到上一格，非空仍聚焦在当前 */
      if(e.target.value.length<1 ) {
        if(index>0){
          inputRef.current[index-1].focus()
        }else{
          inputRef.current[index].focus()
        }
      }else{
          inputRef.current[index].focus()
          if(code.length==4&&index!==3){
            e.preventDefault();
            // inputRef.current[3].focus()
          }
      } 
    }
  }   
  
  /* 鼠标无法控制聚焦 */
  function blur(e,index){
    if(e.target.value.length<1) {
      if(index>0){
        inputRef.current[index-1].focus()
      }else{
        inputRef.current[index].focus()
      }
    }else{
      if(index<3){
        inputRef.current[index+1].focus()
      }
    } 
  }
  
  // function test(e,index){
  //   if(code.length==4&&index!==3&&code[index]===1&&e.key==='Backspace'){
  //     // inputRef.current[3].focus()
  //     e.preventDefault();
      
  //   }
  // }

//   onKeyUp={(e)=>{test(e,0)}}
// onKeyUp={(e)=>{test(e,1)}}
// onKeyUp={(e)=>{test(e,2)}}
// onKeyUp={(e)=>{test(e,3)}}
  return (
    <div className='code'>
      <h1>请输入验证码:</h1>
      <div>
        <input onChange={ (e)=>{control(e,0)}  } value={reg.test(code[0])?code[0]:""  } ref={ (el)=>{ inputRef.current[0] = el } }  onKeyDown={(e)=>{keyDown(e,0)}} onBlur={(e)=>{blur(e,0)}} ></input>
        <input onChange={ (e)=>{control(e,1)}  } value={reg.test(code[1])?code[1]:""  } ref={ (el)=>{ inputRef.current[1] = el } }  onKeyDown={(e)=>{keyDown(e,1)}} onBlur={(e)=>{blur(e,1)}} ></input>
        <input onChange={ (e)=>{control(e,2)}  } value={reg.test(code[2])?code[2]:""  } ref={ (el)=>{ inputRef.current[2] = el } }  onKeyDown={(e)=>{keyDown(e,2)}} onBlur={(e)=>{blur(e,2)}} ></input>
        <input onChange={ (e)=>{control(e,3)}  } value={reg.test(code[3])?code[3]:""  } ref={ (el)=>{ inputRef.current[3] = el } }  onKeyDown={(e)=>{keyDown(e,3)}} onBlur={(e)=>{blur(e,3)}} ></input>
      </div>
    </div>
  );
}
