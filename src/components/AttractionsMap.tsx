import React from 'react';
import { Attraction } from './Attraction';

interface AttractionsMapProps {
  openModal: (modalId: string) => void;
}

export const AttractionsMap = ({ openModal }: AttractionsMapProps) => {
  const attractions = [
    {
      id: 'astrology',
      name: 'The Void\'s Oracle',
      description: 'Peer into the abyss of cosmic horror. Your destiny awaits in the darkness.',
      tentClass: 'astrology-tent',
      silhouetteClass: 'nebula-silhouette',
    },
    {
      id: 'necromancer',
      name: 'Mortimer\'s Crypt',
      description: 'Whispers of the damned echo through eternal night. The dead have tales to tell.',
      tentClass: 'necromancer-tent',
      silhouetteClass: 'mortimer-silhouette',
    },
    {
      id: 'tarot',
      name: 'Madame Fate\'s Prophecies',
      description: 'The cards bleed with dark omens. Your future is sealed in shadow.',
      tentClass: 'tarot-tent',
      silhouetteClass: 'tarot-silhouette',
    },
    {
      id: 'zohar',
      name: 'The Forbidden Grimoire',
      description: 'Ancient tomes of forbidden knowledge. Some doors should remain closed.',
      tentClass: 'zohar-tent',
      silhouetteClass: 'zohar-silhouette',
    },
  ];

  return (
    <section className="attractions-map">
      {attractions.map((attraction) => (
        <Attraction 
          key={attraction.id}
          id={attraction.id}
          name={attraction.name}
          description={attraction.description}
          tentClass={attraction.tentClass}
          silhouetteClass={attraction.silhouetteClass}
          onClick={() => openModal(attraction.id)}
        />
      ))}
    </section>
  );
};