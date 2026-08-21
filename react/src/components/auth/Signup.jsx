import { useState } from "react";
import { Link } from "react-router";

function Signup() {
  const [data, setData] = useState({
    username: "",
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
      <h3 className="auth-subtitle">Sign Up</h3>

      <form onSubmit={handleSubmit}>
        <input
          className="auth-input"
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          className="auth-input"
          type="email"
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

        <button type="submit">Sign Up</button>

        <div className="auth-alternatives-container">
          <button className="alter-bttn" type="button">
            <Link to={"/login"}>Have you signed up yet?</Link>
          </button>
        </div>
      </form>
    </>
  );
}

export default Signup;
