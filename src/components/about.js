import React from "react"
import AboutMDX from "../sections/about"
import { Grid } from "theme-ui"
import "../styles/global.scss"

const About = () => (
  <Grid pt={30} pb={100} pl={4} pr={4} columns={[1, 1, 1, 1, 2]} id="about">
    <div>
      <AboutMDX />
    </div>
  </Grid>
)

export default About
