import React, { useState } from 'react';
import { BrowserRouter as Router  } from 'react-router-dom';
import './user.css';

import UserInfo from '../userinfo/userinfo';
import Exchange from '../Record/record';
export default function User () {
  const [ card,setCard ] = useState('info');
  return (
    <Router>
      <div className="info-container">
        <div className="info-nav">
          <span onClick={ ()=>{setCard('info');} } style={{ borderBottomStyle :card === 'info' ? 'solid' : '' }}>个人信息</span>
          <span onClick={ ()=>{setCard('record');} } style={{ borderBottomStyle :card === 'record' ? 'solid' : '' }}>兑换记录
          </span>
        </div>
        <div className="info-main">
          {card === 'info' ? <UserInfo></UserInfo> : <Exchange></Exchange>}
        </div>
      </div>
    </Router>
  );}
