import React from "react"
import SkillsMDX from "../sections/skills"
import { Tab, Row, Col, Nav } from "react-bootstrap"
import skillsData from "../data/skills.json"
import "../styles/global.scss"
import "../styles/skills.scss"

const SkillItem = (props) => {
  const { name, badges, level } = props
  return (
    <div className="skill-item">
      <Row className="skill-description-container">
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
      </Row>
      <Row className="skill-level-container">
        <span className="progress-bar">
          <span className="progress" style={{ width: `${level}%` }}></span>
        </span>
      </Row>
    </div>
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
  <div style={{padding: "30px 4px"}} id="skills">
    <div>
      <SkillsMDX />
    </div>
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
  </div>
)

export default Skills
