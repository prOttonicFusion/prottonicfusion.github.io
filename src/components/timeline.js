import React from "react"
import TimelineMDX from "../sections/timeline"
import { Grid, Box } from "theme-ui"
import { Tab, Row, Col, Nav } from "react-bootstrap"
import timelineData from "../data/timeline.json"
import "../styles/global.scss"

const TimelineItem = ({eventData}) => {
    return (
        <div class={eventData.direction}>
            <div class="timeline-flag-wrapper">
                <span class="timeline-flag">{eventData.title}</span>
                <span class="timeline-time-wrapper"><span class="timeline-time">{eventData.time}</span></span>
            </div>
            <div class="timeline-place">{eventData.place}</div>
        </div>
    )
}

const Timeline = () => (
  <Grid pt={100} pb={100} pl={4} pr={4} columns={[1, 1, 1, 1, 2]} id="skills">
    <Box>
      <TimelineMDX />
    </Box>
    <div className="timeline-container">
      <ul class="timeline">
        <li>
          {timelineData.map((data) => (
            <TimelineItem eventData={data} />
          ))}
        </li>
      </ul>
    </div>
  </Grid>
)

export default Timeline
