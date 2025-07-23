import React from 'react';

const DisplayPurposeFace: React.FC = () => {
    return (
        <div
            className="face-content w-full h-full flex flex-col items-center justify-center text-app-body"
            style={{
                background: 'linear-gradient(to top, var(--lime-50), white)', // Gradient from lime to white, bottom to top
                border: '1px solid var(--lb-black-400)', // Using LB Black for border
                color: 'var(--lb-black-600)', // Darker text for better contrast on light gradient
                transform: 'rotate(90deg)', // Rotate 90 degrees to the right
                borderRadius: '2px' // 2px rounded corners for consistency
            }}
        >
            {/* Example content: replace with interactive or dynamic content as needed */}
            <span className="text-app-body font-semibold">Purpose Face</span>
        </div>
    );
};

export default DisplayPurposeFace;
