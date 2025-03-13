
import React from "react";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

// This is a placeholder map view component
// In a real application, you would integrate with a mapping library like Leaflet or Google Maps
const MapView = ({ events }: { events: any[] }) => {
  return (
    <Card className="p-4">
      <div className="bg-slate-100 h-96 rounded-md flex items-center justify-center">
        <div className="text-center">
          <MapPin className="mx-auto h-12 w-12 text-muted-foreground" />
          <p className="mt-2 text-muted-foreground">
            Map view would display {events.length} events here
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            (Map integration to be implemented)
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="font-medium">Events Near You</h3>
        {events.slice(0, 3).map((event, index) => (
          <div key={index} className="flex items-start gap-2 text-sm">
            <MapPin className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-medium">{event.title}</div>
              <div className="text-xs text-muted-foreground">{event.location}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MapView;
