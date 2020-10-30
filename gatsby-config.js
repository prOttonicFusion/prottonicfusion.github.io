/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Otto Lindblom`,
    siteUrl: `https://prottonicfusion.github.io`,
    description: `My personal homepage`,
    author: `prOttonicFusion`,
    contactOptions: [
      {
        name: "github",
        label: "GitHub",
        url: "https://github.com/prottonicfusion/",
      },
      {
        name: "linkedin",
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/otto-lindblom",
      },
      {
        name: "email",
        label: "E-mail",
        url: "mailto: otto.lindblom@gmail.com",
      }
    ],
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
