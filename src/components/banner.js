import React from "react"
import NavMenu from "./nav-menu"
import "../styles/global.scss"

const Banner = ({ children, location }) => (
  <div className={"page-banner"}>
    <NavMenu location={location} />
    {children}
  </div>
)

export default Banner
