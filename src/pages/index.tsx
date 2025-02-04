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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Catwifhat | CWIF FORGE 🔥⚒️</title>
        {/* Puedes agregar más etiquetas meta o títulos aquí */}
      </Helmet>
      <GlobalStyle />
      <Layout>
        <CWIFForge />
      </Layout>
    </>
  );
};

export default IndexPage;
