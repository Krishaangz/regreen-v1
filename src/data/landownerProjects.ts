
export interface ProjectType {
  id: number;
  name: string;
  type: string;
  location: string;
  area: string;
  progress?: number;
  startDate?: string;
  endDate?: string;
  status: string;
}

export const activeProjects: ProjectType[] = [
  {
    id: 1,
    name: 'Oak Valley Restoration',
    type: 'Forest Restoration',
    location: 'Oak Valley',
    area: '12.4 acres',
    progress: 75,
    startDate: 'Jan 15, 2023',
    endDate: 'Dec 20, 2023',
    status: 'In Progress'
  },
  {
    id: 2,
    name: 'Meadow Ridge Revival',
    type: 'Grassland Restoration',
    location: 'Meadow Ridge',
    area: '8.7 acres',
    progress: 45,
    startDate: 'Mar 10, 2023',
    endDate: 'Nov 30, 2023',
    status: 'In Progress'
  }
];

export const plannedProjects: ProjectType[] = [
  {
    id: 3,
    name: 'Green Acres Development',
    type: 'Mixed Restoration',
    location: 'Green Acres',
    area: '15.2 acres',
    startDate: 'Jul 1, 2023',
    endDate: 'Aug 30, 2024',
    status: 'Planned'
  }
];

export const completedProjects: ProjectType[] = [
  {
    id: 4,
    name: 'Riverside Park Renewal',
    type: 'Riparian Restoration',
    location: 'Riverside Park',
    area: '5.8 acres',
    progress: 100,
    startDate: 'Mar 5, 2022',
    endDate: 'Feb 28, 2023',
    status: 'Completed'
  }
];

export const pendingProjects: ProjectType[] = [
  {
    id: 5,
    name: 'Hilltop Conservation',
    type: 'Soil Conservation',
    location: 'Hilltop',
    area: '7.3 acres',
    status: 'Pending Approval'
  }
];
