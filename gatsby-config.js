module.exports = {
  siteMetadata: {
    title: `Gatsby Minimal Dev Blog Portfolio Starter`,
    description: `A simple Gatsby starter used for a developer blog and portfolio site.`,
    siteUrl: `https://thelocalhost.io`,
    siteLanguage: `en-us`,
    siteLocale: `en_us`,
    author: `SchwabTheDeck`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-min-dev-blog-portfolio`,
        short_name: `min-dev-blog`,
        start_url: `/`,
        background_color: `#282c34`,
        theme_color: `#282c34`,
        display: `minimal-ui`,
        icon: `src/images/code-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
