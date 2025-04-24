// src/main.jsx
import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Asegúrate de que el archivo CSS esté importado
import App from './App.jsx';

const Root = () => {
  // Estado para la posición del ratón y la oscilación de las imágenes de fondo
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorOscillationFondo3, setCursorOscillationFondo3] = useState({ x: 0, y: 0 });
  const [cursorOscillationFondo1, setCursorOscillationFondo1] = useState({ x: 0, y: 0 });

  const oscilacionFactorFondo3 = 0.1; // Oscilación del 10% para fondo3
  const oscilacionFactorFondo1 = 0.05; // Oscilación del 5% para fondo1

  useEffect(() => {
    // Función para actualizar la posición del ratón
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    // Agregar el listener para el movimiento del ratón
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Función para actualizar la oscilación de los fondos
    const updateOscillations = () => {
      const deltaX = cursorPosition.x - window.innerWidth / 2;
      const deltaY = cursorPosition.y - window.innerHeight / 2;

      // Calcular la oscilación para fondo3 (10%)
      const oscillateX3 = deltaX * oscilacionFactorFondo3;
      const oscillateY3 = deltaY * oscilacionFactorFondo3;

      // Calcular la oscilación para fondo1 (5%)
      const oscillateX1 = deltaX * oscilacionFactorFondo1;
      const oscillateY1 = deltaY * oscilacionFactorFondo1;

      // Actualizar la posición de la oscilación de fondo3
      setCursorOscillationFondo3({
        x: oscillateX3,
        y: oscillateY3,
      });

      // Actualizar la posición de la oscilación de fondo1
      setCursorOscillationFondo1({
        x: oscillateX1,
        y: oscillateY1,
      });

      // Volver a llamar la función en el siguiente frame
      requestAnimationFrame(updateOscillations);
    };

    // Iniciar el loop de animación
    requestAnimationFrame(updateOscillations);

  }, [cursorPosition]);

  return (
    <>
      {/* Fondo 1 que se mueve ligeramente con una oscilación */}
      <div
        id="fondo1-image"
        style={{
          transform: `translate(-50%, -50%) translate(${cursorOscillationFondo1.x}px, ${cursorOscillationFondo1.y}px)`,
        }}
      />
      
      {/* Fondo 3 que se mueve ligeramente con una oscilación */}
      <div
        id="cursor-image"
        style={{
          transform: `translate(-50%, -50%) translate(${cursorOscillationFondo3.x}px, ${cursorOscillationFondo3.y}px)`,
        }}
      />
      
      <App />
    </>
  );
};

// Crear la raíz de la aplicación React
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
