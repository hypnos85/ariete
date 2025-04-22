import React from 'react';
import '../styles/Contacto.css';

const Contacto = () => {
  return (
    <div className="centro">
      <h1>Contacto</h1>
      <p>¡Gracias por visitar nuestro sitio web! Si tienes alguna pregunta o comentario, no dudes en contactarnos a través de los siguientes medios:</p>
      
      <div className="contact-info">
        <p><strong>Email:</strong> contacto@ariete.com</p>
        <p><strong>Teléfono:</strong> +123 456 7890</p>
        <p><strong>Redes Sociales:</strong> 
          <ul>
            <li><a href="https://www.facebook.com/ariete" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/ariete" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com/ariete" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Contacto;
