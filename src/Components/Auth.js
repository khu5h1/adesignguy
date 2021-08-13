import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import fire from "./fire";
import Page1 from "./MainPage/Page1";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

function Auth() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/page1");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        handleClick();
        history.push("/page1");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  let history = useHistory();

  const handleLogout = () => {
    fire.auth().signOut();
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  useEffect(() => {
    authListener();
  }, []);

  return (
    <div>
      {user ? (
        <div> {history.push("/page1")}</div>
      ) : (
        <div>
          <Route path="/login">
            <Login
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
              open={open}
              setOpen={setOpen}
              handleClick={handleClick}
              handleClose={handleClose}
            />
          </Route>
          <Route path="/register">
            <Register
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
              open={open}
              setOpen={setOpen}
              handleClick={handleClick}
              handleClose={handleClose}
            />
          </Route>
        </div>
      )}
    </div>
  );
}

export default Auth;
