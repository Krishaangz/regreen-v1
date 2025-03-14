
import React from 'react';
import { Line, LineChart as RechartsLineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface LineChartProps {
  data: Array<Record<string, any>>;
  xKey: string;
  yKey: string;
  className?: string;
}

export const LineChart: React.FC<LineChartProps> = ({ data, xKey, yKey, className }) => {
  return (
    <ChartContainer className={className} config={{ [yKey]: { theme: { light: '#3498db', dark: '#60a5fa' } } }}>
      <RechartsLineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} />
        <YAxis />
        <ChartTooltip
          content={<ChartTooltipContent />}
        />
        <Line type="monotone" dataKey={yKey} stroke="var(--color-primary, currentColor)" strokeWidth={2} />
      </RechartsLineChart>
    </ChartContainer>
  );
};

export default LineChart;
