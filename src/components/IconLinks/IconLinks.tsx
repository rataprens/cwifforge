import React from "react";
import styled from "styled-components";

// Estilo para los enlaces de los íconos
const IconLink = styled.a`
  display: inline-block;
  margin: 0 10px;
  width: 32px;
  height: 32px;
  text-align: center;
  transition: opacity 0.3s ease, transform 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

// Define un tipo de objeto para los enlaces
interface IconLinksProps {
  links: { href: string; imgSrc: string; alt: string }[];
}

const IconLinks: React.FC<IconLinksProps> = ({ links }) => {
  return (
    <div>
      {links.map((link, index) => (
        <IconLink key={index} href={link.href} target="_blank" rel="noopener noreferrer">
          <img src={link.imgSrc} alt={link.alt} />
        </IconLink>
      ))}
    </div>
  );
};

export default IconLinks;
