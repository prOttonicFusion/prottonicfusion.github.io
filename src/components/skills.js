import React from "react"
import SkillsMDX from "../sections/skills"
import { Grid, Box } from "theme-ui"
import { Tab, Row, Col, Nav } from "react-bootstrap"
import skillsData from "../data/skills.json"
import "../styles/global.scss"

const SkillItem = (props) => {
  const { name, badges, level } = props
  return (
    <Row className="skill-item">
      <Col className="skill-description-container">
        <span className="skill-title">{name}</span>
        <span className="skill-badge-container">
          {badges.map((badge) => (
            <img
              src={badge}
              className="skill-badge"
              height={"15px"}
              alt={"Skill badge"}
              key={badge}
            />
          ))}
        </span>
      </Col>
      <Col className="skill-level-container">
        <span className="progress-bar">
          <span className="progress" style={{ width: `${level}%` }}></span>
        </span>
      </Col>
    </Row>
  )
}

const SkillSheet = (props) => {
  return (
    <div className={"skill-sheet"}>
      {props.skills.map((skill) => (
        <SkillItem
          name={skill.title}
          level={skill.level}
          badges={skill.badges}
          key={skill.title}
        />
      ))}
    </div>
  )
}

const Skills = () => (
  <Grid pt={30} pb={30} pl={4} pr={4} columns={[1, 1, 1, 1, 2]} id="skills">
    <Box>
      <SkillsMDX />
    </Box>
    <div className="skills-container">
      <Tab.Container id="left-tabs-example" defaultActiveKey="0">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {skillsData.map((category, index) => (
                <Nav.Item key={category.categoryTitle}>
                  <Nav.Link eventKey={index}>{category.categoryTitle}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {skillsData.map((category, index) => (
                <Tab.Pane eventKey={index} key={category.categoryTitle}>
                  <SkillSheet skills={category.skills} />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  </Grid>
)

export default Skills
