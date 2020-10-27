import React from "react"
import { Link, Text } from 'theme-ui'
import "../styles/global.scss";

const Footer = () => (
    <Text
        className={"site-footer"}
    >
        {new Date().getFullYear()} &copy; prOttonicFusion
    </Text>
)

export default Footer;