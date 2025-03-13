
import React from "react";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

// This is a simplified calendar view component
// In a real application, you would integrate with a more robust calendar library
const CalendarView = ({ events }: { events: any[] }) => {
  const today = new Date();
  
  return (
    <Card className="p-4">
      <Calendar
        mode="single"
        selected={today}
        className="rounded-md border"
      />
      <div className="mt-4">
        <h3 className="font-medium">Events on {today.toLocaleDateString()}</h3>
        {events.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {events.slice(0, 3).map((event, index) => (
              <li key={index} className="text-sm p-2 border rounded">
                <div className="font-medium">{event.title}</div>
                <div className="text-xs text-muted-foreground">{event.time}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground mt-2">No events scheduled for today.</p>
        )}
      </div>
    </Card>
  );
};

export default CalendarView;
