import React, { useState } from "react";
import axios from "axios";
import Register from "../components/Register";

const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/user/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("firstLogin", true);
      window.sessionStorage.setItem("_t@ken", res.data.accesstoken);
      window.location.href = "/";
      alert(res.data.msg);
    } catch (err) {
      alert(err.response.data);
    }
  };



  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={(e) => setemail(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <input type="submit" value="login" />
      </form>
      <Register />
    </div>
  );
};

export default LoginPage;
