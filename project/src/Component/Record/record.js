import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadRecord } from './state/action';
import './record.css';

import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import Moment from 'moment';

export default function Exchange () {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.exchange.list);
  useEffect(() => {
    dispatch(loadRecord());
  }, [ dispatch ]);
  /* 放上list一直在load？ */

  function renderList (){
    return _.map(list,(item)=>{
      return (
        <div className="per-record"  key={ uuidv4() }>
          <div className="record-left" >
            <p>{item.name}</p>
          </div>
          <div className="record-right">
            {Moment(item.exchangeDate).format('YYYY-MM-DD HH:mm')}
          </div>
        </div>
      );
    });
  }
  return (
    <div className="exchange-container">
      {renderList()}
    </div>
  );
}
