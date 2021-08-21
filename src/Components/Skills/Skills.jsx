import React from "react";

import SubHeader from "../Shared/SubHeader/SubHeader";

import Container from "../Layout/Container";
import Col from "../Layout/Col";
import Row from "../Layout/Row";

import "./skill.scss";

const Skills = (props) => {
  const skillsArr = [
    {
      name: "HTML (HyperText Markup language)",
      lable: "progress-85",
      percentile: "85",
    },
    {
      name: "Cascading Style Sheets (CSS)",
      lable: "progress-90",
      percentile: "90",
    },
    {
      name: "Sassy CSS (SCSS)",
      lable: "progress-85",
      percentile: "85",
    },
    {
      name: "JavaScript",
      lable: "progress-75",
      percentile: "75",
    },
    {
      name: "JQuery",
      lable: "progress-85",
      percentile: "85",
    },
    {
      name: "ReactJs",
      lable: "progress-75",
      percentile: "75",
    },
    {
      name: "Version Control (SVN, Git)",
      lable: "progress-75",
      percentile: "75",
    },
  ];
  const getSkillsMarkup = () => {
    return skillsArr.map((cur, index) => {
      return (
        <Col md={6} xs={12} key={index}>
          <div className="progress-wrap">
            <h3>{cur.name}</h3>
            <div className="progress">
              <div
                className={`progress-bar color-${index + 1} ${cur.lable}`}
                style={{ width: cur.percentile + "%" }}
              >
                <span>{cur.percentile}%</span>
              </div>
            </div>
          </div>
        </Col>
      );
    });
  };
  return (
    <Container className="card">
      <SubHeader headerText="MY SKILLS" as="h2" />
      <Row className="skill-row">{getSkillsMarkup()}</Row>
    </Container>
  );
};

export default Skills;
