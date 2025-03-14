import { ReactNode, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useRole } from '@/contexts/RoleContext';
import { useToast } from '@/hooks/use-toast';

interface RouteGuardProps {
  children: ReactNode;
  roleRequired?: 'landowner' | 'worker' | 'community';
}

const RouteGuard = ({ children, roleRequired }: RouteGuardProps) => {
  const { role } = useRole();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // If user has no role, redirect to register
    if (!role) {
      toast({
        title: "Authentication required",
        description: "Please register or sign in to access this page.",
        variant: "destructive",
      });
    }
    
    // If a specific role is required and user doesn't have it
    if (roleRequired && role && role !== roleRequired) {
      toast({
        title: "Access restricted",
        description: `This page is only available to ${roleRequired}s.`,
        variant: "destructive",
      });
    }
  }, [role, roleRequired, toast]);

  // If no role is set, redirect to register page
  if (!role) {
    return <Navigate to="/register" replace />;
  }

  // If a specific role is required and user doesn't have it
  if (roleRequired && role !== roleRequired) {
    return <Navigate to={`/dashboard/${role}`} replace />;
  }

  // Otherwise, render the children
  return <>{children}</>;
};

export default RouteGuard;
