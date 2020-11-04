import React from "react"
import ContactMDX from "../sections/contact"
import { Grid } from "theme-ui"
import "../styles/global.scss"

const Contact = () => (
  <Grid pt={100} pb={100} pl={4} pr={4} columns={[1]} id="contact">
    <div>
      <ContactMDX />
    </div>
  </Grid>
)

export default Contact
