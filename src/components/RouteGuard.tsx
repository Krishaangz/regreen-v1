
import { ReactNode, useEffect } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useRole } from '@/contexts/RoleContext';
import { useToast } from '@/hooks/use-toast';

interface RouteGuardProps {
  children: ReactNode;
  roleRequired?: 'landowner' | 'worker' | 'community';
}

const RouteGuard = ({ children, roleRequired }: RouteGuardProps) => {
  const { role } = useRole();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    // If user has no role, redirect to register
    if (!role) {
      toast({
        title: "Authentication required",
        description: "Please register or sign in to access this page.",
        variant: "destructive",
      });
      return;
    }
    
    // If a specific role is required and user doesn't have it
    if (roleRequired && role !== roleRequired) {
      const roleName = roleRequired.charAt(0).toUpperCase() + roleRequired.slice(1);
      toast({
        title: "Access restricted",
        description: `This page is only available to ${roleName}s.`,
        variant: "destructive",
      });
    }
  }, [role, roleRequired, toast, location.pathname]);

  // If no role is set, redirect to register page
  if (!role) {
    // Save the current path for redirect after login
    sessionStorage.setItem('redirectAfterLogin', location.pathname);
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
