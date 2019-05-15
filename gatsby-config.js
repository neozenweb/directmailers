module.exports = {
  siteMetadata: {
    title: `Direct Mailers`,
    description: `Test.`,
    siteUrl: `https://www.youarepreapproved.com/`,
    author: `Juan Villela`,
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#8F3A6D`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        name: `Direct Mailers`,
        short_name: `Direct Mailers`,
        start_url: `/`,
        theme_color: `#8F3A6D`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
