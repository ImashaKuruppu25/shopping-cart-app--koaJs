import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [phone, setPhone] = useState();
  const [number, setNumber] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/user/register", {
        name: name,
        email: email,
        password: password,
        role: role,
        phone: phone,
        number: number,
        street: street,
        city: city,
      });

      alert(res.data.msg);
     
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <div>
      <h1>Register User</h1>

      <form onSubmit={handleRegisterSubmit}>
        <label>
          name:
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />

        <label>
          Address:
          <br />
          street:
          <input
            type="text"
            name="street"
            onChange={(e) => setStreet(e.target.value)}
          />
          <br />
          number:
          <input
            type="text"
            name="number"
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          city:
          <input
            type="text"
            name="city"
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <br />
        <label>
          phone:
          <input
            type="mobile"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <label>
          email:
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          role:
          <input
            type="text"
            name="role"
            onChange={(e) => setRole(e.target.value)}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="register" />
      </form>
      
    </div>
  );
};

export default Register;
