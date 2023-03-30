import axios from "axios";

// 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
const secret_key = "c2stcnU1VFByajBvaHhMSUVGekxuOWxUM0JsYmtGSnVudHEwWXY1UTlPTk9GdUVHdFp4";
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers['Authorization'] = `Bearer ${atob(secret_key)}`

// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: '/pro', //https://api.openai.com/v1/chat/completions
    // 超时
    timeout: 120000 //10s
})

export async function httpProxyPost(content) {
    var data = JSON.stringify({
        "apiKey": `${atob(secret_key)}`,
        "sessionId": "8d1cb9b0-d535-43a8-b738-4f61b1608570",
        "content": content,
      });
    const rsp = await service.post('/chat/completions',data);
    return rsp ;
}