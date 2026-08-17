import { useEffect, useState } from "react";
import { NavLink } from "react-router";

function Login() {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  return (
    <>
      <h3>Log In</h3>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">Log In</button>

        <div>
          <button type="button">
            <NavLink>Forgot your Password?</NavLink>
          </button>
          <button type="button">
            <NavLink>Sign Up</NavLink>
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
