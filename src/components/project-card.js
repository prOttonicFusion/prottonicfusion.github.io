import '../styles/global.scss'
import React from 'react'
import { Card } from 'react-bootstrap'
import SocialIcon from './social-icon'

const ProjectKeywords = ({ keywords }) =>
    <Card.Text>
        {keywords.map((keyword, index) =>
            <div className="project-keyword">
                <a href={keyword.url}>{keyword.label}</a>
            </div>,
        )}
    </Card.Text>


const ProjectCard = ({
    title,
    image,
    description,
    wordpress,
    github,
    link,
    documentation,
    keywords,
}) =>
    <Card
        style={{
            width: '18rem',
            margin: '1.25rem',
        }}
    >
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className="project-keywords-container">
                {keywords && <ProjectKeywords keywords={keywords} />}
            </div>
        </Card.Body>
        <Card.Footer>
            {github &&
        <SocialIcon
            service="github"
            url={`https://github.com/${github}`}
            label="GitHub"
        ></SocialIcon>
            }
            {wordpress &&
        <SocialIcon
            service="wordpress"
            url={wordpress}
            label="WordPress"
        ></SocialIcon>
            }
            {documentation &&
        <SocialIcon
            service="documentation"
            url={documentation}
            label="Docs"
        ></SocialIcon>
            }
            {link && <SocialIcon service="" url={link} label="WebSite"></SocialIcon>}
        </Card.Footer>
    </Card>


export default ProjectCard
