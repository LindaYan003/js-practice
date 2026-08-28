import { useState } from "react";
import FormField from "./FormField";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({ email, password }); // swap this for a real login call
    }
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
        <FormField
          label="Email"
          id="email"
          value={email}
          onChange={setEmail}
          error={errors.email}
        />
        <FormField
          label="Password"
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={setPassword}
          error={errors.password}
        />
        <button type="button" onClick={() => setShowPassword(prev => !prev)}>
          {showPassword ? "Hide" : "Show"} password
        </button>
        <button type="submit">Log in</button>
      </form>
    </>
  );
}

export default LoginForm;
