import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de React Router
import '../styles/Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      {/* Left menu */}
      <div className="menu-esquina home">
        <Link to="/">Home</Link> {/* Link a la ruta principal */}
      </div>
      <div className="menu-centro izquierda">
        <Link to="/musica">Música</Link> {/* Link a la página de Música */}
      </div>
      <div className="menu-esquina contacto">
        <Link to="/contacto">Contacto</Link> 
      </div>

      {/* Right menu */}
      <div className="menu-esquina conocenos">
        <Link to="/conocenos">Conócenos</Link>
      </div>
      <div className="menu-centro derecha">
        <Link to="/conciertos">Conciertos</Link>
      </div>
      <div className="menu-esquina videos">
        <Link to="/videos">Videos</Link>
      </div>
    </div>
  );
};

export default Menu;
