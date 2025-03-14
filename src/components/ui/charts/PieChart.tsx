
import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface PieChartProps {
  data: Array<{
    name: string;
    value: number;
  }>;
  colors?: string[];
  className?: string;
  showLegend?: boolean;
  innerRadius?: number;
  outerRadius?: number;
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  colors = ['#10b981', '#3b82f6', '#f97316', '#8b5cf6', '#ec4899'],
  className,
  showLegend = true,
  innerRadius = 50,
  outerRadius = 80,
}) => {
  return (
    <div className={className || 'h-[200px]'}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-1">
                        <div 
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: payload[0].payload.fill }}
                        />
                        <span>{payload[0].name}</span>
                      </div>
                      <div className="font-medium text-right">{payload[0].value}</div>
                    </div>
                  </div>
                )
              }
              return null;
            }}
          />
          {showLegend && (
            <Legend 
              layout="horizontal" 
              verticalAlign="bottom" 
              align="center" 
              wrapperStyle={{ paddingTop: 20 }}
              formatter={(value) => <span className="text-xs">{value}</span>}
            />
          )}
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
