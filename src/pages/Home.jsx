import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../css/Home.css";

function Home() {
  const [animate, setAnimate] = useState(false);
  const [currentOccupancy, setCurrentOccupancy] = useState(124);
  const [entries, setEntries] = useState(86);
  const [exits, setExits] = useState(62);
  const [peakCount, setPeakCount] = useState(157);

  useEffect(() => {
    setAnimate(true);

    // Simulate real-time data updates
    const interval = setInterval(() => {
      setCurrentOccupancy(prev => prev + Math.floor(Math.random() * 5) - 2);
      setEntries(prev => prev + Math.floor(Math.random() * 3));
      setExits(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <Navbar />

      {/* Background Animation */}
      <div className="background-animation">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className={`home-layout ${animate ? "home-enter" : ""}`}>
        
        {/* Page Header */}
        <div className="home-header">
          <div className="badge">
            <span className="badge-dot"></span>
            Live Monitoring Dashboard
          </div>
          <h1 className="page-title">
            System <span className="gradient-text">Overview</span>
          </h1>
          <p className="page-subtitle">
            Real-time foot traffic analysis and occupancy monitoring
          </p>
        </div>

        {/* Main Monitoring Area */}
        <div className="monitoring-section">
          <div className="section-header">
            <h2 className="section-heading">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Live Foot Traffic Monitoring
            </h2>
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">Live</span>
            </div>
          </div>

          <div className="cctv-box">
            <div className="cctv-overlay">
              <div className="cctv-grid-overlay"></div>
            </div>
            
            <div className="cctv-placeholder">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Live CCTV / Video Stream</p>
              <span className="cctv-info">Waiting for video feed...</span>
            </div>

            <div className="cctv-controls">
              <button className="control-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 3L19 12L5 21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Start
              </button>
              <button className="control-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="6" y="4" width="4" height="16" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="4" width="4" height="16" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Pause
              </button>
              <button className="control-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Stop
              </button>
            </div>
          </div>
        </div>

        {/* Analytics Board */}
        <div className="analytics-section">
          <div className="section-header">
            <h2 className="section-heading">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 9L13 14L9 10L3 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Real-Time Analytics
            </h2>
            <div className="analytics-timestamp">
              Updated: {new Date().toLocaleTimeString()}
            </div>
          </div>

          <div className="analytics-grid">
            <div className="analytics-card occupancy">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-content">
                <span className="metric-label">Current Occupancy</span>
                <span className="metric-value">{currentOccupancy}</span>
                <div className="metric-trend up">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>+8% from avg</span>
                </div>
              </div>
            </div>

            <div className="analytics-card entries">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 17L15 12L10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-content">
                <span className="metric-label">Entries Today</span>
                <span className="metric-value">{entries}</span>
                <div className="metric-trend neutral">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Steady</span>
                </div>
              </div>
            </div>

            <div className="analytics-card exits">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 17L9 12L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-content">
                <span className="metric-label">Exits Today</span>
                <span className="metric-value">{exits}</span>
                <div className="metric-trend neutral">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Normal</span>
                </div>
              </div>
            </div>

            <div className="analytics-card peak">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-content">
                <span className="metric-label">Peak Count</span>
                <span className="metric-value">{peakCount}</span>
                <div className="metric-trend down">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>At 2:45 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">📊</div>
              <div className="info-content">
                <h4>Average Flow Rate</h4>
                <p>12 people/min</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">⏱️</div>
              <div className="info-content">
                <h4>Average Dwell Time</h4>
                <p>18 minutes</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📈</div>
              <div className="info-content">
                <h4>Capacity Utilization</h4>
                <p>62% of max</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;