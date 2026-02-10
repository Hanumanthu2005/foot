import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../css/LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="landing">
      <Navbar />

      {/* Background Image with Overlay */}
      <div className="background-wrapper">
        <div className="background-image"></div>
        <div className="background-overlay"></div>
        <div className="background-gradient"></div>
      </div>

      {/* Animated Elements */}
      <div className="floating-elements">
        <div className="float-shape shape-1"></div>
        <div className="float-shape shape-2"></div>
        <div className="float-shape shape-3"></div>
      </div>

      {/* Hero Section */}
      <section className="full-section hero">
        <div className={`hero-content ${animate ? "hero-enter" : ""}`}>
          <div className="badge">
            <span className="badge-dot"></span>
            Computer Vision • Deep Learning • Real-Time Analytics
          </div>
          
          <h1 className="hero-title">
            Automated Foot Traffic
            <span className="gradient-text"> Counter</span>
          </h1>
          
          <p className="hero-description">
            An intelligent computer vision–based system for real-time,
            dual-directional people counting using deep learning and object
            tracking. The platform accurately monitors foot traffic through
            entryways without manual intervention, enabling reliable occupancy
            analysis and crowd flow insights.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/home")}
            >
              <span>View System Overview</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button className="secondary-btn" onClick={() => navigate("/documentation")}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 12H15M9 8H15M9 16H15M5 12V12.01M5 8V8.01M5 16V16.01M3 4H17C17.5523 4 18 4.44772 18 5V17C18 17.5523 17.5523 18 17 18H3C2.44772 18 2 17.5523 2 17V5C2 4.44772 2.44772 4 3 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Documentation
            </button>
          </div>

          {/* Stats Section */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">99.5%</div>
              <div className="stat-label">Accuracy Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Real-Time</div>
              <div className="stat-label">Processing Speed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Monitoring</div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🎯</div>
              </div>
              <h3>Real-Time Tracking</h3>
              <p>Instant detection and counting with minimal latency using advanced algorithms</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🔄</div>
              </div>
              <h3>Dual-Directional</h3>
              <p>Accurately tracks entry and exit movements simultaneously</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🧠</div>
              </div>
              <h3>Deep Learning</h3>
              <p>Advanced neural networks ensure high accuracy in crowded environments</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;