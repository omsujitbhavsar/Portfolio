import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Monitor, Server, Wrench, CheckCircle } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const { ref, isActive } = useScrollReveal();

  const skillCategories = [
    {
      title: "Languages & Web",
      icon: <Monitor size={24} />,
      skills: ["Python", "Java", "SQL", "HTML", "CSS"]
    },
    {
      title: "AI / ML Frameworks",
      icon: <Server size={24} />,
      skills: ["TensorFlow", "Keras", "Scikit-learn", "Transformers (HuggingFace)", "LangChain", "NumPy", "Pandas", "LIME"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={24} />,
      skills: ["Git", "Docker", "VS Code", "Linux", "macOS", "Windows", "Figma", "Canva"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div ref={ref} className={`skills-grid reveal ${isActive ? 'active' : ''}`}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category glass-panel">
              <div className="skill-cat-header">
                <div className="skill-icon-wrapper">
                  {cat.icon}
                </div>
                <h3>{cat.title}</h3>
              </div>
              
              <ul className="skill-list">
                {cat.skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    <CheckCircle size={16} className="skill-check" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
