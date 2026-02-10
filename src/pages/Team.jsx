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
      description: "Specialized in server-side architecture and API development"
    },
    {
      name: "MANGAM PAVITHRA",
      role: "Frontend Developer",
      photo: "/images/team.png",
      description: "Expert in creating responsive and interactive user interfaces"
    },
    {
      name: "DIGUMARTHI VARSHITHA",
      role: "Testing",
      photo: "/images/team.png",
      description: "Ensures quality and reliability through comprehensive testing"
    },
    {
      name: "MOKA SAMUEL PRAKASH",
      role: "Project Coordinator",
      photo: "/images/team.png",
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
                
                {/* <div className="team-skills">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div> */}

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