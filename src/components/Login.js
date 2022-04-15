import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const loginResponse = await axios.get(
      `http://localhost:8080/user/search/findByUsername?username=${username}`
    );

    const userData = loginResponse.data._embedded.user[0];
    console.log(userData);

    if (password === userData.password) {
      localStorage.setItem("user", userData);

      navigate("/");
      window.location.reload();
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <div className="SignIn">
      <form className="SignInForm" onSubmit={handleSubmit}>
        <h1>SignIn</h1>
        <label htmlFor="username">Username:</label>
        <input
          ref={usernameRef}
          name="username"
          type="text"
          placeholder="username"
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          ref={passwordRef}
          type="password"
          placeholder="password"
        ></input>
        <button type="submit">Submit</button>
      </form>
      <Link to="/signup">
        <button id="signup">SignUp</button>
      </Link>
      {errorMessage && <p>username or password not found</p>}
    </div>
  );
}

export default Login;
