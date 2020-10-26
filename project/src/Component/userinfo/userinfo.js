import React from 'react';
import './userinfo.css';
import { useSelector } from 'react-redux';

export default function Userinfo () {
  const info = useSelector(state=>state.user.userInfo);
  return (
    <div className="userinfo-box">
      <img alt='avatar'  src={ info.avatar }/>
      <div className="info-left">
        <span>用户名：{info.username}</span>
        <span>昵称：{info.nickname}</span>
        <div>密码：******</div>
      </div>
      <div className="info-right">
        <span>学校：{info.school}</span>
        <span>性别：{info.gender === '0' ? '女' : '男'}</span>
      </div>
    </div>
  );
}

