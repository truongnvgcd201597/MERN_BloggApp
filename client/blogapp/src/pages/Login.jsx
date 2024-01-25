import React from "react";

export default function Login() {
  return (
    <div className="login-page">
      <h2 className="login-title">Login</h2>
      <form action="" className="login-form">
        <label>Username</label>
        <input type="text" alt="username" required />
        <br />
        <label>Password</label>
        <input type="password" alt="password" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
