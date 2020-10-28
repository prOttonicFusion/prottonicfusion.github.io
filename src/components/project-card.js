import React from "react"
import { Image } from "theme-ui"
import SocialIcon from "./social-icon"
import "../styles/global.scss"

const ProjectCard = ({ title, image, description, wordpress, github, link, documentation }) => (
    <div class="card" style={{ width: "18rem" }}>
        <Image class="card-img-top" src={image} alt="Card image cap"></Image>
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            {github &&
                <SocialIcon service="github" url={github} label="GitHub"></SocialIcon>
            }
            {wordpress &&
                <SocialIcon service="wordpress" url={wordpress} label="WordPress"></SocialIcon>
            }
            {documentation &&
                <SocialIcon service="documentation" url={documentation} label="Docs"></SocialIcon>
            }
            {link &&
                <SocialIcon service="" url={link} label="WebSite"></SocialIcon>
            }
        </div>
    </div>
)

export default ProjectCard;