import { useState } from 'react'
import Foter from './components/common/Foter'
import Hader from './components/common/Hader'
import Hero from './components/proj/Hero';
import './App.css'
import ProjectSection from './components/proj/ProjectSection'
import { BrowserRouter as Router } from 'react-router-dom';
import Certifications from './components/cer/Certification';
import Info from './components/common/Info';

function App() {
  

  return (
    <>
     <Router>
      <Hader/>
      <section id="home">
      
      <Hero/>
     </section>
     <section id="projects">
      <ProjectSection/>
      </section>
      <section id="cert">
        <Certifications/>
      </section>
      <section id="info">
      <Info/>
      </section>
      <Foter/>
    </Router>
    </>
  )
}

export default App
