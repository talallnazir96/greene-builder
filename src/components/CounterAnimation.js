import React, { useState, useEffect } from 'react';

function CounterAnimation({ targetNumber, duration }) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let startTime;
    const animateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.ceil(targetNumber / (duration / 1000));
      const newValue = Math.min(targetNumber, increment * (progress / 1000));

      setCurrentNumber(newValue);

      if (progress < duration) {
        requestAnimationFrame(animateCounter);
      }
    };

    requestAnimationFrame(animateCounter);

    return () => {
      setCurrentNumber(0);
    };
  }, [targetNumber, duration]);

  return <div className="counter-exp">{Math.floor(currentNumber)}<span>+</span></div>;
}

export default CounterAnimation;
