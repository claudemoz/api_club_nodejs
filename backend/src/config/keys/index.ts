import fs from 'fs';

export default {
  key: fs.readFileSync('./src/config/keys/private.pem'),
  keyPub: fs.readFileSync('./src/config/keys/public.pem'),
};

