import React from "react";
import Layout from "../components/Layout/Layout";
import CWIFForge from "../components/CWIFForge/CWIFForge";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet"; // Importa Helmet

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, Roboto, sans-serif, serif;
    background-color: rgb(18, 18, 18); /* Fondo oscuro */
    color: #f5f5f5; /* Texto claro */
    overflow-x: hidden; /* Evitar scroll horizontal */
  }
`;

const IndexPage: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Meta Básicos */}
        <html lang="en" /> 
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#121212" />
        <meta name="keywords" content="CWIF, burning stats, token metrics, blockchain stats" />
        <title>Catwifhat | CWIF FORGE 🔥⚒️</title>
        <meta name="description" content="Track CWIF burning statistics and insights in real-time." />
        
        {/* Open Graph (Para compartir en redes sociales) */}
        <meta property="og:title" content="Catwifhat | CWIF FORGE 🔥⚒️" />
        <meta property="og:description" content="Track CWIF burning statistics and insights in real-time." />
        <meta property="og:image" content="https://cwifforge.netlify.app/static/CWIF-230bb48074e9c04cd8aea1ae2a8a208d.png" />
        <meta property="og:url" content="https://cwifforge.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards (Para compartir en Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Catwifhat | CWIF FORGE 🔥⚒️" />
        <meta name="twitter:description" content="Track CWIF burning statistics and insights in real-time." />
        <meta name="twitter:image" content="https://cwifforge.netlify.app/static/CWIF-230bb48074e9c04cd8aea1ae2a8a208d.png" />
      </Helmet>
      <GlobalStyle />
      <Layout>
        <CWIFForge />
      </Layout>
    </>
  );
};

export default IndexPage;
