// doppler-secrets.js

const https = require('https')

export const getSecrets = async () => {

  const token = 'dp.st.dev.XE1iSpTkuxxE6uJYJEmnQDIYQ6008TEfL3ZV0Kqp6c1';

  return new Promise(function(resolve, reject) {
    https.get(`https://${token}@api.doppler.com/v3/configs/config/secrets/download?format=json`, (res) => {
      let secrets = ''
      res.on('data', (data) => secrets += data);
      res.on('end', () => resolve(JSON.parse(secrets)))
    }).on('error', (e) => reject(e))
  })

}