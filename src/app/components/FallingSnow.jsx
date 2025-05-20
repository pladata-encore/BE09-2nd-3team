"use client"

import { useEffect, useRef } from 'react';
import styles from './FallingSnow.module.css';

export default function FallingSnow() {
  const snowZoneRef = useRef(null);
  const containerRef = useRef(null);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    const createSnowflakes = () => {
      const qt = 150;
      const snowFlakes = [];

      const container = containerRef.current;
      const containerWidth = container?.offsetWidth || 0;
      const containerHeight = container?.offsetHeight || 0;

      for (let i = 0; i < qt; i++) {
        const snownum = randomIntFromInterval(1, 4);
        const snowflake = document.createElement('div');
        snowflake.className = styles[`snowflakes${snownum}`];

        const startX = Math.random() * containerWidth;
        const startY = -Math.random() * containerHeight;     
        
        snowflake.style.left = `${startX}px`;
        snowflake.style.top = '0';
        snowflake.style.transform = `translateY(${startY}px)`; // ✅ 적용
        
        snowFlakes.push(snowflake);
      }

      snowFlakes.forEach(flake => {
        snowZoneRef.current?.prepend(flake);
      });

      return snowFlakes;
    };

    const runSnowStorm = (snowFlakes) => {
      const container = containerRef.current;
      const containerHeight = container?.offsetHeight || 0;
      
      snowFlakes.forEach(flake => {
        const randomStartY = parseFloat(flake.style.transform.match(/-?\d+(\.\d+)?/)[0]) || -50;
        const duration = Math.random() * -2500 + 5000;
        
        const animation = flake.animate([
          { transform: `translateY(${randomStartY}px)`, opacity: 1 },
          { transform: `translateY(${containerHeight - 50}px)`, opacity: 0.3 }
        ], {
          duration: duration,
          easing: 'ease-in-out',
          fill: 'forwards'
        });
      });
    };

    const snowFlakes = createSnowflakes();
    runSnowStorm(snowFlakes);

    const timeout = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.opacity = '0';
        containerRef.current.style.transition = 'opacity 1s';
      }
    }, 3500);

    return () => {
      clearTimeout(timeout);
      snowFlakes.forEach(flake => flake.remove());
    };
  }, []);

  return (
    <div id="sulbingsnow" ref={containerRef} className={styles.sulbingsnow}>
      <div id="snowZone" ref={snowZoneRef}></div>
    </div>
  )
}
