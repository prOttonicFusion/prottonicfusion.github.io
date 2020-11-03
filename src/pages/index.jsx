import React from "react"
import DefaultTemplate from "../templates/default-template"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import { Divider, Image, Box } from "theme-ui"
import SEO from "../components/seo"

export default function Home() {
  return (
    <DefaultTemplate location="/">
      <SEO title="Home" />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
    </DefaultTemplate>
  )
}
