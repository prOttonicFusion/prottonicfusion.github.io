import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import About from "../components/about"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Footer from "../components/footer"
import { Divider, Image, Box } from "theme-ui"
import profilePic from "../assets/images/profile.jpg"
import BannerMDX from "../sections/banner"
import SEO from "../components/seo"

const DefaultTemplate = () => (
  <>
    <Banner>
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
      <SEO title="Home" />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </Layout>
  </>
)

export default DefaultTemplate
