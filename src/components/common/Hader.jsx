import React from 'react'
// import { useState } from 'react';
import '../../style/header.css';
// import astro from '../../assets/astro.png';
import astro from '/logo.png'
import { HashLink as Link } from 'react-router-hash-link';


// // import { Link } from 'react-router';
//     const navList=[
//         {herf:'#home',label:'Home'},
//         {href:'#projects',labe:'Projects'},
//         {href:'#certifications',label:'Certifications'},
//         {href:'#info',label:'Contact'}
//     ];

function Hader(){
    // const[isMenuOpen,setISMenuOpen]=useState(false);

    return (
       <header className='header'>
        <img src={astro} alt="logo" id='logo'></img>

        <ul className="nav">
            <li><Link smooth to='#'  className='anav'>Home</Link></li>
            <li><Link smooth to='#projects' className='anav'>Projects</Link></li>
             <li><Link smooth to='#cert' className='anav'>Certifications</Link></li>
            {/* <li><Link smooth to='#' className='anav'>About Me</Link></li>  */}
        </ul>
        <div className='connect'>
            <Link smooth to='#info' className='anav'>
           CV</Link>
        </div>
       </header>
        
    )
}
export default Hader;
