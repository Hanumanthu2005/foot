import { useState, useEffect } from "react";
import "../css/Team.css";
import Navbar from "../components/Navbar";

function Team() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const teamMembers = [
    {
      name: "SAMIREDDY ADI LAKSHMI",
      role: "Backend Developer",
      photo: "/images/team.png",
      skills: ["Python", "Django", "PostgreSQL"],
      description: "Specialized in server-side architecture and API development"
    },
    {
      name: "Team Member 2",
      role: "Frontend Developer",
      photo: "/images/team.png",
      skills: ["React", "JavaScript", "CSS"],
      description: "Expert in creating responsive and interactive user interfaces"
    },
    {
      name: "Team Member 3",
      role: "Testing",
      photo: "/images/team.png",
      skills: ["QA", "Testing", "Debugging"],
      description: "Ensures quality and reliability through comprehensive testing"
    },
    {
      name: "Team Member 4",
      role: "Project Coordinator",
      photo: "/images/team.png",
      skills: ["Management", "Planning", "Documentation"],
      description: "Oversees project timeline and team coordination"
    }
  ];

  return (
    <div className="team-page">
      <Navbar />

      {/* Background Animation */}
      <div className="background-animation">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <section className={`team-section ${animate ? "fade-in" : ""}`}>
        <div className="team-header">
          <div className="badge">
            <span className="badge-dot"></span>
            Meet Our Team
          </div>
          
          <h2 className="section-title">
            The Minds Behind
            <span className="gradient-text">The Innovation</span>
          </h2>

          <p className="section-text">
            A dedicated team of developers and coordinators working together to build
            an intelligent foot traffic counting system using cutting-edge technology.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-photo-wrapper">
                <div className="team-photo-border"></div>
                <img src={member.photo} alt={member.name} className="team-photo" />
                <div className="team-photo-overlay"></div>
              </div>
              
              <div className="team-content">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
                
                <div className="team-skills">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>

                <div className="team-social">
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link" aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 1C19.91 1 18.73 0.650001 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.650001 5.09 1 5.09 1C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link" aria-label="Email">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4L20 4C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="team-stats">
          <div className="stat-item">
            <div className="stat-icon">👥</div>
            <div className="stat-number">4</div>
            <div className="stat-label">Team Members</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🎯</div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Commitment</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">⚡</div>
            <div className="stat-number">24/7</div>
            <div className="stat-label">Collaboration</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🚀</div>
            <div className="stat-number">1</div>
            <div className="stat-label">Shared Vision</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;