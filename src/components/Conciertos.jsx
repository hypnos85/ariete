import React, { useEffect } from 'react';
import '../styles/Conciertos.css';

const Conciertos = () => {
  
  useEffect(() => {
    // Cargar el script de Songkick
    const script = document.createElement('script');
    script.src = "//widget-app.songkick.com/injector/10215263";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonte
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="centro">
      <h1>Äriete Directos</h1>
      <a 
        href="https://www.songkick.com/artists/10215263" 
        className="songkick-widget" 
        data-theme="dark" 
        data-track-button="on" 
        data-detect-style="off" 
        data-background-color="rgb(0,0,0,1)" 
        data-font-color="rgb(255,255,255,1)" 
        data-button-bg-color="rgb(255,255,255,1)" 
        data-button-text-color="rgb(0,0,0,1)" 
        data-locale="en" 
        data-other-artists="on" 
        data-share-button="on" 
        data-country-filter="on" 
        data-rsvp="on" 
        data-request-show="on" 
        data-past-events="off" 
        data-past-events-offtour="off" 
        data-remind-me="off" 
        style={{ display: 'none' }}
      ></a>
    </div>
  );
};

export default Conciertos;
