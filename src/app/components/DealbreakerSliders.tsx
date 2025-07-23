import { RELATIONSHIP_AREAS } from '@/content/LuvBoxContentLogic';
import { EqualizerArea, EqualizerScores } from '@/shared/types/storage';
import React from 'react';

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
      label: RELATIONSHIP_AREAS.personality.label,
      description: RELATIONSHIP_AREAS.personality.shortDescription
    },
    {
      key: 'physical_attraction',
      label: RELATIONSHIP_AREAS.physical_attraction.label,
      description: RELATIONSHIP_AREAS.physical_attraction.shortDescription
    },
    {
      key: 'emotional_connection',
      label: RELATIONSHIP_AREAS.close_circle_vibes.label,
      description: RELATIONSHIP_AREAS.close_circle_vibes.shortDescription
    },
    {
      key: 'shared_values',
      label: RELATIONSHIP_AREAS.values.label,
      description: RELATIONSHIP_AREAS.values.shortDescription
    },
    {
      key: 'lifestyle_compatibility',
      label: RELATIONSHIP_AREAS.goals.label,
      description: RELATIONSHIP_AREAS.goals.shortDescription
    },
    {
      key: 'future_goals',
      label: RELATIONSHIP_AREAS.behaviour.label,
      description: RELATIONSHIP_AREAS.behaviour.shortDescription
    },
    {
      key: 'trust_respect',
      label: RELATIONSHIP_AREAS.viability.label,
      description: RELATIONSHIP_AREAS.viability.shortDescription
    },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-app-heading text-[var(--lb-black-900)] mb-3">Set Your Dealbreaker Lines</h3>
        <p className="text-[var(--lb-black-600)] text-app-body">
          Set your minimum acceptable scores (0-10) for each area. These represent your personal dealbreaker lines -
          the lowest score you'd accept in a potential partner.
        </p>
      </div>

      {areas.map(({ key, label, description }) => (
        <div key={key} className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h4 className="text-app-heading text-[var(--lb-black-900)]" style={{ fontFamily: 'var(--font-body)' }}>{label}</h4>
              <div className="flex flex-col">
                <p className="text-app-body text-[var(--lb-black-500)] mt-1">{description}</p>
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
                className="w-16 px-2 py-1 text-app-input text-[var(--lb-black-900)] text-center border border-[var(--lb-black-300)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--blue-500)] focus:border-[var(--lb-black-0)]"
              />
              <div className="flex items-center justify-center">
                <p className="text-app-body text-[var(--lb-black-500)]">min score</p>
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
                style={{ width: `${(scores[key] / 10) * 100}%` }}
              ></div>

              {/* Above selector zone (selected value to 10) - grey */}
              <div
                className="absolute top-0 h-2 bg-[var(--lb-black-100)] rounded-lg transition-all duration-200"
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
              onInput={(e) => onChange(key, parseInt((e.target as HTMLInputElement).value))}
              disabled={disabled}
              className={`absolute top-0 w-full h-2 bg-transparent rounded-lg appearance-none slider ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
            <div className="flex justify-between text-app-body text-[var(--lb-black-400)] mt-2">
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
          <div className="flex items-center space-x-2 text-app-body">
            <div className="flex items-center space-x-1">
              <span className="text-[var(--lb-black-500)]">Low importance</span>
            </div>
            <div className="flex-1 border-t border-[var(--lb-black-200)]"></div>
            <div className="flex items-center space-x-1">
              <span className="text-[var(--lb-black-500)]">High importance</span>
            </div>
          </div>
        </div>
      ))}

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

export default DealbreakerSliders;
