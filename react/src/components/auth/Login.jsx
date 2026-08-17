import { useEffect, useState } from "react";
import { NavLink } from "react-router";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  return (
    <>
      <h3 className="auth-subtitle">Log In</h3>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          className="auth-input"
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="auth-input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button className="auth-submit-bttn" type="submit">
          Log In
        </button>

        <div className="auth-alternatives-container">
          <button className="alter-bttn" type="button">
            <NavLink to={"/password-recovery"}>Forgot your Password?</NavLink>
          </button>
          <button className="alter-bttn" type="button">
            <NavLink to={"/signup"}>Sign Up</NavLink>
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
