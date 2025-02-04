import { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `cwif stats test`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
          {
            name: `Changa`,
            file: `https://fonts.googleapis.com/css2?family=Changa:wght@200;400;800&display=swap`,
          }
        ],
      },
    },
    "gatsby-plugin-react-helmet", // Agregado para manejar los metadatos SEO
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Catwifhat $CWIF",
        short_name: "CWIF",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#FF6A00",
        display: "standalone",
        icon: "src/assets/images/CWIF.png", // Ruta de tu ícono
      },
    },
  ]
};

export default config;
