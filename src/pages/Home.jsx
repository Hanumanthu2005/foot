import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../css/Home.css";

function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <Navbar />

      <div className={`home-layout ${animate ? "home-enter" : ""}`}>

        {/* Main Monitoring Area */}
        <div className="monitoring-section">
          <h2 className="section-heading">Live Foot Traffic Monitoring</h2>

          <div className="cctv-box">
            <p className="cctv-placeholder">Live CCTV / Video Stream</p>
          </div>
        </div>

        {/* Analytics Board */}
        <div className="analytics-section">
          <h2 className="section-heading">Real-Time Analytics</h2>

          <div className="analytics-grid">
            <div className="analytics-card">
              <span className="metric-label">Current Occupancy</span>
              <span className="metric-value">124</span>
            </div>

            <div className="analytics-card">
              <span className="metric-label">Entries</span>
              <span className="metric-value">86</span>
            </div>

            <div className="analytics-card">
              <span className="metric-label">Exits</span>
              <span className="metric-value">62</span>
            </div>

            <div className="analytics-card">
              <span className="metric-label">Peak Count</span>
              <span className="metric-value">157</span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
