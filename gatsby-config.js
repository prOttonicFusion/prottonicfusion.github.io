/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Otto Lindblom',
        siteUrl: 'https://prottonicfusion.github.io',
        description: 'Otto Lindblom\'s personal homepage',
        author: 'Otto Lindblom',
        contactOptions: [
            {
                name: 'github',
                label: 'GitHub',
                url: 'https://github.com/prottonicfusion/',
            },
            {
                name: 'linkedin',
                label: 'LinkedIn',
                url: 'https://www.linkedin.com/in/otto-lindblom',
            },
            {
                name: 'email',
                label: 'E-mail',
                url: 'mailto: otto.lindblom@gmail.com',
            },
        ],
        menuLinks: [
            {
                name: 'About',
                link: '/#about',
            },
            {
                name: 'Projects',
                link: '/#projects',
            },
            {
                name: 'Brief CV',
                link: '/#skills',
            },
            {
                name: 'Contact',
                link: '/#contact',
            },
        ],
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/sections/`,
            },
        },
        'gatsby-plugin-mdx',
        'gatsby-plugin-sass',
        'gatsby-plugin-testing',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
    ],
}
