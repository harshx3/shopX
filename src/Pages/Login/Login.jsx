import React, { useState } from 'react'
import './Login.css';
import { useAuth } from '../../components/Authenticator/Authenticator';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useAuth();

   const loginHandler = (e)=>{
    e.preventDefault();
      login(username, password);
   }

    

  return (
    <div className="login-container">
        <div className="login-header">
            <h2>Login</h2>
        </div>
        <div className="login-form">
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="email" id="username" name="username" onChange={(e)=> setUsername(e.target.value)} value={username} required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)} value={password} required />
            </div>
            <div className="form-group">
                <button type="submit" onClick={loginHandler}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login