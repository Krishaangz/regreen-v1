
import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface PieChartProps {
  data: Array<Record<string, any>>;
  nameKey: string;
  dataKey: string;
  className?: string;
}

export const PieChart: React.FC<PieChartProps> = ({ data, nameKey, dataKey, className }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <ChartContainer className={className} config={{ [dataKey]: { theme: { light: '#3498db', dark: '#60a5fa' } } }}>
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey={dataKey}
          nameKey={nameKey}
          label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent />} />
      </RechartsPieChart>
    </ChartContainer>
  );
};

export default PieChart;
