import React from 'react';
import '../styles/Contacto.css';

const Contacto = () => {
  return (
    <div className="centro">
      <h1>Contacto</h1>
      <p>Si estas interesad@ en contratarnos o simplemente tienes alguna pregunta no dudes en contactarnos a través de los siguientes medios:</p>
      
      <div className="contact-info">
        <p><strong>Email:</strong> contrataciones@ariete.com</p>
        <p><strong>Teléfono:</strong> +34 634 456 780</p>
        <p><strong>Redes Sociales:</strong> 
          <ul>
            <li><a href="https://www.youtube.com/@%C3%84RIETE_BAND" target="_blank" rel="noopener noreferrer">Youtube</a></li>
            <li><a href="https://www.instagram.com/ariete" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </p>
        <p>¡Gracias por visitar nuestro sitio web!</p>
      </div>
    </div>
  );
};

export default Contacto;
