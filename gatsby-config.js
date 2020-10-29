/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `My Test Site`,
    siteUrl: `https://www.gatsbyjs.com`,
    description: `Just another sample site`,
    author: `prOttonicFusion`,
    menuLinks: [
      {
        name: "About",
        link: "#about",
      },
      {
        name: "Projects",
        link: "#projects",
      },
      {
        name: "Contact",
        link: "#contact",
      },
    ],
  },
  plugins: ["gatsby-plugin-mdx", "gatsby-plugin-sass"],
}
