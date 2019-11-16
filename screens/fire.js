import firebase from 'firebase';

Config = {
    apiKey: "AIzaSyASr0XuvRC2K_btO_MN7J9mBJiC386Ctao",
    authDomain: "my-dog-app-36889.firebaseapp.com",
    databaseURL: "https://my-dog-app-36889.firebaseio.com",
    projectId: "my-dog-app-36889",
    storageBucket: "my-dog-app-36889.appspot.com",
    messagingSenderId: "815535862651",
    appId: "1:815535862651:web:37df0b50722f0b4e0283de"
  };

const fire = firebase.initializeApp(config);
export default fire;