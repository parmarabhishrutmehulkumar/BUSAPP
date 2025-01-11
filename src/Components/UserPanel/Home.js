import React, { useState } from 'react';
import MapComponent from './MapComponent';
import Sidebar from './Sidebar';
import CollapsibleBar from './CollapsibleBar'; // Import the new component
import { FaMoon, FaSun } from 'react-icons/fa'; // Icons for dark and light mode

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: isDarkMode ? '#333' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
      transition: 'background-color 0.3s, color 0.3s',
    }}>
      {/* MapComponent as full-screen background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1, // Ensure map is behind other components
      }}>
        <MapComponent isDarkMode={isDarkMode} />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Dark Mode Toggle */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 2, // Ensure toggle is above the map and sidebar
        cursor: 'pointer',
        fontSize: '24px',
      }} onClick={toggleDarkMode}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </div>

      {/* Search Feature */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2, // Ensure search bar is above the map and sidebar
      }}>
        <input
          type="text"
          placeholder="Search for bus routes or stops"
          style={{
            width: '300px',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '8px',
            border: `1px solid ${isDarkMode ? '#666' : '#ccc'}`,
            backgroundColor: isDarkMode ? '#444' : '#fff',
            color: isDarkMode ? '#fff' : '#000',
          }}
        />
      </div>

      {/* Collapsible Bar */}
      <CollapsibleBar />
    </div>
  );
};

export default HomePage;
