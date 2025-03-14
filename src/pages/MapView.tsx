
import React from 'react';
import { useRole } from '@/contexts/RoleContext';
import LandownerMapView from './maps/LandownerMapView';
import WorkerMapView from './maps/WorkerMapView';
import CommunityMapView from './maps/CommunityMapView';

const MapView = () => {
  const { role } = useRole();
  
  // Render the appropriate map view based on the user's role
  switch(role) {
    case 'landowner':
      return <LandownerMapView />;
    case 'worker':
      return <WorkerMapView />;
    case 'community':
      return <CommunityMapView />;
    default:
      // Fallback to landowner view if no role is set (should not happen due to RouteGuard)
      return <LandownerMapView />;
  }
};

export default MapView;
