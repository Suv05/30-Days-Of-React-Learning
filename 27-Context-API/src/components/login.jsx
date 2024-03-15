import { useState, useContext } from "react";
import userContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userContext);

  let handelOnClick = (e) => {
    e.preventDefault();
    setUser({username,password});
  };
  return (
    <div>
      <h2>LOGIN</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handelOnClick}>
        submit
      </button>
    </div>
  );
}
export default Login;
