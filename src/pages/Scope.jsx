import { useState, useEffect } from "react";
import "../css/Scope.css";
import Navbar from "../components/Navbar";

function Scope() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="scope-page">
      <Navbar />

      {/* Background Animation */}
      <div className="background-animation">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <section className={`scope-section ${animate ? "fade-in" : ""}`}>
        <div className="scope-header">
          <div className="badge">
            <span className="badge-dot"></span>
            Project Vision & Roadmap
          </div>
          
          <h2 className="section-title">
            Project Scope & 
            <span className="gradient-text"> Future Enhancements</span>
          </h2>

          <p className="section-text">
            The Automated Foot Traffic Counting System is designed as a scalable and
            cost-effective solution for real-time people counting using computer
            vision. The current system focuses on accurate detection and tracking
            of individuals passing through entryways, while the future scope
            extends toward advanced analytics and large-scale deployment.
          </p>
        </div>

        <div className="scope-grid">
          <div className="scope-card">
            <div className="scope-card-image">
              <img src="/images/realtime-people-detection.png" alt="Real-time people detection" />
              <div className="scope-card-overlay"></div>
            </div>
            <div className="scope-card-content">
              <div className="scope-number">01</div>
              <h3>Real-Time People Detection</h3>
              <p>
                Automatically detect individuals in live video streams using
                deep learning–based object detection models.
              </p>
              <div className="scope-card-footer">
                <span className="scope-tag">Core Feature</span>
              </div>
            </div>
          </div>

          <div className="scope-card">
            <div className="scope-card-image">
              <img src="/images/object-tracking.png" alt="Object tracking" />
              <div className="scope-card-overlay"></div>
            </div>
            <div className="scope-card-content">
              <div className="scope-number">02</div>
              <h3>Object Tracking & ID Assignment</h3>
              <p>
                Track detected individuals across frames using centroid tracking
                to avoid duplicate counting.
              </p>
              <div className="scope-card-footer">
                <span className="scope-tag">Core Feature</span>
              </div>
            </div>
          </div>

          <div className="scope-card">
            <div className="scope-card-image">
              <img src="/images/foot-direction.png" alt="Directional counting" />
              <div className="scope-card-overlay"></div>
            </div>
            <div className="scope-card-content">
              <div className="scope-number">03</div>
              <h3>Directional Footfall Counting</h3>
              <p>
                Enable dual-directional counting to distinguish entry and exit
                movements through monitored doorways.
              </p>
              <div className="scope-card-footer">
                <span className="scope-tag">Core Feature</span>
              </div>
            </div>
          </div>

          <div className="scope-card">
            <div className="scope-card-image">
              <img src="/images/monitor.png" alt="Occupancy alerts" />
              <div className="scope-card-overlay"></div>
            </div>
            <div className="scope-card-content">
              <div className="scope-number">04</div>
              <h3>Occupancy Monitoring & Alerts</h3>
              <p>
                Trigger real-time alerts when predefined occupancy thresholds
                are exceeded.
              </p>
              <div className="scope-card-footer">
                <span className="scope-tag">Enhancement</span>
              </div>
            </div>
          </div>

          <div className="scope-card">
            <div className="scope-card-image">
              <img src="/images/footfall.png" alt="Data logging and analytics" />
              <div className="scope-card-overlay"></div>
            </div>
            <div className="scope-card-content">
              <div className="scope-number">05</div>
              <h3>Footfall Data Logging</h3>
              <p>
                Store and analyze foot traffic data to support operational
                planning and decision-making.
              </p>
              <div className="scope-card-footer">
                <span className="scope-tag">Analytics</span>
              </div>
            </div>
          </div>

          <div className="scope-card">
            <div className="scope-card-image">
              <img src="/images/cloud.png" alt="Scalable deployment" />
              <div className="scope-card-overlay"></div>
            </div>
            <div className="scope-card-content">
              <div className="scope-number">06</div>
              <h3>Scalable & Cloud-Ready Deployment</h3>
              <p>
                Extend the system with multi-camera support and cloud-based
                analytics for large public spaces.
              </p>
              <div className="scope-card-footer">
                <span className="scope-tag">Future Scope</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Future Enhancements Section */}
        <div className="future-section">
          <h3 className="future-title">Future Enhancements</h3>
          <div className="future-grid">
            <div className="future-item">
              <div className="future-icon">🤖</div>
              <h4>AI-Powered Insights</h4>
              <p>Predictive analytics for crowd patterns and peak hours</p>
            </div>
            <div className="future-item">
              <div className="future-icon">📱</div>
              <h4>Mobile Integration</h4>
              <p>Real-time monitoring through mobile applications</p>
            </div>
            <div className="future-item">
              <div className="future-icon">🔗</div>
              <h4>IoT Integration</h4>
              <p>Connect with existing building management systems</p>
            </div>
            <div className="future-item">
              <div className="future-icon">📊</div>
              <h4>Advanced Dashboards</h4>
              <p>Interactive visualizations and custom reporting</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Scope;