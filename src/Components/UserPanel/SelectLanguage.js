import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectLanguage.css'; // Import the CSS file

const SelectLanguage = () => {
  const [language, setLanguage] = useState('hi'); // Default to Hindi
  const navigate = useNavigate();

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleContinue = () => {
    // Store selected language in localStorage
    localStorage.setItem('selectedLanguage', language);
    // Redirect to the Register page
    navigate('/register');
  };

  return (
    <div className="select-language-container">
      <h2>भाषा चुनें (Select Language)</h2>
      <div className="language-select-wrapper">
        <select value={language} onChange={handleLanguageChange} className="language-select">
          <option value="hi">हिंदी (Hindi)</option>
          <option value="en">अंग्रेज़ी (English)</option>
          <option value="ta">தமிழ் (Tamil)</option>
          <option value="te">తెలుగు (Telugu)</option>
          <option value="bn">বাংলা (Bengali)</option>
          <option value="kn">ಕನ್ನಡ (Kannada)</option>
          <option value="ml">മലയാളം (Malayalam)</option>
          <option value="gu">ગુજરાતી (Gujarati)</option>
          <option value="mr">मराठी (Marathi)</option>
          {/* Add more Indian languages as needed */}
        </select>
      </div>
      <button onClick={handleContinue} className="continue-button">जारी रखें (Continue)</button>
    </div>
  );
};

export default SelectLanguage;
