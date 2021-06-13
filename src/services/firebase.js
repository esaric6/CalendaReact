import firebase from "firebase/app";
import "firebase/firestore";

//  Ucitavanje postavki za Firebase vezu (iz .env)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

firebase.initializeApp(firebaseConfig);

//  Kreiranje Firestore instanci, koje se spremaju u varijablu "database"
const database = firebase.firestore();
database.enablePersistence();

export default database;
