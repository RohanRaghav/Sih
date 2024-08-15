import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          {/* Logo */}
          <div className="logo">
            <img
              src="/Cac_logo.png"
              alt="Logo"
              width="40"
              height="40"
              className="logo-img"
            />
          </div>

          {/* Desktop Menu */}
          <div className="menu-desktop">
            <a href="/" className="menu-link">
              About
            </a>
            <a href="/" className="menu-link">
              Timelines
            </a>
            <a href="/" className="menu-link">
              Guidance
            </a>
            <button href="/" className="menu-link-button">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="menu-button" onClick={toggleMenu}>
            <svg
              className="menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobileMenu"
          className={`menu-mobile ${isOpen ? "block" : "hidden"}`}
        >
          <a href="/" className="menu-link">
            Home
          </a>
          <a href="/" className="menu-link">
            About
          </a>
          <a href="/" className="menu-link">
            Services
          </a>
          <button href="/" className="menu-link-button">
              Login
            </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
