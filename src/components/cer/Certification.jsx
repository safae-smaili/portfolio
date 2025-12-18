import React from 'react';
import { certificates } from '../../data/certif';
import '../../style/certification.css';

const Certifications = () => {
  return (
    <section id="certifications">
      <h2 className='section-title'>My Certifications</h2>
      <div className="cert-grid">
        {certificates.map(cert => (
          <div key={cert.id} className="cert-card">
            <h3>{cert.title}</h3>
            <img src={cert.image} alt={cert.title} className="cert-image"/>
            <p className="issuer">{cert.issuer}, {cert.date}</p>
            
            <a className='vrf' href={cert.cUrl} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
    
  );
};
export default Certifications;