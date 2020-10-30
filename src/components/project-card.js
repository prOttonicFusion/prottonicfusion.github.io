import React from "react"
import { Image } from "theme-ui"
import SocialIcon from "./social-icon"
import "../styles/global.scss"

const ProjectCard = ({
  title,
  image,
  description,
  wordpress,
  github,
  link,
  documentation,
}) => (
  <div className="card" style={{ width: "18rem" }}>
    <div className="card-body">
      <Image className="card-img-top" src={image} alt="Card image cap"></Image>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
    <div className="card-footer text-center">
      {github && (
        <SocialIcon
          service="github"
          url={`https://github.com/${github}`}
          label="GitHub"
        ></SocialIcon>
      )}
      {wordpress && (
        <SocialIcon
          service="wordpress"
          url={wordpress}
          label="WordPress"
        ></SocialIcon>
      )}
      {documentation && (
        <SocialIcon
          service="documentation"
          url={documentation}
          label="Docs"
        ></SocialIcon>
      )}
      {link && <SocialIcon service="" url={link} label="WebSite"></SocialIcon>}
    </div>
  </div>
)

export default ProjectCard
