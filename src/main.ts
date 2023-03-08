import * as https from 'https'
import * as querystring from 'querystring'
import md5 from 'md5';
import { appId, appSecret } from './private';

type BaiduTranslateRes = {
  error_code?: string;
  error_msg?: string;
  form: string;
  to: string;
  trans_result: {
    src: string;
    dst: string;
  }[]
}

export const translate = (word: string) => {
  const salt = Math.random()
  const sign = md5(appId + word + salt + appSecret)

  let from, to

  if (/[a-zA-Z]/.test(word[0])) {
    from = 'en'
    to = 'zh'
  } else {
    from = 'zh'
    to = 'en'
  }

  const query: string = querystring.stringify({
    q: word,
    from,
    to,
    appid: appId,
    salt: salt,
    sign: sign
  })

  const options = {
    hostname: 'api.fanyi.baidu.com',
    port: 443,
    path: '/api/trans/vip/translate?' + query,
    method: 'GET'
  }

  const request = https.request(options, (response) => {
    const chunks: any = []
    response.on('data', (chunk) => {
      chunks.push(chunk);
    })
    response.on('end', () => {
      const string = Buffer.concat(chunks).toString()
      const transRes: BaiduTranslateRes = JSON.parse(string)
      if (transRes.error_code) {
        console.log(transRes.error_msg);
        process.exit(2)
      } else {
        transRes.trans_result.map(item => {
          console.log(item.dst);
        })
        process.exit(0)
      }
    })
  })

  request.on('error', (e) => {
    console.error(e);
  })
  request.end()
}