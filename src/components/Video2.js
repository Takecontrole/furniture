import React from 'react'
import videoBg from './videos/video2.mp4'
import "./video2.css"
import { LinkContainer } from "react-router-bootstrap";

const Video = () => {
  return (
    <LinkContainer to="/collect/ручная работа">
<div className='main'>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1 className="first">Ручная работа</h1>
            <p>Сделанная с любовью к своему делу.</p>
            <button>Перейти к коллекции</button>
        </div>
    </div>
    </LinkContainer>
  )
}

export default Video