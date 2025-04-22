import React from 'react';
import '../styles/Musica.css';

const Music = () => {
  return (
    <div className="centro">
      <h1>Temazos</h1>

      <div className="iframes-container">
        <iframe 
          title="Temazo 1"
          src="https://open.spotify.com/embed/album/4uet508cLVWFdEZpyygfDm?utm_source=generator" 
          className="spotify-iframe"
          frameBorder="0" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
  
        <iframe 
          title="Temazo 2"
          src="https://open.spotify.com/embed/album/0oMguD23egZRjjLMkRJXa0?utm_source=generator" 
          className="spotify-iframe"
          frameBorder="0" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
  
        <iframe 
          title="Temazo 3"
          src="https://open.spotify.com/embed/album/31SbvYdHROZTDH4Jb3tYuD?utm_source=generator" 
          className="spotify-iframe"
          frameBorder="0" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default Music;
