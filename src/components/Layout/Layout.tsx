import React, { useState } from "react";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackgroundFlames from "../BackgroundFlames/BackgroundFlames";
import FlameToggleButton from "../FlameToggleButton/FlameToggleButton";
import InteractiveLogoBackground from "../InteractiveLogoBackground/InteractiveLogoBackground";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #f5f5f5; /* Texto claro */
  background-color: #121212; /* Fondo oscuro */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative; /* Necesario para contener elementos absolutamente posicionados */
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #121212; /* Fondo oscuro */
  color: #f5f5f5; /* Texto claro */
  position: relative; /* Asegura que el Main tenga un contexto de apilamiento para las llamas */
`;

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [areFlamesActive, setAreFlamesActive] = useState(true); // Estado para las llamas

  // Función para activar o desactivar las llamas
  const handleFlameToggle = (isActive: boolean) => {
    setAreFlamesActive(isActive);
  };

  return (
    <Container>
      <Header />
      <Main>
        {areFlamesActive && <BackgroundFlames />} {/* Mostrar las llamas solo si están activadas */}
        {children} {/* Aquí se renderiza el contenido principal */}
        <FlameToggleButton onToggle={handleFlameToggle} isActive={areFlamesActive} /> {/* Botón para activar/desactivar las llamas */}
      </Main>
      <Footer />
        <InteractiveLogoBackground />
    </Container>
  );
};

export default Layout;
