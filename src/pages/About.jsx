import Navbar from "../components/Navbar";
import "../css/About.css";

function About() {
  return (
    <div className="about-page">
      <Navbar />
      
      {/* Background Animation - matching Home.css */}
      <div className="background-animation">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <section className="section">
        <h2 className="section-title">About the Project</h2>

        <p className="section-text">
          The Automated Foot Traffic Dual Directional Counting System is a
          computer vision–based solution developed to accurately monitor and
          analyze the movement of people through entryways in real time.
          Traditional manual counting and sensor-based approaches are often
          inaccurate and inefficient, especially in high-traffic environments.
          This system overcomes those limitations through automated detection
          and tracking of individuals using deep learning.
        </p>

        <h3 className="sub-title">Algorithms & Models Used</h3>
        <p className="section-text">
          The system employs a Single Shot Detector (SSD) with a MobileNet
          architecture for fast and efficient person detection in video frames.
          A centroid-based object tracking algorithm assigns unique IDs to
          detected individuals and tracks them across frames to prevent duplicate
          counting and enable reliable movement analysis.
        </p>

        <h3 className="sub-title">System Performance</h3>
        <p className="section-text">
          The model is optimized for real-time performance on standard CPU-based
          systems without requiring specialized hardware such as GPUs. The
          accuracy of detection and counting depends on environmental factors
          such as lighting conditions, camera placement, and video quality, but
          remains reliable for real-world deployment scenarios.
        </p>

        <h3 className="sub-title">Technology Stack</h3>
        <ul className="tech-list">
          <li>Programming Language: Python 3.x</li>
          <li>Computer Vision: OpenCV</li>
          <li>Deep Learning Model: SSD with MobileNet</li>
          <li>Frontend: React.js, HTML5, CSS3</li>
          <li>Backend: Flask, FastAPI, TensorFlow, Keras</li>
          <li>Training Algorithm: Convolution Neural Network</li>
        </ul>
      </section>
    </div>
  );
}

export default About;