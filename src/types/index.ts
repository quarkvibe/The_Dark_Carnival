export interface Attraction {
  id: string;
  name: string;
  description: string;
  tentClass: string;
  silhouetteClass: string;
}

export interface Stamp {
  id: string;
  name: string;
  dateCollected: string;
}

export interface Artifact {
  id: string;
  name: string;
  description: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  dateFound: string;
}