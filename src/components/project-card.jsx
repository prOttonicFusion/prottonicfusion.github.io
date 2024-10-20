import '../styles/global.scss'
import '../styles/components/project-card.scss'
import React from 'react'
import PropTypes from 'prop-types'
import SocialIcon from './icons/social-icon'

const ProjectKeywords = ({ keywords }) =>
    <div>
        {keywords.map((keyword, index) =>
            <div className="project-keyword">
                <a href={keyword.url}>{keyword.label}</a>
            </div>,
        )}
    </div>


const ProjectCard = ({
    title, image, description, wordpress, github, link, documentation, keywords,
}) =>
    <div
        className="project-card"
    >
        <div className="project-card-body">
            <div className="project-image-container">
                <img variant="top" src={image} className="project-image" role="presentation" />
            </div>
            <div className="project-description-container">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
        <div className="project-card-footer">
            <div className="project-keywords-container">
                {keywords && <ProjectKeywords keywords={keywords} />}
            </div>

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
        </div>
    </div>

ProjectCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    wordpress: PropTypes.string,
    github: PropTypes.string,
    link: PropTypes.string,
    documentation: PropTypes.string,
    keywords: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }),
    ),
}

export default ProjectCard
