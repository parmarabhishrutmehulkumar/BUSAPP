// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectLanguage from './Components/UserPanel/SelectLanguage'; // Import the new SelectLanguage component
import Login from './Components/UserPanel/Login';
import Register from './Components/UserPanel/Register';
import Home from './Components/UserPanel/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectLanguage />} /> {/* Set SelectLanguage as the default route */}
        <Route path="/register" element={<Register />} /> {/* Register page route */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} /> {/* Home route */}
      </Routes>
    </Router>
  );
};

export default App;
