import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Importamos la imagen correctamente
import logoSrc from "../../assets/images/CWIF.png";

// Estilos para el contenedor del fondo
const BackgroundContainer = styled.div`
  position: fixed; /* Fijar el logo en la pantalla */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: none;
  pointer-events: none; /* Permite que el fondo no bloquee clics */
  z-index: 9999;
`;

// Estilos para el logo
const Logo = styled.img<{ xPos: number; yPos: number; angle: number; radius: number }>`
  position: absolute;
  top: ${({ yPos }) => yPos}px;
  left: ${({ xPos }) => xPos}px;
  width: 100px;
  height: 100px;
  z-index: 1000;
  transform-origin: center center;
  transform: ${({ angle }) => `rotate(${angle}deg)`};
  transition: transform 0.1s ease-in-out, top 0.5s ease, left 0.5s ease; /* Animación suave para mover */
  pointer-events: auto; /* Permite interacción con el logo */
`;

const InteractiveLogoBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0); // Ángulo de rotación constante
  const [radius, setRadius] = useState(50); // Distancia (radio) del logo desde el cursor
  const [isZooming, setIsZooming] = useState(false); // Si el logo está haciendo zoom

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle + 1); // Hacemos que el logo gire
    }, 10);

    return () => clearInterval(interval);
  }, []);

  // Manejar el movimiento del mouse
  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calcular la posición del logo alrededor del cursor
  const logoX = mousePosition.x + radius * Math.cos((angle * Math.PI) / 180);
  const logoY = mousePosition.y + radius * Math.sin((angle * Math.PI) / 180);

  // Manejar el clic para alejar/acercar el logo de manera suave
  const handleClick = () => {
    if (!isZooming) {
      setIsZooming(true);
      setRadius(150); // Alejar el logo

      setTimeout(() => {
        setRadius(50); // Volver a la distancia original
        setIsZooming(false);
      }, 1000); // Duración de la animación
    }
  };

  return (
    <BackgroundContainer>
      {/* El clic ahora se maneja en el logo, no en el contenedor */}
      <Logo
        src={logoSrc}
        alt="Logo"
        xPos={logoX - 50} // Centrar el logo
        yPos={logoY - 50} // Centrar el logo
        angle={angle} // Controla la rotación
        radius={radius} // Controla el radio de distancia
        onClick={handleClick} // Manejar clics en el logo
      />
    </BackgroundContainer>
  );
};

export default InteractiveLogoBackground;
