import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProgressBar from "../ProgressBar/ProgressBar";
import About from "../About/About";
import Donate from "../Donate/Donate";

// Colores comunes
const colors = {
  primary: "#FF6A00", // Naranja cálido para fondos y énfasis
  secondary: "#FF4500", // Naranja más fuerte para algunos detalles
  text: "#FFFFFF", // Blanco para texto
  hover: "#FF8C00", // Color para hover
  darkBackground: "#222222", // Fondo oscuro para el header y pie
  lightBackground: "#333333", // Fondo más claro para contenedores y botones
};

// Interface para el estado 'stats'
interface Stats {
  totalSupply: number | null;
  circulatingSupply: number | null;
  marketCap: { currentMarketCap: number | null } | null;
  holders: number | null;
}

// Utility function to format numbers
const formatNumber = (num: string | number | null) => {
  if (num === null) return "Loading...";

  // Si el número es un string, elimina las comas y conviértelo a número
  const parsedNum = typeof num === "string" ? parseFloat(num.replace(/,/g, "")) : num;

  if (isNaN(parsedNum)) return "Invalid number";

  if (parsedNum >= 1e12) return `$${(parsedNum / 1e12).toFixed(2)}T`;
  if (parsedNum >= 1e9) return `$${(parsedNum / 1e9).toFixed(2)}B`;
  if (parsedNum >= 1e6) return `$${(parsedNum / 1e6).toFixed(2)}M`;
  if (parsedNum >= 1e3) return `$${(parsedNum / 1e3).toFixed(2)}K`;

  return `$${parsedNum.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};



// Styled components
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  color: ${colors.text};
  padding: 20px;
  padding-top: 30px;
  max-width: 900px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 50px;
`;

const TitleContainer = styled.div`
  display: inline-block;
  padding: 15px 30px;
  border-radius: 25px; /* Bordes redondeados */
  background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
  box-shadow: 0 4px 15px rgba(255, 106, 0, 0.4); /* Sombra más pronunciada */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(255, 106, 0, 0.6); /* Sombra más intensa en hover */
  }
`;

const Title = styled.h1`
  font-family: "Changa", sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: ${colors.text};
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: color 0.3s ease;
`;

const Subtitle = styled.p`
font-family: "Changa";
  font-size: 1.3rem;
  color: #aaa;
  margin-top: 10px;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 1px;
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: #ff4500;
  }
`;

const Section = styled.section`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
font-family: "Changa";
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding-bottom: 8px;
  transition: color 0.3s ease, transform 0.3s ease;

  /* Borde inferior que se expande para cubrir el texto */
  &::after {
    content: '';
    position: absolute;
    width: 0%; /* Inicia con 0% */
    height: 3px;
    background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    bottom: 0;
    left: 0;
    transition: width 0.5s ease; /* Transición para el borde */
  }

  /* Efecto hover */
  &:hover {
    color: ${colors.secondary};
    transform: translateY(-5px); /* Efecto sutil de elevación */
  }

  &:hover::after {
    width: 100%; /* El borde cubre todo el texto en hover */
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  padding: 20px;
  text-align: center;
  font-family: "Changa";
  border-radius: 12px;
  color: ${colors.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const StatValue = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
`;

const StatLabel = styled.p`
  font-size: 1rem;
  margin-top: 8px;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 20px;
  margin-bottom:60px;
  padding: 20px;
  background: ${colors.primary};
  color: ${colors.text};
  border-radius: 12px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

// Main Component
const CWIFForge: React.FC = () => {
  const [stats, setStats] = useState<Stats>({
    totalSupply: null,
    circulatingSupply: null,
    marketCap: null,
    holders: null,
  });

  useEffect(() => {
    // Fetch data from APIs
    const fetchStats = async () => {
      try {
        const [totalSupply, circulatingSupply, marketCap, holders] = await Promise.all([
          fetch("https://api.cwifstats.com/TotalSupply/").then((res) => res.json()),
          fetch("https://api.cwifstats.com/CirculatingSupply/").then((res) => res.json()),
          fetch("https://catwifhatsolana.com/api/fetch_data/").then((res) => res.json()),
          fetch("https://api.cwifstats.com/Holders/").then((res) => res.json()),
        ]);

        setStats({
          totalSupply,
          circulatingSupply,
          marketCap,
          holders,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <Container>
      <Header>
      <TitleContainer>
        <Title>CWIF Forge 🔥⚒️</Title>
      </TitleContainer>
        <Subtitle>The journey of Catwifhat ($CWIF) on Solana.</Subtitle>
      </Header>
      <Section id="statistics">
        <SectionTitle>Live Statistics</SectionTitle>
        <StatsGrid>
          <StatCard>
            <StatValue>{formatNumber(stats.totalSupply)}</StatValue>
            <StatLabel>Total Supply</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{formatNumber(stats.circulatingSupply)}</StatValue>
            <StatLabel>Circulating Supply</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{formatNumber(stats.marketCap?.currentMarketCap ?? null)}</StatValue>
            <StatLabel>MarketCap</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{formatNumber(stats.holders)}</StatValue>
            <StatLabel>Holders</StatLabel>
          </StatCard>
        </StatsGrid>
        <ProgressBar circulatingSupply={stats.circulatingSupply} />
      </Section>

      <About />
      <Footer>
        <p>© {new Date().getFullYear()}, Powered by the Catwifhat Community</p>
      </Footer>
      <Section id="donate">
        <Donate />
      </Section>
    </Container>
  );
};

export default CWIFForge;
