import React from 'react';
import { EqualizerArea, EqualizerScores } from '@/shared/types/storage';

interface DealbreakerSlidersProps {
  scores: EqualizerScores;
  onChange: (area: EqualizerArea, value: number) => void;
  disabled?: boolean;
}

const DealbreakerSliders: React.FC<DealbreakerSlidersProps> = ({
  scores,
  onChange,
  disabled = false
}) => {
  const areas: { key: EqualizerArea; label: string; description?: string }[] = [
    { 
      key: 'communication', 
      label: 'Communication',
      description: 'How well you connect through conversation and understanding'
    },
    { 
      key: 'physical_attraction', 
      label: 'Physical Attraction',
      description: 'Physical chemistry and attraction level'
    },
    { 
      key: 'emotional_connection', 
      label: 'Emotional Connection',
      description: 'Emotional intimacy and bonding'
    },
    { 
      key: 'shared_values', 
      label: 'Shared Values',
      description: 'Alignment on life principles and beliefs'
    },
    { 
      key: 'lifestyle_compatibility', 
      label: 'Lifestyle Compatibility',
      description: 'How well your daily lives and habits align'
    },
    { 
      key: 'future_goals', 
      label: 'Future Goals',
      description: 'Shared vision for the future and life plans'
    },
    { 
      key: 'trust_respect', 
      label: 'Trust & Respect',
      description: 'Mutual trust, respect, and reliability'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Set Your Dealbreaker Lines</h3>
        <p className="text-gray-600 text-base">
          Set your minimum acceptable scores (0-10) for each area. These represent your personal dealbreaker lines - 
          the lowest score you'd accept in a potential partner.
        </p>
      </div>
      
      {areas.map(({ key, label, description }) => (
        <div key={key} className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h4 className="text-xl font-medium text-gray-900">{label}</h4>
              <div className="flex flex-col">
                <p className="text-base text-gray-500 mt-1">{description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                min="0"
                max="10"
                step="1"
                value={scores[key]}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value) && value >= 0 && value <= 10) {
                    onChange(key, value);
                  }
                }}
                disabled={disabled}
                className="w-16 px-2 py-1 text-2xl font-bold text-gray-900 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="flex items-center justify-center">
                <p className="text-base text-gray-500">min score</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              {/* Background track */}
              <div className="w-full h-2 bg-gray-200 rounded-lg"></div>
              
              {/* Acceptable zone (0 to selected value) - green */}
              <div 
                className="absolute top-0 left-0 h-2 bg-green-500 rounded-lg transition-all duration-200"
                style={{ width: `${(scores[key] / 10) * 100}%` }}
              ></div>
              
              {/* Above selector zone (selected value to 10) - grey */}
              <div 
                className="absolute top-0 h-2 bg-gray-300 rounded-lg transition-all duration-200"
                style={{ 
                  left: `${(scores[key] / 10) * 100}%`,
                  width: `${((10 - scores[key]) / 10) * 100}%`
                }}
              ></div>
            </div>
            
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={scores[key]}
              onChange={(e) => onChange(key, parseInt(e.target.value))}
              disabled={disabled}
              className={`absolute top-0 w-full h-8 bg-transparent rounded-lg appearance-none cursor-grab active:cursor-grabbing slider ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              style={{ marginTop: '-12px' }}
            />
            <div className="flex justify-between text-base text-gray-400 mt-2">
              <span>0</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
          </div>
          
          {/* Visual indicator */}
          <div className="flex items-center space-x-2 text-base">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-gray-500">Acceptable (0-{scores[key]})</span>
            </div>
            <div className="flex-1 border-t border-gray-200"></div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <span className="text-gray-500">Above minimum ({scores[key]}-10)</span>
            </div>
          </div>
        </div>
      ))}

      <style dangerouslySetInnerHTML={{
        __html: `
          .slider {
            z-index: 20;
            background: transparent !important;
          }
          
          .slider::-webkit-slider-thumb {
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #1f2937;
            cursor: grab;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            border: 2px solid white;
            position: relative;
            z-index: 30;
            transition: all 0.2s ease;
          }
          
          .slider:hover::-webkit-slider-thumb {
            transform: scale(1.1);
            box-shadow: 0 3px 8px rgba(0,0,0,0.4);
          }
          
          .slider:active::-webkit-slider-thumb {
            cursor: grabbing;
            transform: scale(1.2);
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
          }
          
          .slider::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #1f2937;
            cursor: grab;
            border: 2px solid white;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            position: relative;
            z-index: 30;
            transition: all 0.2s ease;
          }

          .slider:hover::-moz-range-thumb {
            transform: scale(1.1);
            box-shadow: 0 3px 8px rgba(0,0,0,0.4);
          }

          .slider:active::-moz-range-thumb {
            cursor: grabbing;
            transform: scale(1.2);
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
          }

          .slider:disabled::-webkit-slider-thumb {
            cursor: not-allowed;
            background: #9ca3af;
            transform: none;
          }

          .slider:disabled::-moz-range-thumb {
            cursor: not-allowed;
            background: #9ca3af;
            transform: none;
          }

          /* Remove default track styling */
          .slider::-webkit-slider-track {
            background: transparent;
          }

          .slider::-moz-range-track {
            background: transparent;
          }
        `
      }} />
    </div>
  );
};

export default DealbreakerSliders;
