import React, { useState } from "react";
import "../stylesheet/Form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  // handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/signup",
        formData
      );
      const user = res.data.user;
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate(`/profile/${user.id}`);

      console.log(res.data);
      alert("Signup successful");
    } catch (error: any) {
      console.error(error.response?.data || error.message);
      alert("Signup failed");
      const msg = error.response?.data?.message || "Signup failed";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form main_padding">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        {error && <p className="error-text">enter valid name</p>}
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        {error && <p className="error-text">enter valid email</p>}
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <p className="error-text">enter valid password</p>}
        <button className="d_btn" type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
