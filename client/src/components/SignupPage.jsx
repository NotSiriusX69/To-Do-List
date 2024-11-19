import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="box signup-box">
      <h1>Sign Up</h1>
      <p>Please fill Credentials</p>
      <form action="">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="input input-text"
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="input input-email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="input input-password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          required
        />
        <button onClick={handleSignUp}>Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
