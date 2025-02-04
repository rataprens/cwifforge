import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TradingViewWidget from "../TradingViewWidget/TradingViewWidget";

// Estilos de los componentes
const Section = styled.section`
  padding: 40px 20px;
  margin: 30px 0;
  text-align: center;
  background-color: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: #121212;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-family: "Changa";
  font-size: 2rem;
  font-weight: 700;
  color: #ff4500;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #ff7f50;
    transform: scale(1.05);
  }
`;

const Title = styled.h1`
  font-family: "Changa";
  font-size: 3rem;
  font-weight: 800;
  color: #ff4500;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  background: linear-gradient(45deg, #ff4500, #ff7f50);
  -webkit-background-clip: text;
  color: transparent;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    color: #f5f5f5;
  }
`;

const Text = styled.p`
  font-family: "Changa";
  font-size: 1.2rem;
  color: #bbb;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff4500;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const StatCard = styled.div`
  background-color: #2c2c2c;
  border-radius: 8px;
  padding: 20px;
  width: 200px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
`;

const StatTitle = styled.h3`
  font-family: "Changa";
  font-size: 1.5rem;
  color: #ff7f50;
  margin-bottom: 10px;
`;

const StatValue = styled.p`
  font-family: "Changa";
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff4500;
`;

const BurnExplanation = styled.div`
  background-color: #2c2c2c;
  padding: 20px;
  margin-top: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const BurnExplanationTitle = styled.h3`
  font-family: "Changa";
  font-size: 1.8rem;
  color: #ff7f50;
  margin-bottom: 10px;
`;

const BurnExplanationText = styled.p`
  font-family: "Changa";
  font-size: 1.2rem;
  color: #bbb;
  line-height: 1.6;
`;

// Función para formatear números
const formatNumber = (number: number) => {
  if (number >= 1_000_000_000) {
    return (number / 1_000_000_000).toFixed(2) + "B";
  } else if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(2) + "M";
  } else if (number >= 1_000) {
    return (number / 1_000).toFixed(2) + "K";
  }
  return number.toString();
};

const About: React.FC = () => {
  const [burnData, setBurnData] = useState<any>(null);

  // Llamada a la API
  useEffect(() => {
    const fetchBurnData = async () => {
      try {
        const response = await fetch("https://catwifhatsolana.com/api/fetch_data/");
        const data = await response.json();
        setBurnData(data);
      } catch (error) {
        console.error("Error fetching burn data:", error);
      }
    };

    fetchBurnData();
  }, []);

  if (!burnData) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Section id="welcome">
        <Title>Welcome to Catwifhat</Title>
        <SectionTitle>About Catwifhat</SectionTitle>
        <Text>
          $CWIF is the largest auto-burn project and the most distributed memecoin to ever exist on Solana.
        </Text>
        <TradingViewWidget />
      </Section>

      <Section id="about">
        <SectionTitle>About $CWIF</SectionTitle>
        <Text>
          The Catwifhat community is on a mission to bring deflationary token economics to the world of memecoins!
        </Text>
        <Stats>
          <StatCard>
            <StatTitle>Total Burned</StatTitle>
            <StatValue>{burnData.burnedPercentage.toFixed(2)}%</StatValue>
          </StatCard>
          <StatCard>
            <StatTitle>Community</StatTitle>
            <StatValue>500k+</StatValue>
          </StatCard>
          <StatCard>
            <StatTitle>Transactions</StatTitle>
            <StatValue>10M+</StatValue>
          </StatCard>
        </Stats>
      </Section>

      <Section id="burn">
        <SectionTitle>About The Burn</SectionTitle>
        <Text>
          $CWIF’s auto-burn involves a 4% burn fee applied to every on-chain transaction.
        </Text>

        <BurnExplanation>
          <BurnExplanationTitle>How The 4% Burn Works</BurnExplanationTitle>
          <BurnExplanationText>
            Every time a transaction occurs with $CWIF, 4% of the transaction amount is automatically burned.
          </BurnExplanationText>

          <BurnExplanationTitle>Burn Statistics</BurnExplanationTitle>
          <Stats>
            <StatCard>
              <StatTitle>Hourly Burn</StatTitle>
              <StatValue>{formatNumber(burnData.averages.hourlyBurn)}</StatValue>
            </StatCard>
            <StatCard>
              <StatTitle>Daily Burn</StatTitle>
              <StatValue>{formatNumber(burnData.averages.dailyBurn)}</StatValue>
            </StatCard>
            <StatCard>
              <StatTitle>Weekly Burn</StatTitle>
              <StatValue>{formatNumber(burnData.averages.weeklyBurn)}</StatValue>
            </StatCard>
          </Stats>
        </BurnExplanation>
      </Section>
    </Container>
  );
};

export default About;
