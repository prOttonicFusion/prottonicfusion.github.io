import React from "react"
import TimelineMDX from "../sections/timeline"
import { Grid, Box } from "theme-ui"
import timelineData from "../data/timeline.json"
import "../styles/global.scss"
import "../styles/timeline.scss"

const TimelineItem = ({ eventData }) => {
  return (
    <li className={eventData.itemClass}>
      <div className="timeline-badge">
        <i className="glyphicon glyphicon-check"></i>
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4 className="timeline-title">{eventData.title}</h4>
          <span className="timeline-detail-container">
            <span className="timeline-detail-text timeline-place">
              {eventData.place}
            </span>
            <span className="timeline-detail-text timeline-spacer">|</span>
            <span className="timeline-detail-text timeline-date">
              {eventData.time}
            </span>
          </span>
        </div>
        <div className="timeline-body">
          <p>{eventData.description}</p>
        </div>
      </div>
    </li>
  )
}

const Timeline = () => (
  <Grid pt={30} pb={30} pl={4} pr={4} columns={[1, 1, 1, 1, 2]} id="timeline">
    <Box>
      <TimelineMDX />
    </Box>
    <div className="timeline-container">
      <ul className="timeline">
        {timelineData.map((data) => (
          <TimelineItem eventData={data} key={data.title + data.time} />
        ))}
      </ul>
    </div>
  </Grid>
)

export default Timeline
