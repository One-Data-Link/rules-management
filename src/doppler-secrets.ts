// doppler-secrets.js

const https = require('https')

export const getSecrets = async () => {

  const token = 'dp.st.dev.M6uIQH9kTFJx3RlHVajwSZ66j5pWV9t3RiDi9xzV0gg';

  return new Promise(function(resolve, reject) {
    https.get(`https://${token}@api.doppler.com/v3/configs/config/secrets/download?format=json`, (res) => {
      let secrets = ''
      res.on('data', (data) => secrets += data);
      res.on('end', () => resolve(JSON.parse(secrets)))
    }).on('error', (e) => reject(e))
  })

}