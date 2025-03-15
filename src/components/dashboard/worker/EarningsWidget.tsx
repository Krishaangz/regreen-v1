
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { LineChart } from '@/components/ui/chart';
import { DollarSign, User } from 'lucide-react';

const EarningsWidget = () => {
  const earningsData = [
    { name: 'Jan', amount: 1200 },
    { name: 'Feb', amount: 1350 },
    { name: 'Mar', amount: 1450 },
    { name: 'Apr', amount: 1200 },
    { name: 'May', amount: 1650 },
    { name: 'Jun', amount: 1800 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Earnings Overview</CardTitle>
        <CardDescription>Your payment history for the past 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <LineChart 
          data={earningsData} 
          categories={['amount']} 
          index="name"
          yAxisWidth={40}
          className="h-[200px]"
        />
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="border rounded-md p-3">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">Hourly Rate</span>
            </div>
            <div className="text-xl font-bold mt-1">$22.50</div>
          </div>
          <div className="border rounded-md p-3">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">Skill Level</span>
            </div>
            <div className="text-xl font-bold mt-1">Advanced</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EarningsWidget;
