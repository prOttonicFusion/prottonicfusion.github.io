import '../styles/global.scss'
import '../styles/components/experience.scss'
import React from 'react'
import timelineData from '../../content/data/timeline.json'

const ExperienceItem = ({eventData}) => {
    const { title, place, time, descriptionFull, description } = eventData
    const desc = descriptionFull || description
    const descArray = Array.isArray(desc) ? desc : [desc]

    return (
        <div className="experience-item">
            <div className="experience-header">
                <h3 className="experience-place">{place}</h3>
                <div className="experience-meta">
                    <span className="experience-title">{title}</span>
                    <span className="experience-separator">•</span>
                    <span className="experience-time">{time}</span>
                </div>
            </div>
            {descArray && (
                <div className="experience-description-full">
                    {descArray.length === 1 ? (
                        <p>{descArray[0]}</p>
                    ) : (
                        <ul className="experience-description-list">
                            {descArray.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    )
}

const ExperienceSection = ({ title, items }) => {
    if (items.length === 0) return null
    
    return (
        <div className="experience-section">
            <h2 className="section-title">{title}</h2>
            <div className="experience-list">
                {items.map((data) => (
                    <ExperienceItem 
                        eventData={data} 
                        key={`${data.title}-${data.time}-${data.place}`} 
                    />
                ))}
            </div>
        </div>
    )
}

const Experience = () => {
    const experienceItems = timelineData.filter(item => item.type === 'job')
    const educationItems = timelineData.filter(item => item.type === 'education')

    return (
        <div className="section-container" id="experience">
            <ExperienceSection title="Experience" items={experienceItems} />
            <ExperienceSection title="Education" items={educationItems} />
        </div>
    )
}

export default Experience
