import React from "react"
import { Container, Image, Box, NavLink } from 'theme-ui'
import profilePic from '../images/profile.jpg'
import BannerMDX from "../sections/banner"
import "../styles/global.scss"

const Banner = () => (
    <Container className={"page-banner"}>
        <Image src={profilePic}
            sx={{
                maxWidth: '20%',
                minWidth: '200px'
            }}
            className={"profile-pic"}
        />
        <Box sx={{
            color: "white"
        }}>
            <BannerMDX />
        </Box>
        <Box as='nav'>
            <NavLink href='#about' p={2}>
                About
            </NavLink>
            <NavLink href='#projects' p={2}>
                Projects
            </NavLink>
            <NavLink href='#contact' p={2}>
                Contact
            </NavLink>
        </Box>
    </Container>
)

export default Banner;