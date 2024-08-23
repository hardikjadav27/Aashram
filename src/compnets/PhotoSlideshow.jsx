import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../Style/PhotoSlideshow.css';
import 'react-slideshow-image/dist/styles.css';

const PhotoSlideshow = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    const slideProperties = {
        duration: 2000, // Duration for each slide (in milliseconds)
        autoplay: true, // Autoplay the slideshow
        transitionDuration: 500, // Duration of the transition (in milliseconds)
        indicators: true, // Show indicators at the bottom
        arrows: true, // Show navigation arrows
    };

    return (
      
        <Slide {...slideProperties}>
             
            {images.map((image, index) => (
                
                <div key={index} className="each-slide-effect">
                    
                    <div style={{ 'backgroundImage': `url(${image})` }}>
                        {/* <span>
                        
                            Slide {index + 1}
                    
                        </span> */}
                    </div>
                    
                </div>
               
            ))}
            
        </Slide>
       
    );
};

export default PhotoSlideshow;
