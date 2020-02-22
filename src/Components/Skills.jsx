import React from 'react';
import SubHeader from './SubHeader';
import Container from './Layout/Container';
import Col from './Layout/Col';
import Row from './Layout/Row';
import './skill.scss';
const Skills = (props) => {
    const skillsArr = [
        {
            name: 'HTML (HyperText Markup language)',
            percentile: '85'
        },
        {
            name: 'Cascading Style Sheets (CSS)',
            percentile: '90'
        },
        {
            name: 'Sassy CSS (SCSS)',
            percentile: '85'
        },
        {
            name: 'JavaScript',
            percentile: '75'
        },
        {
            name: 'JQuery',
            percentile: '85'
        },
        {
            name: 'ReactJs',
            percentile: '75'
        },
        {
            name: 'Version Control (SVN, Git)',
            percentile: '75'
        },
    ];
    const getSkillsMarkup = () => {
        return skillsArr.map((cur, index) => {
            return (
                <Col md={6} xs={12} key={index}>
                    <div className="progress-wrap">
                        <h3>{cur.name}</h3>
                        <div className="progress">
                            <div className={`progress-bar color-${index+1}`} style={{width: cur.percentile+'%'}}>
                            <span>{cur.percentile}%</span>
                        </div>
                        </div>
                    </div>
                </Col>
            )
        });
    }
    return (
        <Container className='card'>
            <SubHeader 
                headerText='MY SKILLS'
                as='h2'
            />
            <Row className='skill-row'>
                {getSkillsMarkup()}
            </Row>
        </Container>
    )
}

export default Skills;