import React from "react";
import styled, { keyframes, css } from "styled-components";

// Animación para el efecto de pulsación del botón
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Botón flotante para activar/desactivar las llamas
const Button = styled.button<{ isActive: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  border: 2px solid #ff4500;
  border-radius: 50%;
  padding: 15px;
  font-size: 24px;
  cursor: pointer;
  color: #ff4500;
  z-index: 10;
  box-shadow: 0 0 10px rgba(255, 69, 0, 0.7);
  animation: ${pulse} 1.5s ease-in-out infinite;
  transition: background-color 0.3s, box-shadow 0.3s;

  /* Efecto de fondo de fuego al hacer hover */
  &:hover {
    background-color: #ff4500;
    color: #fff;
    box-shadow: 0 0 15px rgba(255, 69, 0, 0.9), 0 0 25px rgba(255, 69, 0, 0.5);
  }

  /* Efecto cuando el botón está activo */
  ${({ isActive }) =>
    isActive &&
    `
    background-color: #ff4500;
    color: #fff;
    box-shadow: 0 0 15px rgba(255, 69, 0, 0.9), 0 0 25px rgba(255, 69, 0, 0.5);
  `}
`;

interface FlameToggleButtonProps {
  onToggle: (isActive: boolean) => void;
  isActive: boolean;
}

const FlameToggleButton: React.FC<FlameToggleButtonProps> = ({ onToggle, isActive }) => {
  return (
    <Button
      isActive={isActive}
      onClick={() => onToggle(!isActive)} // Cambiar el estado de las llamas
    >
      🔥
    </Button>
  );
};

export default FlameToggleButton;
