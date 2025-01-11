import React, { useState, useEffect } from 'react';
import { FaHome, FaSearch, FaInfoCircle, FaBars, FaTimes, FaCog, FaUserCircle, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({ registeredName }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100vh',
      width: isCollapsed ? '80px' : '250px',
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 2, // Ensure it is above the map
      transition: 'width 0.3s',
    }}>
      {/* Toggle Button */}
      <div onClick={toggleSidebar} style={{ cursor: 'pointer', fontSize: '24px' }}>
        {isCollapsed ? <FaBars /> : <FaTimes />}
      </div>
      {/* Sidebar Content */}
      <nav style={{ marginTop: '20px' }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ margin: '15px 0', display: 'flex', alignItems: 'center' }}>
            <Link to="/profile">
              <FaUserCircle size={isCollapsed ? 20 : 24} style={{ marginRight: '10px' }} />
              {!isCollapsed && 'Profile'}
            </Link>
          </li>
          <li style={{ margin: '15px 0', display: 'flex', alignItems: 'center' }}>
            <Link to="/home">
              <FaHome size={isCollapsed ? 20 : 24} style={{ marginRight: '10px' }} />
              {!isCollapsed && 'Home'}
            </Link>
          </li>
          <li style={{ margin: '15px 0', display: 'flex', alignItems: 'center' }}>
            <Link to="/search">
              <FaSearch size={isCollapsed ? 20 : 24} style={{ marginRight: '10px' }} />
              {!isCollapsed && 'Search'}
            </Link>
          </li>
          <li style={{ margin: '15px 0', display: 'flex', alignItems: 'center' }}>
            <Link to="/about">
              <FaInfoCircle size={isCollapsed ? 20 : 24} style={{ marginRight: '10px' }} />
              {!isCollapsed && 'About'}
            </Link>
          </li>
          <li style={{ margin: '15px 0', display: 'flex', alignItems: 'center' }}>
            <Link to="/settings">
              <FaCog size={isCollapsed ? 20 : 24} style={{ marginRight: '10px' }} />
              {!isCollapsed && 'Settings'}
            </Link>
          </li>
          <li style={{ margin: '15px 0', display: 'flex', alignItems: 'center' }}>
            <Link to="/contact-us">
              <FaEnvelope size={isCollapsed ? 20 : 24} style={{ marginRight: '10px' }} />
              {!isCollapsed && 'Contact Us'}
            </Link>
          </li>
          <li style={{ margin: '15px 0', display: 'flex', alignItems: 'center' }}>
            <Link to="/feedback">
              <FaExclamationTriangle size={isCollapsed ? 20 : 24} style={{ marginRight: '10px' }} />
              {!isCollapsed && 'Feedback'}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;