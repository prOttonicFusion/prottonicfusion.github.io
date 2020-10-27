import React from "react"
import { Link, Text } from 'theme-ui'

const Footer = () => (
    <Text
        p={20}
        sx={{
            fontSize: 'small',
            textAlign: 'center',
        }}
    >
        &copy; {new Date().getFullYear()} prOttonicFusion
    </Text>
)

export default Footer;