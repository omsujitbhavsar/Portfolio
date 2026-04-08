import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Code2, ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const { ref, isActive } = useScrollReveal();

  const projects = [
    {
      title: "Password Strength Analyzer & Security Advisor",
      tech: ["Python", "spaCy", "Bloom Filters", "Ollama (LLM)", "FAISS VectorDB", "HuggingFace"],
      desc: "A multi-layered password evaluation system that combines entropy analysis, pattern detection, and leak database checks.",
      points: [
        "Implemented NLP-powered detection using spaCy and fuzzy matching for unsafe personal data.",
        "Integrated RockYou dataset via Bloom Filter for O(1) breached lookups and FAISS.",
        "Developed Hashcat simulation to estimate cracking times with visualizations.",
        "Enhanced with Ollama LLM to generate ultra-secure alternatives."
      ]
    },
    {
      title: "Offensive Language Detection & Explainability",
      tech: ["Python", "PyTorch", "Transformers (BERT)", "LIME", "SHAP", "IPFS", "AES"],
      desc: "NLP-based model using BERT for offensive language classification integrated with explainable AI for interpretability.",
      points: [
        "Integrated LIME and SHAP to clearly interpret model decisions.",
        "Implemented AES encryption for secure storage of explanations.",
        "Used IPFS (Pinata) for decentralized and tamper-proof data storage.",
        "Built a complete classification pipeline ensuring security and integrity."
      ]
    },
    {
      title: "AI-Powered YouTube Content Recommender",
      tech: ["Python", "KeyBERT", "VADER", "YouTube API", "Web Scraping"],
      desc: "Data-driven recommendation system designed to help creators optimize content based on real audience engagement trends.",
      points: [
        "Analyzed metadata & comments using VADER sentiment analysis.",
        "Calculated engagement scores to spot patterns and top-performing elements.",
        "Leveraged KeyBERT to extract trending SEO keywords from successful videos.",
        "Generated AI-powered title & content suggestions via interactive dashboards."
      ]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div ref={ref} className={`projects-grid reveal ${isActive ? 'active' : ''}`}>
          {projects.map((project, idx) => (
            <div key={idx} className="project-card glass-panel">
              <div className="project-header">
                <Code2 className="project-icon" size={28} />
                <div className="project-links">
                  <a href="#" className="p-link"><Github size={20} /></a>
                  <a href="#" className="p-link"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <ul className="project-points">
                {project.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
