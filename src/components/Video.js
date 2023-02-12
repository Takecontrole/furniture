import React, {useState, useEffect } from 'react'
import videoBg from './videos/video1.mp4'
import "./video.css"

const Video = () => {
  
  
  return (
  
   <div className='first-video-main'>
        <div className="first-video-content">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted className="first-video" />
            <h1 className="first-video-text">Добро пожаловать</h1>
            
        </div>
        </div>
       
  )
}

export default Video