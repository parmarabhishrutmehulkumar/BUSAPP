import React, { useState } from 'react';
import { FaMapPin, FaBus, FaTicketAlt, FaExchangeAlt } from 'react-icons/fa'; // Added interchange icon

const CollapsibleBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleShowRoute = () => {
    // Handle route & fare logic here
    alert(`Showing route from ${fromLocation} to ${toLocation}`);
  };

  const handleQuickTicket = () => {
    // Handle quick bus ticket logic here
    alert(`Quick bus ticket for ${fromLocation} to ${toLocation}`);
  };

  const handleInterchange = () => {
    setFromLocation(prevToLocation => {
      setToLocation(prevFromLocation => prevToLocation);
      return prevToLocation;
    });
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: isCollapsed ? '280px' : '400px',
      backgroundColor: '#fff',
      color: '#000',
      borderRadius: '8px',
      padding: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      transition: 'width 0.3s',
      zIndex: 2, // Ensure it is above the map
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div onClick={toggleCollapse} style={{
        cursor: 'pointer',
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
      }}>
        {isCollapsed ? 'Expand' : 'Collapse'} 
        <FaMapPin style={{ marginLeft: '10px' }} />
      </div>

      {!isCollapsed && (
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="From"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              style={{
                flex: 1,
                padding: '10px',
                marginRight: '5px',
                fontSize: '16px',
                borderRadius: '8px',
                border: '1px solid #ccc',
              }}
            />
            <button
              onClick={handleInterchange}
              style={{
                backgroundColor: '#f0f0f0',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                marginRight: '5px',
                cursor: 'pointer',
              }}
            >
              <FaExchangeAlt />
            </button>
            <input
              type="text"
              placeholder="To"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              style={{
                flex: 1,
                padding: '10px',
                marginLeft: '5px',
                fontSize: '16px',
                borderRadius: '8px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <button
              onClick={handleShowRoute}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#007bff',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <FaBus style={{ marginRight: '10px' }} />
              Show Route & Fare
            </button>
            <button
              onClick={handleQuickTicket}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#28a745',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <FaTicketAlt style={{ marginRight: '10px' }} />
              Quick Bus Ticket
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollapsibleBar;
