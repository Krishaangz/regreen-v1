
import React from 'react';
import { useRole } from '@/contexts/RoleContext';
import LandownerReports from './reports/LandownerReports';
import WorkerSchedule from './reports/WorkerSchedule';
import { Navigate } from 'react-router-dom';

const Reports = () => {
  const { role } = useRole();
  
  if (!role) {
    return <Navigate to="/register" />;
  }
  
  // Render the appropriate reports view based on the user's role
  switch(role) {
    case 'landowner':
      return <LandownerReports />;
    case 'worker':
      return <WorkerSchedule />;
    case 'community':
      // Community members don't have access to reports
      return <Navigate to="/dashboard/community" />;
    default:
      return <Navigate to="/" />;
  }
};

export default Reports;
