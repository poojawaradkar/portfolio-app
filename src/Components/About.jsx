import React from 'react';
import SubHeader from './SubHeader';
import Container from './Layout/Container';

const About = () => {
    return (
        <Container className='card' style={{backgroundColor: '#eeeeee'}}>
            <SubHeader 
                headerText='WHAT I DO?'
            />
        </Container>
    )
}
export default About;