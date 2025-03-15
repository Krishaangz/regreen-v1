
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { LineChart } from '@/components/ui/chart/index';

interface EcosystemHealthCardProps {
  data: {
    biodiversity: Array<{ name: string; value: number }>;
    soilHealth: Array<{ name: string; value: number }>;
  };
}

const EcosystemHealthCard = ({ data }: EcosystemHealthCardProps) => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Ecosystem Health</CardTitle>
        <CardDescription>Tracking key ecological indicators on your land</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <LineChart 
            data={data.biodiversity} 
            categories={['value']} 
            index="name"
            yAxisWidth={40}
            className="h-[250px]"
          />
        </div>
        <div className="flex items-center justify-between mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Biodiversity Index</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Soil Health Score</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EcosystemHealthCard;
