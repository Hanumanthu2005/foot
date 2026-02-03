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

      {/* Hero Section */}
      <section className="full-section hero">
        <div className={`hero-content ${animate ? "hero-enter" : ""}`}>
          <h1>Automated Foot Traffic Counter</h1>
          <p>
            An intelligent computer vision–based system for real-time,
            dual-directional people counting using deep learning and object
            tracking. The platform accurately monitors foot traffic through
            entryways without manual intervention, enabling reliable occupancy
            analysis and crowd flow insights.
          </p>

          <button
            className="home-btn"
            onClick={() => navigate("/home")}
          >
            View System Overview
          </button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
