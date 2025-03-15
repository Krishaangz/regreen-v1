
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { LineChart } from '@/components/ui/chart';

interface EnvironmentalImpactCardProps {
  data: Array<{
    name: string;
    trees: number;
    carbon: number;
  }>;
}

const EnvironmentalImpactCard = ({ data }: EnvironmentalImpactCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Environmental Impact</CardTitle>
        <CardDescription>Community contributions to environmental restoration</CardDescription>
      </CardHeader>
      <CardContent>
        <LineChart 
          data={data} 
          categories={['trees', 'carbon']} 
          index="name"
          yAxisWidth={40}
          className="h-[200px]"
        />
        <div className="flex items-center justify-between mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span>Trees Planted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Carbon Offset (kg)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnvironmentalImpactCard;
