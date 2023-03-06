import * as https from 'https'
import * as querystring from 'querystring'
import md5 from 'md5';

export const translate = (word: string) => {
  console.log('current word', word);

  const appId = ''
  const appSecret = ''
  const salt = Math.random()
  const sign = md5(appId + word + salt + appSecret)

  const query: string = querystring.stringify({
    q: word,
    from: 'en',
    to: 'zh',
    appid: appId,
    salt: Math.random(),
    sign: sign
  })

  const options = {
    hostname: 'api.fanyi.baidu.com',
    port: 443,
    path: '/api/trans/vip/translate',
    method: 'GET'
  }

  const req = https.request(options, (res) => {
    res.on('data', (d) => {
      process.stdout.write(d)
    })
  })

  req.on('error', (e) => {
    console.error(e);
  })
  req.end()
}