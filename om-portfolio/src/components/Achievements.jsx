import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Trophy, Award } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const { ref, isActive } = useScrollReveal();

  const achievements = [
    {
      title: "Smart India Hackathon (Internal) - 2024",
      desc: "Team Tractics - Ranked Top 30 out of 497 teams and 2,982 participants.",
      icon: <Trophy size={24} />
    },
    {
      title: "Hackathon Finalist",
      desc: "Finalist at Barclays Hack-O-Hire'25 and Cavista'25.",
      icon: <Trophy size={24} />
    }
  ];

  const certifications = [
    {
      title: "Machine Learning With Python",
      issuer: "IBM",
      icon: <Award size={24} />
    },
    {
      title: "Google AI Essentials",
      issuer: "Google",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title">Achievements & Certifications</h2>
        
        <div ref={ref} className={`achievements-container reveal ${isActive ? 'active' : ''}`}>
          
          <div className="achievements-column">
            <h3 className="sub-title"><Trophy className="sub-icon"/> Hackathons</h3>
            <div className="achievements-list">
              {achievements.map((ach, idx) => (
                <div key={idx} className="achievement-card glass-panel">
                  <div className="ach-icon-wrap">{ach.icon}</div>
                  <div className="ach-content">
                    <h4>{ach.title}</h4>
                    <p>{ach.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="achievements-column">
            <h3 className="sub-title"><Award className="sub-icon"/> Certifications</h3>
            <div className="achievements-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="achievement-card glass-panel">
                  <div className="ach-icon-wrap cert-icon">{cert.icon}</div>
                  <div className="ach-content">
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
