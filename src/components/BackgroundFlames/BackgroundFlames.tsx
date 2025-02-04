import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

// Animación para que las llamas suban de forma continua
const riseUp = keyframes`
  0% {
    transform: translateY(100vh); /* Empieza fuera de la pantalla (abajo) */
    opacity: 0; /* Comienza invisible */
  }
  100% {
    transform: translateY(-100vh); /* Continúa subiendo hasta fuera de la pantalla (arriba) */
    opacity: 1; /* Se hace visible */
  }
`;

// Contenedor para la animación de las llamas
const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1; /* Aseguramos que esté adelante */
  pointer-events: none; /* No debería interferir con la interacción del usuario */
`;

const random = (max: number) => Math.random() * max;

interface FlameProps {
  left: number;
  size: number;
  delay: number;
  top: number;
}

// Componente Flame con propiedades dinámicas
const Flame = styled.div<FlameProps>`
  position: absolute;
  font-size: ${({ size }) => `${size}rem`};
  color: #ff4500;
  opacity: 0; /* Inicialmente oculto */
  animation: ${({ delay }) => css`${riseUp} 4s linear ${delay}s infinite`}; /* Animación continua */
  
  /* Posición aleatoria */
  left: ${({ left }) => `${left}%`};
  top: ${({ top }) => `${top}%`}; /* Aleatorizamos también la posición vertical */
`;

const BackgroundFlames: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Iniciar la animación después de unos segundos
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 2000); // Espera 2 segundos antes de iniciar la animación
    return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonte
  }, []);

  // Generación de llamas con propiedades aleatorias
  const flames = Array.from({ length: 30 }, (_, index) => ({
    left: random(100), // Posición horizontal aleatoria
    size: random(2) + 1, // Tamaño aleatorio de los emoticones
    delay: random(5), // Retraso aleatorio para la animación
    top: random(100), // Posición inicial vertical aleatoria
  }));

  return (
    <BackgroundContainer>
      {startAnimation &&
        flames.map((flame, index) => (
          <Flame
            key={index}
            left={flame.left}
            size={flame.size}
            delay={flame.delay}
            top={flame.top}
          >
            🔥
          </Flame>
        ))}
    </BackgroundContainer>
  );
};

export default BackgroundFlames;
