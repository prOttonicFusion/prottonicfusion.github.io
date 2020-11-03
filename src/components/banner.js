import React from "react"
import { Container } from "theme-ui"
import NavMenu from "./nav-menu"
import "../styles/global.scss"

const Banner = ({ children, location }) => (
  <Container className={"page-banner"}>
    <NavMenu location={location} />
    {children}
  </Container>
)

export default Banner
