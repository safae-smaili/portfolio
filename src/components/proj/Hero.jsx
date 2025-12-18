import React from 'react'
//import white from '../../assets/white.jpg'
import white from '/meavatar.png'
import '../../style/hero.css'
const Hero = () => {
  return (
    <>

    <div className='allhero'>
      
      
      
       <div className='text'>
        <h3>Hello!</h3>
     
       
        <h2 > I'm <span className='col'>Safae Samaili</span></h2>
        <h3>A master's student in <span className='col'>Data Science and Engineering</span></h3>
      
        <p>I'M passionate about using AI to solve real-world problems.
      
      I'm currently building my data science skills through hands-on projects. 
        I've developed a strong foundation in Python, machine learning algorithms, 
        and deep learning.  
        
          <span className='col'> I'm seeking an opportunity to contribute to data science projects and expand my 
          knowledge in this wonderful domain.</span></p>
      </div>
      
      
        <img src={white} alt='bg' className='img'/>
      </div>
      
    

  </>)
}

export default Hero