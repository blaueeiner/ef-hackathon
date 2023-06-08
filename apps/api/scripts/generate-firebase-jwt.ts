import axios from 'axios';
import 'dotenv/config';
import * as admin from 'firebase-admin';

const uid = process.argv[2];

if (!uid) {
  throw new Error('You must specify a uid');
}

const projectId = process.env.PROJECT_ID;

admin.initializeApp({
  projectId,
  credential:
    process.env.NODE_ENV == 'production'
      ? admin.credential.applicationDefault()
      : admin.credential.cert(process.env.SERVICE_ACCOUNT_KEY),
  storageBucket: `${projectId}.appspot.com`,
});

admin
  .auth()
  .createCustomToken(uid)
  .then((customToken) => {
    const data = {
      token: customToken,
      returnSecureToken: true,
    };

    axios
      .post(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=${process.env.FIREBASE_API_KEY}`,
        data,
      )
      .then((response) => {
        const idToken = response.data.idToken;
        console.log('Verified JWT:', idToken);
      })
      .catch((error) => {
        console.error('Error verifying JWT:', error);
      });
  })
  .catch((error) => {
    console.error('Error generating JWT:', error);
  });
