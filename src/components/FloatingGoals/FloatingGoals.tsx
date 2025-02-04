import React from "react";
import styled from "styled-components";

// Estilos para los botones flotantes
const FloatingGoalContainer = styled.div`
  position: fixed;
  left: 20px; /* Espacio desde el borde izquierdo */
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const GoalButton = styled.button<{ isSelected: boolean }>`
  padding: 15px 25px;
  background: ${({ isSelected }) => (isSelected ? "linear-gradient(145deg, #ff6a00, #ff4500)" : "#444")};
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: ${({ isSelected }) => (isSelected ? "0 6px 18px rgba(255, 106, 0, 0.5)" : "0 2px 6px rgba(0, 0, 0, 0.1)")};
  transition: all 0.3s ease-in-out, transform 0.3s ease;
  width: 140px;
  text-align: center;
  position: relative; /* Necesario para el emoticono de fuego */

  /* Efecto de hover */
  &:hover {
    background: linear-gradient(145deg, #ff4500, #ff6a00);
    box-shadow: 0 8px 24px rgba(255, 106, 0, 0.5);
    transform: scale(1.1); /* Aumento pequeño en el hover */
  }

  /* Efecto de enfoque */
  &:focus {
    outline: none;
    box-shadow: 0 0 10px 2px rgba(255, 106, 0, 0.7);
  }

  /* Agregar el emoticono de fuego cuando está seleccionado */
  &::after {
    content: ${({ isSelected }) => (isSelected ? "'🔥'" : "''")}; /* Emoticono de fuego */
    position: absolute;
    top: 50%;
    right: -40px; /* Mayor separación del borde del botón */
    transform: translateY(-50%) scale(${({ isSelected }) => (isSelected ? 1.1 : 1)});
    font-size: 1.8rem;
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
    transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
    color: ${({ isSelected }) => (isSelected ? "#ff4500" : "transparent")};
  }

  /* Efecto cuando está seleccionado */
  ${({ isSelected }) =>
    isSelected &&
    `
      animation: pulse 1.5s infinite;
  `}

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 6px 18px rgba(255, 106, 0, 0.5);
    }
    50% {
      transform: scale(1.1);
      box-shadow: 0 8px 24px rgba(255, 106, 0, 0.7);
    }
  }
`;

type GoalButtonProps = {
  goals: { label: string; value: number }[];
  selectedGoal: number;
  handleGoalChange: (goalValue: number) => void;
};

const FloatingGoals: React.FC<GoalButtonProps> = ({ goals, selectedGoal, handleGoalChange }) => {
  return (
    <FloatingGoalContainer>
      {goals.map((goal) => (
        <GoalButton
          key={goal.value}
          isSelected={goal.value === selectedGoal}
          onClick={() => handleGoalChange(goal.value)}
        >
          {goal.label}
        </GoalButton>
      ))}
    </FloatingGoalContainer>
  );
};

export default FloatingGoals;
