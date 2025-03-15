
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PieChart } from '@/components/ui/chart/index';

interface LandAreaCardProps {
  landData: {
    totalArea: number;
    distribution: Array<{
      name: string;
      value: number;
    }>;
  };
}

const LandAreaCard = ({ landData }: LandAreaCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Land Areas</CardTitle>
        <CardDescription>Current land use distribution (acres)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-2">{landData.totalArea} acres</div>
        <div className="h-[200px]">
          <PieChart 
            data={landData.distribution} 
            className="h-[200px]"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {landData.distribution.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getColor(index) }}></div>
                <span>{item.name}</span>
              </div>
              <span className="font-medium">{item.value} acres</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Helper function to get colors for the pie chart
const getColor = (index: number) => {
  const colors = ['#10b981', '#3b82f6', '#f97316', '#8b5cf6', '#ec4899'];
  return colors[index % colors.length];
};

export default LandAreaCard;
