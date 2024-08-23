import React from 'react';
import '../Style/Donations.css';

const Donations = () => {
  return (
    <div className="donations-container">
      <div className="header">
        <h1>Passion Unleashes Potential</h1>
        <p>
          Support our cause through your generous donation. Your contribution enables us to make a positive impact in our community. Visit our website to donate securely online. Every donation, big or small, helps us continue our mission.
        </p>
        <div className="goal-raised">
          <span>🎯 Goal: ₹4500</span> 
          <span>👍 Raised: ₹5000</span>
        </div>
        <button className="main-donate-button">DONATE NOW</button>
      </div>
      
      <div className="cards">
        <div className="card">
          <h2>Gurukul Education</h2>
          <div className="amount">₹1200</div>
          <p className="per-month">Per Month</p>
          <p className="card-description">A gift of ₹1200 Rs/- Save and care for cows. Support our Gaushala by donating today.</p>
          <button className="card-donate-button">DONATE NOW</button>
        </div>
        
        <div className="card">
          <h2>Temple Construction</h2>
          <div className="amount">₹600</div>
          <p className="per-month">Per Month</p>
          <p className="card-description">A gift of ₹600 Rs/- Help construct temples through your generous donation today.</p>
          <button className="card-donate-button">DONATE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Donations;
