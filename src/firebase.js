import { initializeApp} from 'firebase/app';
import { getAuth} from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyAkkpkhJNlD05OHTtuFGkYd68oV6fyX9N4",
    authDomain: "login-bc851.firebaseapp.com",
    projectId: "login-bc851",
    storageBucket: "login-bc851.appspot.com",
    messagingSenderId: "48933473507",
    appId: "1:48933473507:web:f70b183ad5a346ec8149d6",
    measurementId: "G-KY35QDL5B5",
    databaseURL: "https://login-bc851-default-rtdb.firebaseio.com"
  };

  export const app=initializeApp(firebaseConfig);
  export  const auth = getAuth(app);