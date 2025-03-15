
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart } from '@/components/ui/chart/index';

const EarningsWidget = () => {
  // Sample data for earnings chart
  const earningsData = [
    { month: 'Jan', amount: 1200 },
    { month: 'Feb', amount: 1300 },
    { month: 'Mar', amount: 1150 },
    { month: 'Apr', amount: 1400 },
    { month: 'May', amount: 1600 },
    { month: 'Jun', amount: 1300 },
  ];

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div className="space-y-1">
          <CardTitle>Earnings</CardTitle>
          <CardDescription>Your earnings over time</CardDescription>
        </div>
        <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
          +12% from last month
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <LineChart 
            data={earningsData} 
            categories={['amount']} 
            index="month"
            colors={['#10b981']}
            yAxisWidth={50}
            className="h-[250px]"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default EarningsWidget;
