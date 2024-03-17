import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

const LoginPage = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleOverlayBtnClick = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Successfully Logged In!");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  const overlayBtnText = isRightPanelActive ? "Sign In" : "Sign Up";

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userId = userCredential.user.uid;

      // Storing user information in Firebase
      await setDoc(doc(db, "users", userId), {
        name: name,
        email: email,
      });

      alert("Successfully Signed Up!");
      setEmail("");
      setPassword("");
      setName("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="main-container">
      <div
        className={`container ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
      >
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /> <br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /> <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignUp}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /> <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#" className="forgot">
              Forgot your password?
            </a>
            <button onClick={handleSignIn}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To stay connected with us, please log in with your personal info</p>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>"Embrace the journey ahead"</h1>
              <p>Every great idea starts with a blank page</p>
            </div>
          </div>
          <button id="overlayBtn" onClick={handleOverlayBtnClick}>
            {overlayBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
