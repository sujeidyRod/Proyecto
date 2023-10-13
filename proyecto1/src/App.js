import React, { useState } from 'react';
import './LoginForm.css';


const LoginForm = () => {
  const [username, setUsername] = useState('sujeidyoviedo@gmail.com');
  const [password, setPassword] = useState('sujey123');

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Correo Electronico</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
