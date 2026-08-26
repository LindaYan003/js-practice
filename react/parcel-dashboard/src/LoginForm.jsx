import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ username, password }); // swap this for a real login call
  }

  return (
<>
  <h1 style={{ textAlign: "center" }}>Login</h1>
  <form
    onSubmit={handleSubmit}
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      maxWidth: "250px",
      margin: "0 auto",
    }}
  >
    <input
      value={username}
      onChange={e => setUsername(e.target.value)}
      placeholder="Username"
    />
    <input
      type="password"
      value={password}
      onChange={e => setPassword(e.target.value)}
      placeholder="Password"
    />
    <button type="submit">Log in</button>
  </form>
</>
  );
}

export default LoginForm;