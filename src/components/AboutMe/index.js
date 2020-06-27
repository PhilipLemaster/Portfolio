import React from 'react';
import pixelGif from '../../assets/images/splash.gif';
import gitHubIcon from '../../assets/images/github.svg';
import linkedInIcon from '../../assets/images/linkedIn.svg'
import twitterIcon from '../../assets/images/twitter.svg'
import './style.css';
import { Container, Row, Col } from 'reactstrap';

function AboutMe() {
    return(
        <Row className="aboutRow">
            <Col lg="3"></Col>
            <Col xs="6" lg="2" className="aboutMe">
                <div className="aboutText">
                    <h3 className="aboutHead">About Me</h3>
                    <p className="aboutBody">I am a full-stack developer from Charlotte, NC in the humble beginnings of what I hope to be a life long career in video game development.</p>
                </div>
            </Col>
            <Col lg="1">
                <div className='iconRow'>
                    <a href='https://github.com/PhilipLemaster' id='icon1'>
                        <img src={gitHubIcon} id='githubIcon'></img>
                    </a>
                    <a href='https://www.linkedin.com/in/philip-lemaster-21930419a/' id='icon2'>
                        <img src={linkedInIcon} id='linkedInIcon'></img>
                    </a>
                    <a href='https://twitter.com/PhilipLemaster2' id='icon3'>
                        <img src={twitterIcon} id='twitterIcon'></img>
                    </a>
                </div>
            </Col>
            <Col lg="1">
            </Col>
            <Col lg="2">
                <img src={pixelGif} id='pixelGif' alt='Pixelized Portrait'></img>
            </Col>
            
                
                
                
        </Row>
        
    )
}

export default AboutMe;