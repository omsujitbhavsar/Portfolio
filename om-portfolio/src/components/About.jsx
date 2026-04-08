import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GraduationCap, Calendar } from 'lucide-react';
import './About.css';

const About = () => {
  const { ref, isActive } = useScrollReveal();

  const education = [
    {
      degree: "Bachelor of Technology, CSE (AIML)",
      school: "Vishwakarma Institute of Technology, Pune",
      date: "Nov 2022 - June 2026",
      score: "CGPA: 9.01/10.00"
    },
    {
      degree: "HSC (Class XII)",
      school: "Pemraj Sarda, Ahmednagar",
      date: "Aug 2020 - March 2022",
      score: "Percentage: 81.00% | Maharashtra State Board"
    },
    {
      degree: "SSC (Class X)",
      school: "St. Vivekanand English School",
      date: "June 2019 - March 2020",
      score: "Percentage: 91.80% | Maharashtra State Board"
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div ref={ref} className={`about-content reveal ${isActive ? 'active' : ''}`}>
          <div className="about-text glass-panel">
            <p>
              I am a passionate final-year engineering student at VIT Pune with a strong foundation in Artificial Intelligence, Machine Learning, Data Structures & Algorithms, and core computer science.
            </p>
            <p>
              My journey has been defined by a deep enthusiasm for building scalable ML models and software systems, backed by extensive hands-on project experience and hackathon participation.
            </p>
          </div>

          <div className="education-timeline">
            <h3 className="timeline-title">
              <GraduationCap className="timeline-icon" /> Education
            </h3>
            
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item glass-panel">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">
                    <Calendar size={14} /> {edu.date}
                  </div>
                  <h4 className="timeline-degree">{edu.degree}</h4>
                  <p className="timeline-school">{edu.school}</p>
                  <p className="timeline-score">{edu.score}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
