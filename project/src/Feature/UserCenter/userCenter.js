import React ,{ useEffect, useState } from 'react';
import { BrowserRouter as Router,Switch,Link,Route ,useHistory, Redirect,useLocation } from 'react-router-dom';
import { useSelector ,useDispatch } from 'react-redux';
import { loadUserInfo } from './state/action';
import './userCenter.css';
/* component */
import User from '../../Component/User/user';
import Mall from '../../Component/Mall/mall';

export default function UserUserCenter () {
  const userInfo = useSelector(state=>state.user.userInfo);
  const dispatch = useDispatch();
  const history = useHistory();
  let location = useLocation();
  let name = location.pathname;
  const [ tab,setTab ] = useState(name);
  useEffect(() => {
    dispatch(loadUserInfo(history));
  }, [ dispatch ,history ]);
  return (
    <Router>
      <div className="home">
        <div className="user-container">
          <div className="user-left">
            <div className="avatar-box">
              <img alt="" src={ userInfo.avatar } />
              <span>{userInfo.username}</span>
            </div>
            <div className="control">
              <Link to='/user/tabuser' onClick={ ()=>{setTab('/user/tabuser');} } style={{ backgroundColor :tab === '/user/tabuser' ? '#494ca2' : '' }}>
                <span className={ 'leftspan' } >个人中心</span>
              </Link>
              <Link to='/user/tabmall' onClick={ ()=>{setTab('/user/tabmall');} } style={{ backgroundColor :tab === '/user/tabmall' ? '#494ca2' : '' }}>
                <span className={ 'leftspan' } >积分商城</span>
              </Link>
            </div>
          </div>
          <div className="user-main">
            <Switch>
              <Route path='/user/tabuser'>
                <User/>
              </Route>
              <Route path='/user/tabmall'>
                <Mall/>
              </Route>
              <Route path='/user'>
                <Redirect to='/user/tabuser'></Redirect>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>);}
