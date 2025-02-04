import React from "react";
import styled, { keyframes } from "styled-components";
import IconLinks from "../IconLinks/IconLinks";

// Animación para el hover de los iconos sociales
const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const FooterWrapper = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin: 0 auto;
  width: calc(100% - 80px); /* Deja espacio de 40px en cada lado */
  box-sizing: border-box;
  position: relative;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 15px; /* Añadir espacio entre los iconos y el copyright */
`;

const IconLink = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.3s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  &:hover {
    animation: ${hoverAnimation} 1s ease-in-out infinite;
  }
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 0.9rem;

  a {
    color: #fff;
    text-decoration: underline;
    transition: color 0.3s ease;

    &:hover {
      color: #bbb;
    }
  }
`;

const Footer: React.FC = () => {

  const footerLinks = [
    {
      href: "https://t.me/catwifhatonsol",
      imgSrc: "https://catwifhatsolana.com/assets/img/Telegram_logo.svg.webp",
      alt: "Telegram",
    },
    {
      href: "https://discord.gg/catwifhat",
      imgSrc: "https://catwifhatsolana.com/assets/img/tech-guide_header-image-discord.webp",
      alt: "Discord",
    },
    {
      href: "https://x.com/catwifhatsolana",
      imgSrc: "https://catwifhatsolana.com/assets/img/nuevo-diseno-icono-x-logotipo-twitter-2023_1017-45418.avif",
      alt: "Twitter",
    },
    {
      href: "https://www.youtube.com/@catwifhat",
      imgSrc: "https://catwifhatsolana.com/assets/img/youtube.png",
      alt: "YouTube",
    },
    {
      href: "https://www.reddit.com/r/catwifhatsolana/",
      imgSrc: "https://catwifhatsolana.com/assets/img/1000_F_316752482_SmCu3yMoMV7rMensP4IWCIx3FRrjNKvg.jpg",
      alt: "Reddit",
    },
    {
      href: "https://instagram.com/catwifhatsolana",
      imgSrc: "https://catwifhatsolana.com/assets/img/Instagram_logo_2016.svg.webp",
      alt: "Instagram",
    },
    {
      href: "https://www.facebook.com/catwifhatonsol/",
      imgSrc: "https://catwifhatsolana.com/assets/img/Facebook_logo_(square).png",
      alt: "Facebook",
    },
    {
      href: "https://www.tiktok.com/@catwifhatsolana",
      imgSrc: "https://catwifhatsolana.com/assets/img/tiktok.webp",
      alt: "TikTok",
    },
  ];

  return (
    <FooterWrapper>
      {/* Social Media Icons */}
      <SocialIcons>
        <IconLinks links={footerLinks} />
      </SocialIcons>

      {/* Copyright and Links */}
      <Copyright>
        ©Catwifhat $CWIF{" "}
        <a href="https://catwifhatsolana.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="https://catwifhatsolana.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
