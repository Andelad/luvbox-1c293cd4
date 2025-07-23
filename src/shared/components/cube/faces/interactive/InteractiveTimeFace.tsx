import React from 'react';

const InteractiveTimeFace: React.FC = () => {
    return (
        <div
            className="face-content w-full h-full flex flex-col items-center justify-center text-app-body"
            style={{
                background: 'linear-gradient(to top, var(--lime-50), white)', // Gradient from lime to white, bottom to top
                border: '1px solid var(--lb-black-400)', // Using LB Black for border
                color: 'var(--lb-black-600)', // Darker text for better contrast on light gradient
                borderRadius: '2px' // 2px rounded corners for consistency
            }}
        >
            <span className="text-app-body font-semibold">Time Face</span>
        </div>
    );
};

export default InteractiveTimeFace;
