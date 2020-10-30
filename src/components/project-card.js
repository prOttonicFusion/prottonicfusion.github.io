import React from "react"
import { Image } from "theme-ui"
import { Card } from "react-bootstrap"
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
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
    <Card.Footer>
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
    </Card.Footer>
  </Card>
)

export default ProjectCard
