import React ,{ useEffect ,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
/* 图片/css */
import './mall.css';
import img5 from '../../Assets/img5.png';
/* action */
import { loadUserInfo } from '../../Feature/UserCenter/state/action';
import { loadShop,putExchange } from './state/action';

import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { Modal, Button } from 'antd';

// import { exchange } from '../../Request/exchange';

export default function Mall () {
  const userInfo = useSelector(state=>state.user.userInfo);
  const mall = useSelector(state=>state.mall.shopList);
  const dispatch = useDispatch();
  const history = useHistory();
  const [ alert,setAlert ] = useState({
    ModalText: '确认兑换？',
    visible: false,
    // confirmLoading: false,
    flag:false
  });
  useEffect(() => {
    dispatch(loadUserInfo(history));
    dispatch(loadShop(history));
  }, [ history,dispatch,alert.flag ]);
  /* 提示框 */
  async function handleOk (){
    await dispatch(putExchange(alert.id1));
    setAlert({
      ...alert,
      visible:false,
      flag:!alert.flag
    });
  }
  function handleCancel (){
    setAlert({
      ...alert,
      visible: false,
      id:''
    });
  }
  function renderShopList (){
    return _.map(mall.list,(item)=>{
      return (
        <div className="per-item" key={ uuidv4() }>
          <img src={ item.image }  alt="menu-img" />
          <p>{item.name}</p>
          <div className="item-ft">
            <div>
              <img src={ img5 } alt=""/>
              <span>{item.price}积分</span>
            </div>
            {/* <button className="exchange-btn" type="text" onClick={ ()=>{
              console.log(item._id);
              exchange(item._id);
            } }>兑换</button> */}
            <Button className="exchange-btn" type="primary" onClick={ ()=>{setAlert({ ...alert,visible: true ,id:item._id  });} }>
              兑换
            </Button>
            <Modal
              title="提示"
              visible={ alert.visible }
              onOk={ handleOk }
              onCancel={ handleCancel }
            >
              <p>{alert.ModalText}</p>
            </Modal>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="mall-container">
      <div className="mall-nav">商城</div>
      <div className="mall-main">
        <div className="mall-hd">
          <h3 style={{ color :'#fff' }}>当前积分</h3>
          <span>{userInfo.integration}</span>
        </div>
        <p>商品列表</p>
        <div className="item-list">
          {renderShopList()}
        </div>
      </div>
    </div>
  );
}
