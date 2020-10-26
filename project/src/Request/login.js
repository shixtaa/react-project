import request from '../Common/request';
import { host } from '../Common/config';
export async function login (userInfo){
  const result = await request({
    url: `${host}/user/login`,
    method:'post',
    data:userInfo
  });
  return result;
}