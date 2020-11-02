import React from "react"
import TimelineMDX from "../sections/timeline"
import { Grid, Box } from "theme-ui"
import { Tab, Row, Col, Nav } from "react-bootstrap"
import timelineData from "../data/timeline.json"
import "../styles/global.scss"
import "../styles/timeline.scss"

const TimelineItem = ({ eventData }) => {
  return (
    <li className={eventData.itemClass}>
      <div class="timeline-badge">
        <i class="glyphicon glyphicon-check"></i>
      </div>
      <div class="timeline-panel">
        <div class="timeline-heading">
          <h4 class="timeline-title">{eventData.title}</h4>
          <p class="timeline-place-name">@ {eventData.place}</p>
          <p>
            <small class="timeline-time">
              {eventData.time}
            </small>
          </p>
        </div>
        <div class="timeline-body">
          <p>{eventData.description}</p>
        </div>
      </div>
    </li>
  )
}

const Timeline = () => (
  <Grid pt={30} pb={30} pl={4} pr={4} columns={[1, 1, 1, 1, 2]} id="skills">
    <Box>
      <TimelineMDX />
    </Box>
    <div className="timeline-container">
      <ul class="timeline">
        {timelineData.map((data) => (
          <TimelineItem eventData={data} />
        ))}
      </ul>
    </div>
  </Grid>
)

export default Timeline
