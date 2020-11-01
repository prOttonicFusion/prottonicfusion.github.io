import React from "react"
import { Container } from "theme-ui"
import NavMenu from "./nav-menu"
import "../styles/global.scss"

const Banner = ({ children }) => (
  <Container className={"page-banner"}>
    <NavMenu />
    {children}
  </Container>
)

export default Banner
