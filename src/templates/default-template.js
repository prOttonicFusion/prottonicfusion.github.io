import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import About from "../components/about"
import Projects from "../components/projects"
import BriefCV from "../components/skills"
import Contact from "../components/brief-cv"
import Footer from "../components/footer"
import { Divider } from "theme-ui"
import SEO from "../components/seo"

const DefaultTemplate = () => (
  <>
    <Banner />
    <Layout>
      <SEO title="Home" />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <BriefCV />
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </Layout>
  </>
)

export default DefaultTemplate
