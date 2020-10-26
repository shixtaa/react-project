import React from 'react';

/* pages */
import Login from '../Feature/Login/login';
import UserCenter from '../Feature/UserCenter/userCenter';
import Phone from '../Component/checkInput/Phone/phone';
import Code from '../Component/checkInput/Code/code';
export const routerConfig = [
  {
    path:'/login',
    component: Login
  },
  {
    path:'/user',
    component:UserCenter
  },
  {
    path:'/phone',
    component:Phone
  },
  {
    path:'/code',
    component:Code
  },
  {
    path:'/',
    component:()=>{
      return(
        <div>111</div>
      );
    }
  },
  {
    path:'*',
    component:()=>{
      return (
        <div>404</div>
      );
    }
  },
];