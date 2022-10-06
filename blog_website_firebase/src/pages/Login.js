import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();
  
  const signInWIthGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="loginPage">
      <p>Sign In With Goolge to Continue</p>
      <button className="login-with-google-btn" onClick={signInWIthGoogle}>
        Sign in with Goolge
      </button>
    </div>
  );
};

export default Login;
