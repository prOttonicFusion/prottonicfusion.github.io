import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ContactMDX from "../sections/contact"
import { Box, Grid } from "theme-ui"
import SocialIcon from "./social-icon"
import "../styles/global.scss"

const Contact = () => (
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
      <Grid pt={100} pb={100} pl={4} pr={4} columns={[1]} id="contact">
        <Box>
          <ContactMDX />
        </Box>
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
      </Grid>
    )}
  />
)

export default Contact
