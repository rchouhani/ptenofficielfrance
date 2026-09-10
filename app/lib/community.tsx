export type CommunityCity = {
  name: string;
  lat: number;
  lng: number;
};

export const COMMUNITY_CITIES: CommunityCity[] = [
  { name: "Paris", lat: 48.8566, lng: 2.3522 },
  { name: "Québec", lat: 46.8139, lng: -71.208 },
  { name: "Lyon", lat: 45.764, lng: 4.8357 },
  { name: "Bordeaux", lat: 44.8378, lng: -0.5792 },
  { name: "Marseille", lat: 43.2965, lng: 5.3698 },
  { name: "Rennes", lat: 48.1173, lng: -1.6778 },
  { name: "Lille", lat: 50.6292, lng: 3.0573 },
  { name: "Montréal", lat: 45.5019, lng: -73.5674 },
  { name: "Bruxelles", lat: 50.8503, lng: 4.3517 },
];

export type CommunityCityWithMembers = CommunityCity & { members: number };

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getCommunityMembersByCity(): CommunityCityWithMembers[] {
  return COMMUNITY_CITIES.map((city) => ({
    ...city,
    members: randomBetween(15, 25),
  }));
}