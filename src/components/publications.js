import '../styles/global.scss'
import React from 'react'
import PublicationsMDX from '../sections/publications'
import publicationList from '../data/publications.json'

const PublicationCard = ({ title, url, journal, year }) =>
    <div className="publication-card">
        <div>
            <a href={url} className="publication-card-item">{title}</a>
        </div>
        <div className="publication-card-details-container">
            <p className="publication-card-journal publication-card-item">{journal}</p>
            <p className="publication-card-year publication-card-item">({year})</p>
        </div>
    </div>


const Publications = () =>
    <div
        id="publications"
        style={{
            paddingLeft: 0,
            paddingRight: 0,
        }}
    >
        <PublicationsMDX />

        <div className="publication-cards-container">
            {publicationList.map(publication => {
                return (
                    <PublicationCard
                        title={publication.title}
                        journal={publication.journal}
                        year={publication.year}
                        url={publication.url}
                    />
                )
            })}
        </div>
    </div>


export default Publications
