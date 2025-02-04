import React from "react";
import styled from "styled-components";

// Styled components
const StatsWrapper = styled.div`
  background-color: #121212;
  color: #fff;
  padding: 40px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 30px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  text-align: center;
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatNumber = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const StatLabel = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin: 5px 0;
`;

const StatButton = styled.a`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #fff;
  color: #121212;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Stats: React.FC = () => {
  return (
    <StatsWrapper>
      <Title>catwifhat $CWIF statistics</Title>
      <Subtitle>Last Updated: January 17, 2025</Subtitle>
      <Subtitle>
        All $CWIF statistics originate from Birdeye or SolanaFM and are subject to the site's accuracy.
      </Subtitle>
      <StatsGrid>
        {/* Holders */}
        <StatBox>
          <StatNumber>1,545,428</StatNumber>
          <StatLabel>Holders</StatLabel>
          <StatButton href="/holders" target="_blank">
            View Holders
          </StatButton>
        </StatBox>
        {/* MarketCap */}
        <StatBox>
          <StatNumber>$6.35 million</StatNumber>
          <StatLabel>Verified MarketCap</StatLabel>
          <StatButton href="https://coinmarketcap.com/" target="_blank">
            CoinMarketCap
          </StatButton>
        </StatBox>
        {/* Original Supply */}
        <StatBox>
          <StatNumber>77.78 trillion</StatNumber>
          <StatLabel>Original Supply (Dec 15, 2023)</StatLabel>
          <StatButton href="/faq" target="_blank">
            Supply FAQ
          </StatButton>
        </StatBox>
        {/* Verified Supply */}
        <StatBox>
          <StatNumber>31.34 trillion</StatNumber>
          <StatLabel>Verified Supply Remaining</StatLabel>
          <StatButton href="https://birdeye.so/" target="_blank">
            Birdeye
          </StatButton>
        </StatBox>
      </StatsGrid>
    </StatsWrapper>
  );
};

export default Stats;
