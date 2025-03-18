import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';
import profilePic from '../assets/profile.png';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Portfolio Logo" />
          </Link>
          <ul className="navbar-links">
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#skills">Skills</Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><Link to="/#experience">Experience</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ul>
        </div>

        <div className="navbar-right">
          <div className="hamburger" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img src={profilePic} alt="Profile" className="profile-icon" />
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

      {/* Sidebar (Mobile Menu) */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <img src={logo} alt="Portfolio Logo" />
        </div>
        <ul>
          <li><Link to="/#about" onClick={closeSidebar}><FaHome /> About</Link></li>
          <li><Link to="/#skills" onClick={closeSidebar}><FaTools /> Skills</Link></li>
          <li><Link to="/#projects" onClick={closeSidebar}><FaProjectDiagram /> Projects</Link></li>
          <li><Link to="/#experience" onClick={closeSidebar}><FaBriefcase /> Experience</Link></li>
 
