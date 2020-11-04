import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Footer from "../components/footer"
import { Divider, Image, Box } from "theme-ui"

const DefaultTemplate = ({ children, location, title, description, image }) => (
  <>
    <Banner location={location}>
      {image && (
        <Image
          src={image}
          sx={{
            maxWidth: "20%",
            minWidth: "200px",
          }}
          className={"profile-pic"}
        />
      )}
      <Box>
        <h1>{title}</h1>
        <p>{description}</p>
      </Box>
    </Banner>
    <Layout>
      {children}
      <Divider />
      <Footer />
    </Layout>
  </>
)

export default DefaultTemplate
