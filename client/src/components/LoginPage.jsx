import { useState } from "react";
import { useNavigate } from "react-router-dom";

const loginPage = () => {
  const navigate = useNavigate();

  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="box login-box">
      <h1>Login</h1>
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
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="input input-password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          required
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default loginPage;
