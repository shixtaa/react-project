import request from '../Common/request';
import { host } from '../Common/config';
export async function exchange (value){
  const result = await request({
    url: `${host}/shop/exchange`,
    method:'put',
    data:{
      id:value
    }
  });
  return result;
}