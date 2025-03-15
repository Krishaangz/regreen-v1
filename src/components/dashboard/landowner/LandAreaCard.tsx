
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PieChart } from '@/components/ui/chart';

interface LandAreaCardProps {
  totalAcres: string;
  propertyCount: number;
  landDistributionData: Array<{
    name: string;
    value: number;
  }>;
}

const LandAreaCard = ({ totalAcres, propertyCount, landDistributionData }: LandAreaCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Total Land Area</CardTitle>
        <CardDescription>Your restoration properties</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{totalAcres}</div>
        <p className="text-sm text-muted-foreground mt-1">Across {propertyCount} properties</p>
        <div className="mt-4">
          <PieChart data={landDistributionData} />
        </div>
      </CardContent>
    </Card>
  );
};

export default LandAreaCard;
