import React from "react"
import "../styles/global.scss"

const Layout = ({ children }) => (
  <div
    pl={[20, 20, 20, 20, 300]}
    pr={[20, 20, 20, 20, 300]}
    className={"main-content"}
  >
    {children}
  </div>
)

export default Layout
