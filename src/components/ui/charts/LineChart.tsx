
import React from 'react';
import { Line, LineChart as RechartsLineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface LineChartProps {
  data: any[];
  categories: string[];
  index: string;
  colors?: string[];
  yAxisWidth?: number;
  showLegend?: boolean;
  className?: string;
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  categories,
  index,
  colors = ['#10b981', '#3b82f6', '#f97316', '#8b5cf6'],
  yAxisWidth = 50,
  showLegend = false,
  className,
}) => {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
          <XAxis 
            dataKey={index} 
            tick={{ fontSize: 12 }} 
            tickLine={false} 
            axisLine={false} 
            tickMargin={8}
            className="text-muted-foreground"
          />
          <YAxis 
            width={yAxisWidth} 
            tick={{ fontSize: 12 }} 
            tickLine={false} 
            axisLine={false}
            tickMargin={8}
            className="text-muted-foreground"
          />
          <Tooltip 
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="font-medium">{label}</div>
                      {payload.map((p, i) => (
                        <div key={`item-${i}`} className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1">
                            <div 
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: p.color }}
                            />
                            <span className="capitalize">{p.name}</span>
                          </div>
                          <div className="font-medium">{p.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }
              return null;
            }}
          />
          {categories.map((category, i) => (
            <Line
              key={category}
              type="monotone"
              dataKey={category}
              stroke={colors[i % colors.length]}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
      
      {showLegend && (
        <div className="mt-4 flex items-center justify-center gap-4">
          {categories.map((category, i) => (
            <div key={category} className="flex items-center gap-1">
              <div 
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: colors[i % colors.length] }}
              />
              <span className="text-sm capitalize">{category}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LineChart;
