import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <span className="logo-icon-text">FT</span>
          </div>
          <span className="logo-text">
            Foot<span className="logo-gradient">Traffic</span>
          </span>
        </Link>

        <div className={`nav-links ${mobileMenuOpen ? "nav-links-open" : ""}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive("/") ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Home</span>
            <div className="nav-link-underline"></div>
          </Link>
          <Link 
            to="/scope" 
            className={`nav-link ${isActive("/scope") ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Scope</span>
            <div className="nav-link-underline"></div>
          </Link>
          <Link 
            to="/team" 
            className={`nav-link ${isActive("/team") ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Team</span>
            <div className="nav-link-underline"></div>
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>About</span>
            <div className="nav-link-underline"></div>
          </Link>
          
          <Link 
            to="/home" 
            className="nav-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Get Started</span>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;