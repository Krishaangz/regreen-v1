
import React from 'react';
import StatCard from './StatCard';

const StatsOverview = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatCard 
        title="Current Month Hours" 
        value="68.5 hrs" 
        subtitle="+12% from last month" 
        progress={68} 
      />
      
      <StatCard 
        title="Completed Tasks" 
        value="24" 
        subtitle="This year" 
        progress={80} 
      />
      
      <StatCard 
        title="Next Shift" 
        value="Tomorrow" 
        subtitle="9:00 AM - Oak Valley" 
        progress={100} 
      />
      
      <StatCard 
        title="Monthly Earnings" 
        value="$1,824" 
        subtitle="+8% from last month" 
        progress={75} 
      />
    </div>
  );
};

export default StatsOverview;
