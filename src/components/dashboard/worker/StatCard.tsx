
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  progress: number;
}

const StatCard = ({ title, value, subtitle, progress }: StatCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
        <Progress value={progress} className="h-1 mt-3" />
      </CardContent>
    </Card>
  );
};

export default StatCard;
