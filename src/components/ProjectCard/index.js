import React from 'react';
import './style.css';
import {Button} from 'reactstrap';

function ProjectCard(props) {
    return(
        <section className="wholeCard">
            <div className="leftP">
                <h1 className="pTitle">{props.name}</h1>
                <img className="pImg" src={props.imgSrc} alt='project image'></img>
                <a className="aBut" style={{display: !props.deploySrc && "none"}} href={props.deploySrc}><Button style={{color: 'white', backgroundColor: 'rgb(36, 36, 36)'}}>Deployed App</Button></a>
                <a className="aBut" href={props.codeSrc}><Button style={{color: 'white', backgroundColor: 'rgb(36, 36, 36)'}}>Github Repo</Button></a>
            </div>
            <div className="rightP">
                <p className="pDescrip">{props.description}</p>
                <p>{props.responsibilities}</p>
            </div>

        </section>
    )
    
}

export default ProjectCard;