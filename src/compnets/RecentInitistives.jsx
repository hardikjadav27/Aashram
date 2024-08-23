import React from 'react';
import Cow from '../Photos/1.jpg';
import Educations from '../Photos/Educations.jpg';
import Temple from '../Photos/Temple.jpg';
import '../Style/RecentInitistives.css';

const RecentInitistives = () => {
  return (
    <div className="initiatives-container">
      <h2>Our Recent Initiatives</h2>
      <div className="initiatives-grid">
        
        {/* Goshala Section */}
        <div className="initiative-card">
          <img src={Cow} alt="Cow" className="initiative-image" />
          <h3>Goshala</h3>
          <p>Sri Ram Ashram and Gaushala Trust, a charitable organization, is committed to caring for Gaumata (cows) who are left alone or abandoned due to physical inability.</p>
          <a href="url" className="read-more">Read More</a>
        </div>
        
        {/* Gurukul Education Section */}
        <div className="initiative-card">
          <img src={Educations} alt="Educations" className="initiative-image" />
          <h3>Gurukul Education</h3>
          <p>Sri Ram Ashram and Gaushala Trust has embraced the Gurukul system, an ancient Indian education tradition. Our dedicated Gurus impart teachings on Vedas, religion, and the rich culture of ancient India.</p>
          <a href="url" className="read-more">Read More</a>
        </div>
        
        {/* Temple Construction Section */}
        <div className="initiative-card">
          <img src={Temple} alt="Temple" className="initiative-image" />
          <h3>Temple Construction</h3>
          <p>Temples are the home to our Sanatan Dharam, and our trust is deeply rooted in its ideals. Our core is a sacred temple where we engage in welfare activities to benefit society.</p>
          <a href="url" className="read-more">Read More</a>
        </div>
        
      </div>
    </div>
  );
}

export default RecentInitistives;
