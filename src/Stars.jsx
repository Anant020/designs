// Code has been modified but the source is taken from Codepen.

import React from 'react';
import './Stars.css';

function Stars() {
    const shootingStars = [];

    for (let i = 0; i < 20; i++) {
        // Generate random left and top positions
        const left = Math.random() * 100; // Random left position from 0% to 100%
        const top = Math.random() * 100; // Random top position from 0% to 100%
        const delay = Math.random() * 10; // Random delay from 0s to 10s

        
        shootingStars.push(
            <div
                key={i}
                className="shooting_star"
                style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${delay}s` }} // Set dynamic left, top, and animation delay
            ></div>
        );
    }

    return (
        <div className=' ease-in-out' >
            <div className="night w-[60vh] h-[60vh] absolute ml-[120vh] top-0">
                {shootingStars}
            </div>
            <div className="night w-[60vh] h-[60vh] absolute ml-[70vh] top-[-60px]">
                {shootingStars}
            </div>
            <div className="night w-[60vh] h-[160vh] absolute ml-[0vh] top-[-460px]">
                {shootingStars}
            </div>
            <div className="night w-[180vh] h-[20vh] absolute">
                {shootingStars}
            </div>
        </div>
    );
}

export default Stars;
