import React from "react"
import { Container } from "theme-ui"
import "../styles/global.scss";

const Layout = ({ children }) => (
    <Container
        pl={[20, 20, 20, 20, 300]}
        pr={[20, 20, 20, 20, 300]}
        className={"main-content"}
    >
        {children}
    </Container>
)

export default Layout;