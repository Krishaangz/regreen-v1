
import React from 'react';
import StatCard from './StatCard';

const StatsOverview = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatCard 
        title="Local Projects" 
        value="12" 
        subtitle="Within 10 miles" 
        progress={75} 
      />
      
      <StatCard 
        title="Trees Planted" 
        value="1,280" 
        subtitle="By your community" 
        progress={85} 
      />
      
      <StatCard 
        title="Active Members" 
        value="348" 
        subtitle="+24 this month" 
        progress={65} 
      />
      
      <StatCard 
        title="CO₂ Reduction" 
        value="56.2 tons" 
        subtitle="Annual estimate" 
        progress={92} 
      />
    </div>
  );
};

export default StatsOverview;
