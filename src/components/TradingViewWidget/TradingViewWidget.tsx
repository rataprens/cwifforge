import React from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  margin: 20px 0;
`;

const TradingViewWidget: React.FC = () => {
  return (
    <ChartContainer>
      <iframe
        src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_321c9&symbol=GATEIO:CWIFUSDT&interval=240&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=F1F3F6&hideideas=1&theme=dark"
        width="100%"
        height="100%"
        frameBorder="0"
        allowTransparency={true}
        scrolling="no"
        title="TradingView Chart"
      ></iframe>
    </ChartContainer>
  );
};

export default TradingViewWidget;
