import React, {useState, useEffect } from 'react'
import videoBg from './videos/video1.mp4'
import "./video2.css"

const Video = () => {
  
  
  return (
  
   <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1 className="first">Добро пожаловать</h1>
            <p>На мой сайт.</p>
        </div>
        </div>
       
  )
}

export default Video