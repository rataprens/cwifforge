import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const DonateContainer = styled.div`
  text-align: center;
  padding: 20px;
  background: #282c34;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  margin: 20px auto;
  position: relative;
`;

const SolanaLogo = styled.img`
  width: 80px;
  margin-bottom: 10px;
`;

const WalletAddress = styled.p`
  font-size: 1rem;
  background: #333;
  padding: 10px;
  border-radius: 8px;
  word-break: break-all;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #ff6a00, #ff4500);
  color: white;
  font-size: 1rem;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 10px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 10px rgba(255, 106, 0, 0.5);
  }
`;

const AlertBox = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 20px;
  right: 40%;
  background: linear-gradient(135deg, #ff6a00, #ff4500);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease-out, fadeOut 0.3s ease-in 1.8s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
`;

// Wallet Address
const walletAddress = "J9pd8y7rwe6Sn7dbzHM51oHL94zJbFmHBMjfCkLyawNM";

const Donate = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000); // Oculta la alerta después de 2s
  };

  const openExplorer = () => {
    window.open(`https://solscan.io/account/${walletAddress}`, "_blank");
  };

  return (
    <>
      <DonateContainer>
        <SolanaLogo src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana Logo" />
        <h2>Donate to My Wallet</h2>
        <WalletAddress>{walletAddress}</WalletAddress>
        <Button onClick={handleCopy}>Copy Address</Button>
        <Button onClick={openExplorer}>View on Solscan</Button>
      </DonateContainer>

      <AlertBox show={showAlert}>Thank you for considering a donation! 🙏</AlertBox>
    </>
  );
};

export default Donate;
