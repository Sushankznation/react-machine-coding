import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Succefully");
    setEmail("");
    setPassword("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email Here.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter Password Here..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {showPassword ? (
          <FaEyeSlash onClick={togglePasswordVisibility} />
        ) : (
          <FaEye onClick={togglePasswordVisibility} />
        )}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
