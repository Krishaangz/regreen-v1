
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  MapPin, 
  Mail, 
  Lock
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  location: string;
  propertyType: string;
  skills: string;
  interests: string;
}

interface RegisterFormFieldsProps {
  formData: FormData;
  selectedRole: 'landowner' | 'worker' | 'community';
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (field: string, value: string) => void;
}

const RegisterFormFields = ({ 
  formData, 
  selectedRole, 
  handleChange, 
  handleSelectChange 
}: RegisterFormFieldsProps) => {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input 
            id="firstName" 
            placeholder="Enter your first name" 
            required 
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input 
            id="lastName" 
            placeholder="Enter your last name" 
            required 
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-4 w-4" />
          <Input 
            id="email" 
            type="email" 
            placeholder="Enter your email" 
            className="pl-10" 
            required 
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-4 w-4" />
          <Input 
            id="password" 
            type="password" 
            placeholder="Create a password" 
            className="pl-10" 
            required 
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-4 w-4" />
          <Input 
            id="location" 
            placeholder="City, State" 
            className="pl-10" 
            required 
            value={formData.location}
            onChange={handleChange}
          />
        </div>
      </div>
      
      {selectedRole === "landowner" && (
        <div className="space-y-2">
          <Label htmlFor="propertyType">Property Type</Label>
          <Select 
            defaultValue={formData.propertyType} 
            onValueChange={(value) => handleSelectChange('propertyType', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vacant">Vacant Land</SelectItem>
              <SelectItem value="urban">Urban Space</SelectItem>
              <SelectItem value="waterbody">Water Body</SelectItem>
              <SelectItem value="rooftop">Rooftop</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      
      {selectedRole === "worker" && (
        <div className="space-y-2">
          <Label htmlFor="skills">Primary Skills</Label>
          <Select 
            defaultValue={formData.skills}
            onValueChange={(value) => handleSelectChange('skills', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select primary skill" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gardening">Gardening/Landscaping</SelectItem>
              <SelectItem value="construction">Construction</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="forestry">Forestry</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      
      {selectedRole === "community" && (
        <div className="space-y-2">
          <Label htmlFor="interests">Primary Interest</Label>
          <Select 
            defaultValue={formData.interests}
            onValueChange={(value) => handleSelectChange('interests', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select primary interest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="education">Environmental Education</SelectItem>
              <SelectItem value="volunteering">Volunteering</SelectItem>
              <SelectItem value="advocacy">Advocacy</SelectItem>
              <SelectItem value="sponsorship">Project Sponsorship</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default RegisterFormFields;
