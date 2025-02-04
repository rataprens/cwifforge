import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import FloatingGoals from "../FloatingGoals/FloatingGoals";

// Animación para simular llamas en el fondo
const fireBackgroundAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Animación de pulso para el contenedor
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05); /* Leve aumento */
  }
  100% {
    transform: scale(1);
  }
`;

// Styled Components
const ProgressBarContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  /* Fondo animado con gradiente para simular fuego */
  background: linear-gradient(
    145deg,
    #ff4500,
    #ff6a00,
    #ff8c00,
    #ff4500,
    #ff0000
  );
  background-size: 200% 200%;
  animation: ${fireBackgroundAnimation} 4s infinite linear, ${pulseAnimation} 2s ease-in-out infinite;
`;

const ProgressText = styled.p`
  font-family: "Changa";
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 1px;
`;

const BarContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 25px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const Bar = styled.div<{ progress: number }>`
  height: 100%;
  background: linear-gradient(90deg, #ffa07a, #ff4500, #ff6347);
  background-size: 200% 100%;
  width: ${({ progress }) => progress}%;
  transition: width 0.8s ease-in-out;
`;

const PercentageText = styled.div`
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
`;

const Tooltip = styled.div<{ progress: number }>`
  position: relative;
  top: -35px;
  left: ${({ progress }) => progress}%;
  transform: translateX(-50%);
  background-color: #663399;
  color: #fff;
  font-family: 'Raleway', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 5px 10px;
  border-radius: 6px;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #663399 transparent transparent transparent;
  }
`;

const ProgressBar: React.FC<{ circulatingSupply: number | null }> = ({ circulatingSupply }) => {
  const [selectedGoal, setSelectedGoal] = useState(30_000_000_000_000); // Meta por defecto: 30 trillones
  const [progress, setProgress] = useState(0);

  // Definimos las nuevas metas en el orden que solicitaste
  const goals = [
    { label: "30 Trillion", value: 30_000_000_000_000 },
    { label: "10 Trillion", value: 10_000_000_000_000 },
    { label: "1 Trillion", value: 1_000_000_000_000 },
    { label: "500 Billion", value: 500_000_000_000 },
    { label: "100 Billion", value: 100_000_000_000 },
  ];

  const handleGoalChange = (goalValue: number) => {
    setSelectedGoal(goalValue);
  };

  useEffect(() => {
    if (circulatingSupply) {
      const percentage = ((circulatingSupply - selectedGoal) / circulatingSupply) * 100;
      const calculatedProgress = Math.max(100 - percentage, 0); // Progreso hacia la meta (inverso del porcentaje)
      setProgress(calculatedProgress);
    }
  }, [circulatingSupply, selectedGoal]);

  return (
    <>
      <ProgressBarContainer>
        <ProgressText>
          {`Progress: ${progress.toFixed(2)}% toward ${goals.find((goal) => goal.value === selectedGoal)?.label} | ${(100 - progress).toFixed(
            2
          )}% remaining`}
        </ProgressText>

        <BarContainer>
          <Bar progress={progress}>
            <Tooltip progress={progress}>{`${progress.toFixed(2)}%`}</Tooltip>
          </Bar>
          <PercentageText>{`${progress.toFixed(2)}%`}</PercentageText>
        </BarContainer>
      </ProgressBarContainer>

      {/* Componente separado de los botones flotantes, fuera del contenedor ProgressBar */}
      <FloatingGoals
        goals={goals}
        selectedGoal={selectedGoal}
        handleGoalChange={handleGoalChange}
      />
    </>
  );
};

export default ProgressBar;
