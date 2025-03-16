
export interface CommunityProjectType {
  id: number;
  name: string;
  location: string;
  distance: string;
  progress?: number;
  supporters: number;
  participants?: number;
  startDate?: string;
  targetDate?: string;
  status: string;
}

export const localProjects: CommunityProjectType[] = [
  {
    id: 1,
    name: 'Oak Valley Community Forest',
    location: 'Oak Valley',
    distance: '2.4 miles',
    progress: 75,
    supporters: 86,
    participants: 34,
    startDate: 'Jan 15, 2023',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Meadow Ridge Wetland Restoration',
    location: 'Meadow Ridge',
    distance: '5.7 miles',
    progress: 45,
    supporters: 53,
    participants: 21,
    startDate: 'Mar 10, 2023',
    status: 'Active'
  }
];

export const initiatedProjects: CommunityProjectType[] = [
  {
    id: 3,
    name: 'Downtown Community Garden',
    location: 'City Center',
    distance: '1.8 miles',
    progress: 90,
    supporters: 112,
    participants: 45,
    startDate: 'Feb 5, 2023',
    status: 'Your Initiative'
  }
];

export const upcomingProjects: CommunityProjectType[] = [
  {
    id: 4,
    name: 'Green Acres Urban Forest',
    location: 'Green Acres',
    distance: '3.2 miles',
    supporters: 28,
    targetDate: 'Jun 15, 2023',
    status: 'Planning Phase'
  },
  {
    id: 5,
    name: 'Riverside Park Revival',
    location: 'Riverside Park',
    distance: '4.1 miles',
    supporters: 41,
    targetDate: 'Jul 1, 2023',
    status: 'Planning Phase'
  }
];

export const savedProjects: CommunityProjectType[] = [
  {
    id: 6,
    name: 'Highland Park Pollinator Garden',
    location: 'Highland Park',
    distance: '6.3 miles',
    progress: 25,
    supporters: 38,
    participants: 12,
    startDate: 'Apr 20, 2023',
    status: 'Active'
  }
];
