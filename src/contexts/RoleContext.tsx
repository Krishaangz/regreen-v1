
import React, { createContext, useContext, useState, useEffect } from 'react';

type UserRole = 'landowner' | 'worker' | 'community' | null;

interface RoleContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  isRoleLoading: boolean;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [isRoleLoading, setIsRoleLoading] = useState(true);
  const [role, setRoleState] = useState<UserRole>(null);

  // Initialize from localStorage if available
  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole && (savedRole === 'landowner' || savedRole === 'worker' || savedRole === 'community')) {
      setRoleState(savedRole as UserRole);
    }
    setIsRoleLoading(false);
  }, []);

  // Persist role to localStorage when it changes
  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    if (newRole) {
      localStorage.setItem('userRole', newRole);
    } else {
      localStorage.removeItem('userRole');
    }
  };

  return (
    <RoleContext.Provider value={{ role, setRole, isRoleLoading }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
}
