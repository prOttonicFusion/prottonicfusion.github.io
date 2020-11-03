import React from "react"
import BriefCVMDX from "../sections/brief-cv"
import { Grid, Box } from "theme-ui"
import Skills from "./skills"
import Timeline from "./timeline"
import "../styles/global.scss"

const BriefCV = () => (
  <Grid pt={100} pb={100} pl={4} pr={4} columns={[1, 1, 1, 1, 2]} id="brief-cv">
    <Box>
      <BriefCVMDX />
    </Box>
    <Skills />
    <Timeline />
  </Grid>
)

export default BriefCV
