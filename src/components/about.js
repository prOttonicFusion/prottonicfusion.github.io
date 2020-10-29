import React from "react"
import AboutMDX from "../sections/about"
import { Grid, Box, Image } from "theme-ui"
import "../styles/global.scss"

const About = () => (
  <Grid pt={100} pb={100} pl={4} pr={4} columns={[1, 1, 1, 1, 2]} id="about">
    <Box>
      <AboutMDX />
    </Box>
  </Grid>
)

export default About
