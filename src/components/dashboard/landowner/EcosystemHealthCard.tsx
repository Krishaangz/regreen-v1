
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { LineChart } from '@/components/ui/chart';

interface EcosystemHealthCardProps {
  data: Array<{
    name: string;
    biodiversity: number;
    soil: number;
  }>;
}

const EcosystemHealthCard = ({ data }: EcosystemHealthCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Ecosystem Health</CardTitle>
        <CardDescription>6-month trend</CardDescription>
      </CardHeader>
      <CardContent>
        <LineChart 
          data={data} 
          categories={['biodiversity', 'soil']} 
          index="name"
          yAxisWidth={40}
          className="h-[200px]"
        />
      </CardContent>
    </Card>
  );
};

export default EcosystemHealthCard;
