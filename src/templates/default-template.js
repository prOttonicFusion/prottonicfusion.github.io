import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Footer from "../components/footer"
import { Divider, Image, Box } from "theme-ui"
import profilePic from "../assets/images/profile.jpg"
import BannerMDX from "../sections/banner"

const DefaultTemplate = ({ children, location }) => (
  <>
    <Banner location={location}>
      <Image
        src={profilePic}
        sx={{
          maxWidth: "20%",
          minWidth: "200px",
        }}
        className={"profile-pic"}
      />
      <Box>
        <BannerMDX />
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
