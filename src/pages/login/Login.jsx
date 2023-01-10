import React from 'react'
import "./login.scss";

export default function Login() {
  return(
    <div class="login-wrapper">
    <form action="" class="form">
      <h2>LOG IN</h2>
      <img src="../img/logoa.png" alt='Alphacles Site' />
      <div class="input-group">
        <input type="text" name="loginUser" id="loginUser" required />
        <label for="loginUser">User Name</label>
      </div>
      <div class="input-group">
        <input type="text" name="email" id="email" required />
        <label for="email">Email</label>
      </div>
      
      <div class="input-group">
        <input
          type="password"
          name="loginPassword"
          id="loginPassword"
          required
        />
        <label for="loginPassword">Password</label>
      </div>
      <input type="submit" value="Login" class="submit-btn" />
    </form>
  </div>
  )
}

