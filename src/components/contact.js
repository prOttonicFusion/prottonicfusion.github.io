import React from "react";
import ContactMDX from "../sections/contact"
import { Box, Grid } from "theme-ui";
import ContacIcon from './social-icon';
import "../styles/global.scss";

const Contact = () => (
    <Grid
        pt={100}
        pb={100}
        pl={4}
        pr={4}
        columns={[1]}
        id="contact"
    >
        <Box>
            <ContactMDX />
        </Box>
        <SocialIcon service={"github"} url={"https://github.com/prottonicfusion/"} label={"GitHub"}></SocialIcon>
        <SocialIcon service={"linkedin"} url={""} label={"LinkedIn"}></SocialIcon>
        <SocialIcon service={"email"} url={"mailto: otto.lindblom@gmail.com"} label={"E-mail"}></SocialIcon>
    </Grid>
)

export default Contact;