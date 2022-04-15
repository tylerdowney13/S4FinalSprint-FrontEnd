import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const userObject = {
      username: username,
      email: email,
      password: password,
      authorized: true,
    };

    try {
      await axios.post("http://localhost:8080/user", userObject);
      console.log("New user created");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginSignupContainer">
      <div className="loginSignupTitleContainer">
        <span className="loginSignupTitle">Welcome to the Database!</span>
        <span className="loginSignupDescription"> Log-in or Sign-up</span>
      </div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="inputSignupContainer">
          <input
            className="loginSignupInput"
            type="text"
            name="username"
            placeholder="username"
            required
            ref={usernameRef}
          />
        </div>
        <div className="inputSignupContainer">
          <input
            className="loginInput"
            type="email"
            name="email"
            placeholder="email"
            required
            ref={emailRef}
          />
        </div>
        <div className="inputSignupContainer">
          <input
            className="loginInput"
            type="password"
            name="password"
            placeholder="password"
            required
            ref={passwordRef}
          />
        </div>
        <div className="loginSignupButtonsContainer">
          <button className="loginSignupBtn" type="submit">
            Sign-up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
