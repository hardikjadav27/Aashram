// import React from 'react'
// import Cow from '../Photos/Cow.png'
// import Krishna from '../Photos/Krishna.png'
// import RamNavami from '../Photos/Ram Navami.png'
// const Celebrations = () => {
//   return (
//     <div>
//       <h2>What we Celebrations</h2>
//       <h5>Sri Shiv Tatava Aasharam</h5>
//       <div>
//         <img src={Krishna} alt="Images" />
//         <h2>Janmashtami</h2>
//         <p>At Sri Ram Ashram and Gaushala Trust, we celebrate Janmashtami, the birth anniversary of Lord Krishna with great devotion.</p>
//         <button>
//             READ MORE
//         </button> 
//       </div>
//       <div>
//         <img src={Cow} alt="Images" />
//         <h2>Gopashtami</h2>
//         <p>Every year, Gopashtami is observed at our organisation premises on the auspicious Shukla Ashtami of the month of Kartik. </p>
//         <button>
//             READ MORE
//         </button> 
//       </div>
//       <div>
//         <img src={RamNavami} alt="Images" />
//         <h2>Ram Navami</h2>
//         <p>We joyfully celebrate Ram Navami on the ninth day of Chaitra Navaratri. It is a holy Hindu festival marking Lord Rama’s birth,</p>
//         <button>
//             READ MORE
//         </button> 
//       </div>
//     </div>
//   )
// }

// export default Celebrations

import React from 'react';
import Cow from '../Photos/1.jpg';
import Educations from '../Photos/Educations.jpg';
import Temple from '../Photos/Temple.jpg';
import '../Style/RecentInitistives.css';

const Celebrations = () => {
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

export default Celebrations;
