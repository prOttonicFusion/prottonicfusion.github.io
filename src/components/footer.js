import '../styles/global.scss'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SocialIcon from './social-icon'

const Footer = () => {
    const data = useStaticQuery(graphql`
      query ContactOptionsQuery {
        site {
          siteMetadata {
            contactOptions {
              name
              label
              url
            }
            author
          }
        }
      }
    `)

    return (
        <div className={'site-footer'}>
            <div className={'social-icon-container'}>
                {data.site.siteMetadata.contactOptions.map((contactOption) =>
                    <SocialIcon
                        service={contactOption.name}
                        url={contactOption.url}
                        label={contactOption.label}
                        key={contactOption.url}
                    ></SocialIcon>,
                )}
            </div>
            <div className="copyright-container">
                {new Date().getFullYear()} &copy; {data.site.siteMetadata.author}
            </div>
        </div>
    )
}


export default Footer
