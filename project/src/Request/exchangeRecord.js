import request from '../Common/request';
import { host } from '../Common/config';
export async function exchangeRecord (){
  const result = await request({
    url:`${host}/shop/exchangedRecord`,
    method:'get',
    data:{
      id:'5f9138b87cac8518b1099c29'
    }
  });
  return result;
}