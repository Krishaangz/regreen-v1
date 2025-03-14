
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileEdit, Plus } from 'lucide-react';
import BaseMapView from '@/components/maps/BaseMapView';

const LandownerMapView = () => {
  const properties = [
    { id: 1, name: 'Oak Valley', status: 'Active', area: '12.4 acres' },
    { id: 2, name: 'Meadow Ridge', status: 'In Progress', area: '8.7 acres' },
    { id: 3, name: 'Green Acres', status: 'Planned', area: '15.2 acres' },
  ];

  return (
    <BaseMapView 
      title="Property Map" 
      description="View and manage your properties and restoration projects"
    >
      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">My Properties</CardTitle>
            <Button size="sm" className="bg-regreen-600 hover:bg-regreen-700 text-white">
              <Plus className="mr-1 h-4 w-4" />
              Add Property
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {properties.map((property) => (
              <div key={property.id} className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0">
                <div>
                  <div className="font-medium">{property.name}</div>
                  <div className="text-sm text-muted-foreground">{property.area} • {property.status}</div>
                </div>
                <Button variant="ghost" size="icon">
                  <FileEdit className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </BaseMapView>
  );
};

export default LandownerMapView;
