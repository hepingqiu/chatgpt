/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-03-30 10:39:47
 * @FilePath: \chatgpt\src\api\request.js
 */
import axios from "axios";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers['Authorization'] = 'Bearer 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'

// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: 'https://api.openai.com/v1/chat/completions',
    // 超时
    timeout: 60000 //10s
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

export async function httpPost(data) {
    data.model = 'gpt-3.5-turbo';
    console.log(data)
    const rsp = await service.post('',data);
    return rsp ;
}
