import { RELATIONSHIP_AREAS } from '@/content/LuvBoxContentLogic';
import { EqualizerArea, EqualizerScores } from '@/shared/types/storage';
import React from 'react';
import DealbreakerSlider from './DealbreakerSlider';

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
        <DealbreakerSlider
          key={key}
          area={key}
          label={label}
          description={description}
          value={scores[key]}
          onChange={(value) => onChange(key, value)}
          disabled={disabled}
          showTitle={true}
          showDescription={true}
        />
      ))}

    </div>
  );
};

export default DealbreakerSliders;
