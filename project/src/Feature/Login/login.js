import React ,{ useState } from 'react';
import './login.css';
import { login as LoginReq } from '../../Request/login';
import { useHistory } from 'react-router-dom';
export default function Login () {
  const history = useHistory();
  const [ userInfo, setUserInfo ] = useState({
    username:'',
    password:''
  });
  async function loginClick (){
    try {
      await LoginReq(userInfo);
      history.push('/user');
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className="regist-container">
      <div className="regist-warpper">
        <div className="regist-left">
          <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/auth/pic_denglu_wode.png" alt="login"></img>
        </div>
        <div className="regist-right">
          <h1>欢迎登录</h1>
          <input type="text" value={ userInfo.username } placeholder="请输入您的用户名" onChange={ (e)=>{setUserInfo({ ...userInfo,username:e.target.value });} }/>
          <input type="password" value={ userInfo.password } placeholder="请输入您的密码" onChange={ (e)=>{setUserInfo({ ...userInfo,password:e.target.value });} }/>
          <div style={{ fontSize : '14px',color : '#999' }}>
            还没有账号？<span style={{ color : '#6963d0' }}>新用户注册</span>
          </div>
          <button onClick={ loginClick }>登录</button>
        </div>
      </div>
    </div>
  );
}
