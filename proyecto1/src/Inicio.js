import React, { useState } from 'react';
import './Inicio.css';
import gato1 from './gato1.png';

const Inicio = ({ username, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`container ${menuOpen ? 'open' : ''}`}>
      <div className="sidebar">
        <button className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        {menuOpen && (
          <div className="menu-items"> 
            <button>Inicio</button> 
            <button>Perfil</button> 
            <button>Configuración</button> 
            <button onClick={onLogout}>Cerrar Sesión</button>
          </div>
        )}
      </div>
      <div className={`content ${menuOpen ? 'hidden' : ''}`}>
        <h2 style={{ color: '#BA55D3' }}>Bienvenido, {username}!</h2>
        <h3 style={{ color: '#BA55D3' }}>Hola</h3>
        <img src={gato1} alt="Gato" />
        <p style={{ color: '#9932CC' }}>{username}</p>
      </div>
    </div>
  );
};

export default Inicio;

