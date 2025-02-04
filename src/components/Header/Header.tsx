import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";
import IconLinks from "../IconLinks/IconLinks";
import ContractAddress from "../ContractAddress/ContractAddress";


const AlertBox = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 20px;
  left: 40%;
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

// Animaciones para el header
const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

// Colores comunes
const colors = {
  primary: "#FF6A00",
  secondary: "#FF4500",
  text: "#FFFFFF",
  hover: "#FF8C00",
  darkBackground: "#222222",
  lightBackground: "#333333",
};

// Estilo del header con animaciones
const HeaderWrapper = styled.header<{ isScrollingDown: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${colors.darkBackground};
  color: ${colors.text};
  border-radius: 0 0 20px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  animation: ${({ isScrollingDown }) =>
    isScrollingDown ? slideUp : slideDown} 0.5s ease-in-out forwards;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const LogoText = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0;
  font-family: "Changa";
  color: ${colors.text};
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: ${colors.text};
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  font-family: "Changa";

  &:hover {
    color: ${colors.hover};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${colors.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;


// Header Component
const Header: React.FC = () => {
  const contractAddress = "7atgF8KQo4wJrD5ATGX7t1V2zVvykPJbFfNeVf1icFv1";
  const [showAlert, setShowAlert] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Define los enlaces específicos para el Header
  const headerLinks = [
    {
      href: "https://www.coingecko.com/en/coins/catwifhat-2",
      imgSrc: "https://catwifhatsolana.com/assets/img/coingecko.ico",
      alt: "Coingecko",
    },
    {
      href: "https://coinmarketcap.com/currencies/catwifhatsolana/",
      imgSrc: "https://catwifhatsolana.com/assets/img/coinmarketcap.ico",
      alt: "Coinmarketcap",
    },
    {
      href: "https://www.birdeye.so/token/7atgF8KQo4wJrD5ATGX7t1V2zVvykPJbFfNeVf1icFv1?chain=solana",
      imgSrc: "https://catwifhatsolana.com/assets/img/birdeye.png",
      alt: "Birdeye",
    },
    {
      href: "https://dexscreener.com/solana/4g2u4fo1ilcu7kvbiainsda9gtbapbfj7kr6vadscqcy",
      imgSrc: "https://catwifhatsolana.com/assets/img/dexscreener.png",
      alt: "Dexscreener",
    },
  ];

  const handleCopy = (onCopy:boolean) => {
    setShowAlert(onCopy);
    setTimeout(() => {
      setShowAlert(false)
    }, 2000);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderWrapper isScrollingDown={isScrollingDown}>
      {/* Logo */}
      <LogoContainer>
        <LogoImage src="https://catwifhatsolana.com/assets/img/CWIF.png" alt="Logo" />
        <LogoText>catwifhat $CWIF</LogoText>
      </LogoContainer>

      {/* Navigation Links */}
      <Nav>
        <NavLink
          to="#statistics"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("statistics");
          }}
        >
          Live Statistics
        </NavLink>
        <NavLink
          to="#welcome"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("welcome");
          }}
        >
          Welcome
        </NavLink>
        <NavLink
          to="#about"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("about");
          }}
        >
          About
        </NavLink>
        <NavLink
          to="#burn"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("burn");
          }}
        >
          Burn
        </NavLink>
        <NavLink
          to="#donate"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("donate");
          }}
        >
          Donate ❤️
        </NavLink>

      </Nav>

      {/* Icons and Contract */}
      <IconsContainer>
        <IconLinks links={headerLinks} />
        <ContractAddress contractAddress={contractAddress} onCopy={handleCopy}/>
        {/* Alerta personalizada */}
        <AlertBox show={showAlert}>Contract address copied!</AlertBox>
      </IconsContainer>
    </HeaderWrapper>
  );
};

export default Header;