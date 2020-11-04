import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SocialIcon from "./social-icon"
import "../styles/global.scss"

const Footer = () => (
  <StaticQuery
    query={graphql`
      query ContactOptionsQuery {
        site {
          siteMetadata {
            contactOptions {
              name
              label
              url
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className={"site-footer"}>
        <div className={"social-icon-container"}>
          {data.site.siteMetadata.contactOptions.map((contactOption) => (
            <SocialIcon
              service={contactOption.name}
              url={contactOption.url}
              label={contactOption.label}
              key={contactOption.url}
            ></SocialIcon>
          ))}
        </div>
        <div className="copyright-container">
          {new Date().getFullYear()} &copy; prOttonicFusion
        </div>
      </div>
    )}
  />
)

export default Footer
