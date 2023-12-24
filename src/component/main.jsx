// Main.jsx

import React, { useEffect } from 'react';
import './main.css';
import moonIcon from '../assets/closeup-full (1).png';
import earthIcon from '../assets/download earth.png';
import astronautIcon from '../assets/astron (1).png';
import sunIcon from '../assets/image sun (1).png';

const Main = () => {
  useEffect(() => {
    const shootingStars = document.querySelectorAll('.shooting-star');

    shootingStars.forEach((star) => {
      const speed = Math.random() * 2 + 1;
      const delay = Math.random() * 5;
      const duration = Math.random() * 2 + 2;

      star.style.animation = `shooting-star-animation ${duration}s linear ${delay}s infinite`;

      star.style.setProperty('--speed', speed);
    });
  }, []);

  return (
    <div className="sky-container">
      <div className="stars">
        {[...Array(100)].map((_, index) => (
          <div key={index} className="star" />
        ))}
      </div>
      <div className="shooting-stars">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="shooting-star" />
        ))}
      </div>
      <div className="moon">
        <img src={moonIcon} alt="Moon" />
      </div>
      <div className="earth">
        <img src={earthIcon} alt="Earth" />
      </div>
      <div className="astronaut">
        <img src={astronautIcon} alt="Astronaut" />
      </div>
      <div className="sun">
        <img src={sunIcon} alt="Sun" />
      </div>
      <div className="overlay-container">
        <div className="error-container">
          <p className="error-text">
            <strong>Oops!</strong> You've stumbled upon this page because the project you're looking for hasn't been hosted, is a desktop application, a clone, or follows a format that can't be hosted. It might also be a private application. For more information about the app you're searching for, please{' '}
            <a href="https://otis-ke.github.io/portfolio/#contact" className="contact-link">contact me</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
