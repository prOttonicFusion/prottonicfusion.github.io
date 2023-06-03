import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                        menuLinks {
                            name
                            link
                        }
                        contactOptions {
                            name
                            label
                            url
                        }
                    }
                }
            }
    `
    )
    return site.siteMetadata
}
