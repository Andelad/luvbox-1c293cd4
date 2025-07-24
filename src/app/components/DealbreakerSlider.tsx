import { EqualizerArea } from '@/shared/types/storage';
import React from 'react';

interface DealbreakerSliderProps {
  area: EqualizerArea;
  label: string;
  description?: string;
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
}

const DealbreakerSlider: React.FC<DealbreakerSliderProps> = ({
  area,
  label,
  description,
  value,
  onChange,
  disabled = false,
  showTitle = true,
  showDescription = true
}) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          {showTitle && (
            <h4 className="text-app-subheading">
              {label}
            </h4>
          )}
          {showDescription && description && (
            <div className="flex flex-col">
              <p className="text-app-body mt-1">{description}</p>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            min="0"
            max="10"
            step="1"
            value={value}
            onChange={(e) => {
              const newValue = parseInt(e.target.value);
              if (!isNaN(newValue) && newValue >= 0 && newValue <= 10) {
                onChange(newValue);
              }
            }}
            disabled={disabled}
            className="w-16 px-2 py-1 text-app-input text-center border border-[var(--lb-black-300)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--blue-500)] focus:border-[var(--lb-black-0)]"
          />
          <div className="flex items-center justify-center">
            <p className="text-app-body">min score</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative">
          {/* Background track */}
          <div className="w-full h-2 bg-[var(--lb-black-200)] rounded-lg"></div>

          {/* Acceptable zone (0 to selected value) - green */}
          <div
            className="absolute top-0 left-0 h-2 bg-[var(--success-green-300)] rounded-lg transition-all duration-200"
            style={{ width: `${(value / 10) * 100}%` }}
          ></div>

          {/* Above selector zone (selected value to 10) - grey */}
          <div
            className="absolute top-0 h-2 bg-[var(--lb-black-100)] rounded-lg transition-all duration-200"
            style={{
              left: `${(value / 10) * 100}%`,
              width: `${((10 - value) / 10) * 100}%`
            }}
          ></div>
        </div>

        <input
          type="range"
          min="0"
          max="10"
          step="1"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          onInput={(e) => onChange(parseInt((e.target as HTMLInputElement).value))}
          disabled={disabled}
          className={`absolute top-0 w-full h-2 bg-transparent rounded-lg appearance-none slider ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        />
        <div className="flex justify-between text-app-body mt-2">
          {/* Desktop: Show all numbers 0-10 */}
          <div className="hidden sm:contents">
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
          {/* Mobile: Show only 0, 5, 10 */}
          <div className="sm:hidden w-full flex justify-between">
            <span>0</span>
            <span>5</span>
            <span>10</span>
          </div>
        </div>
      </div>

      {/* Visual indicator */}
      <div className="flex items-center space-x-2 text-app-body">
        <div className="flex items-center space-x-1">
          <span className="text-app-caption">Low importance</span>
        </div>
        <div className="flex-1 border-t border-[var(--lb-black-200)]"></div>
        <div className="flex items-center space-x-1">
          <span className="text-app-caption">High importance</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .slider {
            background: transparent;
            cursor: grab;
            touch-action: none;
            -webkit-user-select: none;
            user-select: none;
          }
          
          .slider:active {
            cursor: grabbing;
          }
          
          .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: var(--lb-black-800);
            border: 2px solid var(--lb-black-0);
            box-shadow: 0 2px 6px var(--lb-black-900-alpha-30);
            cursor: grab;
            -webkit-user-select: none;
            user-select: none;
            touch-action: manipulation;
          }
          
          .slider::-webkit-slider-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 3px 8px var(--lb-black-900-alpha-40);
          }
          
          .slider::-webkit-slider-thumb:active {
            cursor: grabbing;
            transform: scale(1.1);
          }
          
          .slider::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: var(--lb-black-800);
            border: 2px solid var(--lb-black-0);
            box-shadow: 0 2px 6px var(--lb-black-900-alpha-30);
            cursor: grab;
            -moz-appearance: none;
            -moz-user-select: none;
            user-select: none;
            touch-action: manipulation;
            border: none;
          }

          .slider::-moz-range-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 3px 8px var(--lb-black-900-alpha-40);
          }

          .slider::-moz-range-thumb:active {
            cursor: grabbing;
            transform: scale(1.1);
          }

          .slider:disabled {
            cursor: not-allowed;
          }

          .slider:disabled::-webkit-slider-thumb {
            cursor: not-allowed;
            background: var(--lb-black-400);
            transform: none;
          }

          .slider:disabled::-moz-range-thumb {
            cursor: not-allowed;
            background: var(--lb-black-400);
            transform: none;
          }

          .slider::-webkit-slider-track {
            background: transparent;
            height: 2px;
            border: none;
          }

          .slider::-moz-range-track {
            background: transparent;
            height: 2px;
            border: none;
          }

          .slider:focus {
            outline: none;
          }
        `
      }} />
    </div>
  );
};

export default DealbreakerSlider;
