// doppler-secrets.js

const https = require('https')

export const getSecrets = async () => {

  const token = 'dp.st.dev.me37A0iJg6AwHEWnrJ0MMDaC0q1duoVU5SUJ08afjJC';

  return new Promise(function(resolve, reject) {
    https.get(`https://${token}@api.doppler.com/v3/configs/config/secrets/download?format=json`, (res) => {
      let secrets = ''
      res.on('data', (data) => secrets += data);
      res.on('end', () => resolve(JSON.parse(secrets)))
    }).on('error', (e) => reject(e))
  })

}