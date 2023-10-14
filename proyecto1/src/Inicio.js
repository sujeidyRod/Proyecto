import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './LoginForm.css';

const Inicio = ({ username, onLogout }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    onLogout();
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <h2>Bienvenido, {username}!</h2>
      <div className="header">
        <button onClick={toggleMenu} className="menu-button">
          <GiHamburgerMenu />
        </button>
      </div>

      {showMenu && (
        <div className="menu" onClick={toggleMenu}>
          <ul>
            <li>Inicio</li>
            <li>Perfil</li>
            <li>Configuraciones</li>
            <li onClick={handleLogout}>Cerrar Sesión</li>
          </ul>
        </div>
      )}

      <div className="content">
        <h3>Título de la página</h3>
        <p>Contenido de la página.</p>
      </div>
    </div>
  );
};

export default Inicio;
