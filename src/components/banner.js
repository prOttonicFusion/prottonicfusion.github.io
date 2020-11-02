import React from "react"
import { Container, Image, Box } from "theme-ui"
import profilePic from "../assets/images/profile.jpg"
import BannerMDX from "../sections/banner"
import NavMenu from "./nav-menu"
import "../styles/global.scss"

const Banner = () => (
  <Container className={"page-banner"}>
    <NavMenu />
    <Image
      src={profilePic}
      sx={{
        maxWidth: "20%",
        minWidth: "200px",
      }}
      className={"profile-pic"}
    />
    <Box>
      <BannerMDX />
    </Box>
  </Container>
)

export default Banner
