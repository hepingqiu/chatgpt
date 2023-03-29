/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-03-29 16:52:20
 * @FilePath: \chatgpt\src\api\request.js
 */
import axios from "axios";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: '',
    // 超时
    timeout: 10000 //10s
})


export function httpGet(data) {
  return service
    .get("", data)
    .then((rsp) => {
      console.log(rsp);
      return rsp;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function httpPost(data) {
  return service
    .post("", data)
    .then((rsp) => {
      console.log(rsp);
      return rsp;
    })
    .catch((err) => {
      console.log(err);
    });
}
