import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Colores comunes
const colors = {
  primary: "#FF6A00", // Naranja cálido para fondos y énfasis
  secondary: "#FF4500", // Naranja más fuerte para algunos detalles
  text: "#FFFFFF", // Blanco para texto
  hover: "#FF8C00", // Color para hover
  darkBackground: "#222222", // Fondo oscuro para el header y pie
  lightBackground: "#333333", // Fondo más claro para contenedores y botones
};

// Animación de pulso para el botón de copiar
const pulseAnimation = keyframes`
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

// Estilos para el contenedor del contrato
const ContractContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${colors.lightBackground};
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 1rem;
  border: 2px solid ${colors.primary}; // Borde con color primario
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.darkBackground};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

// Estilo del texto del contrato (para truncar el texto)
const ContractText = styled.span`
  color: ${colors.text};
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 200px;
  display: inline-block;
`;

// Estilo para el botón de copiar
const CopyButton = styled.button`
  background: none;
  border: none;
  color: ${colors.text};
  cursor: pointer;
  font-size: 1.2rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.hover};
    animation: ${pulseAnimation} 1s infinite;
  }

  &:focus {
    outline: none;
  }
`;

interface ContractAddressProps {
  contractAddress: string;
  onCopy: (onCopy:boolean) => void;  // Prop para manejar el copiado
}

const ContractAddress: React.FC<ContractAddressProps> = ({ contractAddress, onCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setIsCopied(true);
    onCopy(true);
    // Mostrar mensaje de éxito por 2 segundos
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  // Función para truncar el contrato (mostrar primeros y últimos 8 caracteres)
  const truncateContract = (contract: string) => {
    const firstPart = contract.slice(0, 8);  // Primeros 8 caracteres
    const lastPart = contract.slice(-8);     // Últimos 8 caracteres
    return `${firstPart}...${lastPart}`;     // Concatenar y truncar el medio
  };

  return (
    <ContractContainer>
      <ContractText>{isCopied ? truncateContract(contractAddress) : truncateContract(contractAddress)}</ContractText> {/* FIX */}
      <CopyButton onClick={copyToClipboard}>
        {isCopied ? '✅' : '📋'}
      </CopyButton>
    </ContractContainer>
  );
};

export default ContractAddress;
