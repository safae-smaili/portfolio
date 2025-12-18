import React from 'react'
import cv from '/cv.png'
import '../../style/info.css'
const Info = () => {
  return (
   <div className='info'>
    <h2>Hi again! </h2>
    <p>this is my Cv for additional information:</p>
    <img src={cv} className='cv' alt="CV"/>
    <p>Thank you for visiting my portfolio!</p>

   </div>
  )
}

export default Info;
