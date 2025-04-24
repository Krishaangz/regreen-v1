
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useRole } from "@/contexts/RoleContext";

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateProjectModal = ({ isOpen, onClose }: CreateProjectModalProps) => {
  const { toast } = useToast();
  const { role } = useRole();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("Planning Phase");

  const projectTypes = [
    { value: "Forest Restoration", label: "Forest Restoration" },
    { value: "Riparian Restoration", label: "Riparian Restoration" },
    { value: "Wetland Restoration", label: "Wetland Restoration" },
    { value: "Prairie Restoration", label: "Prairie Restoration" },
    { value: "Urban Greening", label: "Urban Greening" }
  ];

  const statusOptions = [
    { value: "Planning Phase", label: "Planning Phase" },
    { value: "Pending Approval", label: "Pending Approval" },
    { value: "Starting Soon", label: "Starting Soon" },
    { value: "Active", label: "Active" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !type || !location) {
      toast({
        title: "Missing fields",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real application, we would send this data to a backend
    toast({
      title: "Project Created",
      description: role === "landowner" 
        ? "Your property has been added and will appear in your properties list."
        : "Your project initiative has been created and is awaiting review.",
    });
    
    // Reset form and close modal
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setName("");
    setType("");
    setLocation("");
    setArea("");
    setDescription("");
    setImageUrl("");
    setStatus("Planning Phase");
  };

  const title = role === "landowner" ? "Add New Property" : "Create New Project";
  const modalDescription = role === "landowner" 
    ? "Register your property for ecological restoration services." 
    : "Create a new community initiative for ecological restoration.";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {modalDescription}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">
              {role === "landowner" ? "Property Name*" : "Project Name*"}
            </Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Oak Valley Forest" 
              className="w-full"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type">Project Type*</Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location*</Label>
              <Input 
                id="location" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                placeholder="Northern California" 
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="area">Area</Label>
              <Input 
                id="area" 
                value={area} 
                onChange={(e) => setArea(e.target.value)} 
                placeholder="100 acres" 
                className="w-full"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide details about the property or project..."
              className="min-h-[100px]"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input 
              id="image" 
              value={imageUrl} 
              onChange={(e) => setImageUrl(e.target.value)} 
              placeholder="https://example.com/image.jpg" 
              className="w-full"
            />
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" className="bg-regreen-600 hover:bg-regreen-700 text-white">
              {role === "landowner" ? "Add Property" : "Create Project"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectModal;
