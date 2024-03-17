// import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
// eslint-disable-next-line no-unused-vars
// import signupPage from './Pages/SignUp';
// eslint-disable-next-line no-unused-vars
import { app } from './firebase';
import SigninPage from './Pages/Signin';
import './App.css';
// import SignupPage from './Pages/SignUp';
import LoginPage from './Pages/Signin';

// const auth = getAuth(app);

function App() {
  // const signupUser = () => {
  //   createUserWithEmailAndPassword(auth, 'sonugupta6045@gmail.com', 'Gupta9284')
  //     .then((value) => {
  //       console.log(value);
  //     })
  //     .catch((error) => {
  //       console.error('Error creating user:', error);
  //     });
  // };

  return (
    <div className="App">
      {/* eslint-disable-next-line no-unused-vars */}
      {/* <SignupPage /> */}
      <LoginPage/>
    </div>
  );
}

export default App;
