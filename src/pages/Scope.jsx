import "../css/Scope.css";
import Navbar from "../components/Navbar";

function Scope() {
  return (
    <>
      <Navbar />

      <section className="section">
        <h2 className="section-title">Project Scope & Future Enhancements</h2>

        <p className="section-text">
          The Automated Foot Traffic Counting System is designed as a scalable and
          cost-effective solution for real-time people counting using computer
          vision. The current system focuses on accurate detection and tracking
          of individuals passing through entryways, while the future scope
          extends toward advanced analytics and large-scale deployment.
        </p>

        <div className="scope-grid">
          <div className="scope-card">
            <img src="/images/realtime-people-detection.png" alt="Real-time people detection" />
            <h3>Real-Time People Detection</h3>
            <p>
              Automatically detect individuals in live video streams using
              deep learning–based object detection models.
            </p>
          </div>

          <div className="scope-card">
            <img src="/images/object-tracking.png" alt="Object tracking" />
            <h3>Object Tracking & ID Assignment</h3>
            <p>
              Track detected individuals across frames using centroid tracking
              to avoid duplicate counting.
            </p>
          </div>

          <div className="scope-card">
            <img src="/images/foot-direction.png" alt="Directional counting" />
            <h3>Directional Footfall Counting</h3>
            <p>
              Enable dual-directional counting to distinguish entry and exit
              movements through monitored doorways.
            </p>
          </div>

          <div className="scope-card">
            <img src="/images/monitor.png" alt="Occupancy alerts" />
            <h3>Occupancy Monitoring & Alerts</h3>
            <p>
              Trigger real-time alerts when predefined occupancy thresholds
              are exceeded.
            </p>
          </div>

          <div className="scope-card">
            <img src="/images/footfall.png" alt="Data logging and analytics" />
            <h3>Footfall Data Logging</h3>
            <p>
              Store and analyze foot traffic data to support operational
              planning and decision-making.
            </p>
          </div>

          <div className="scope-card">
            <img src="/images/cloud.png" alt="Scalable deployment" />
            <h3>Scalable & Cloud-Ready Deployment</h3>
            <p>
              Extend the system with multi-camera support and cloud-based
              analytics for large public spaces.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Scope;
