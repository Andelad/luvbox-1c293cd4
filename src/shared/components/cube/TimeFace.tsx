import React from 'react';

const TimeFace: React.FC = () => {
    return (
        <div className="face-content w-full h-full flex flex-col items-center justify-center text-app-body" style={{ backgroundColor: 'var(--success-green-500)', color: 'var(--lb-black-0)' }}>
            <span className="text-app-body font-semibold">Time Face</span>
            <button className="mt-2 px-3 py-1 rounded font-semibold shadow transition-colors hover:opacity-90" style={{ backgroundColor: 'var(--lb-black-0)', color: 'var(--success-green-500)' }}>Action</button>
        </div>
    );
};

export default TimeFace;
