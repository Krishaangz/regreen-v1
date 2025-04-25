
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'landowner' | 'worker' | 'community' | null;
  avatar?: string;
  bio?: string;
  location?: string;
  joinDate: string;
}

interface Project {
  id: number;
  name: string;
  type: string;
  location: string;
  progress: number;
  status: string;
  startDate: string;
  endDate?: string;
}

interface Task {
  id: number;
  title: string;
  projectId: number;
  status: 'pending' | 'in-progress' | 'completed' | 'verified';
  dueDate: string;
  description: string;
}

interface Notification {
  id: number;
  type: 'info' | 'warning' | 'success' | 'error';
  message: string;
  date: string;
  read: boolean;
}

interface AuthState {
  isAuthenticated: boolean;
  userProfile: UserProfile | null;
  projects: Project[];
  tasks: Task[];
  notifications: Notification[];
  settings: {
    darkMode: boolean;
    colorTheme: 'green' | 'blue' | 'purple' | 'orange';
    emailNotifications: boolean;
    pushNotifications: boolean;
    smsNotifications: boolean;
    inAppNotifications: boolean;
    dataSharing: boolean;
    profileVisibility: boolean;
    locationTracking: boolean;
  };
  
  // Actions
  login: (profile: UserProfile) => void;
  logout: () => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
  addProject: (project: Project) => void;
  updateProject: (id: number, updates: Partial<Project>) => void;
  removeProject: (id: number) => void;
  addTask: (task: Task) => void;
  updateTask: (id: number, updates: Partial<Task>) => void;
  removeTask: (id: number) => void;
  addNotification: (notification: Omit<Notification, 'id' | 'read'>) => void;
  markNotificationRead: (id: number) => void;
  markAllNotificationsRead: () => void;
  updateSettings: (updates: Partial<AuthState['settings']>) => void;
}

// Create the store with persistence
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      userProfile: null,
      projects: [],
      tasks: [],
      notifications: [],
      settings: {
        darkMode: false,
        colorTheme: 'green',
        emailNotifications: true,
        pushNotifications: true,
        smsNotifications: false,
        inAppNotifications: true,
        dataSharing: true,
        profileVisibility: true,
        locationTracking: false,
      },
      
      // Auth actions
      login: (profile) => set({ 
        isAuthenticated: true, 
        userProfile: profile 
      }),
      
      logout: () => set({ 
        isAuthenticated: false, 
        userProfile: null,
        projects: [],
        tasks: [],
        notifications: [],
      }),
      
      updateProfile: (updates) => set((state) => ({
        userProfile: state.userProfile ? { ...state.userProfile, ...updates } : null
      })),
      
      // Project actions
      addProject: (project) => set((state) => ({
        projects: [...state.projects, project]
      })),
      
      updateProject: (id, updates) => set((state) => ({
        projects: state.projects.map(project => 
          project.id === id ? { ...project, ...updates } : project
        )
      })),
      
      removeProject: (id) => set((state) => ({
        projects: state.projects.filter(project => project.id !== id)
      })),
      
      // Task actions
      addTask: (task) => set((state) => ({
        tasks: [...state.tasks, task]
      })),
      
      updateTask: (id, updates) => set((state) => ({
        tasks: state.tasks.map(task => 
          task.id === id ? { ...task, ...updates } : task
        )
      })),
      
      removeTask: (id) => set((state) => ({
        tasks: state.tasks.filter(task => task.id !== id)
      })),
      
      // Notification actions
      addNotification: (notification) => set((state) => ({
        notifications: [
          ...state.notifications, 
          { 
            ...notification, 
            id: state.notifications.length + 1, 
            read: false 
          }
        ]
      })),
      
      markNotificationRead: (id) => set((state) => ({
        notifications: state.notifications.map(notification => 
          notification.id === id ? { ...notification, read: true } : notification
        )
      })),
      
      markAllNotificationsRead: () => set((state) => ({
        notifications: state.notifications.map(notification => ({ ...notification, read: true }))
      })),
      
      // Settings actions
      updateSettings: (updates) => set((state) => ({
        settings: { ...state.settings, ...updates }
      })),
    }),
    {
      name: 'regreen-auth-storage',
    }
  )
);

// Use this hook to access and modify auth state
export const useAuthStoreActions = () => {
  const {
    login,
    logout,
    updateProfile,
    addProject,
    updateProject,
    removeProject,
    addTask,
    updateTask,
    removeTask,
    addNotification,
    markNotificationRead,
    markAllNotificationsRead,
    updateSettings,
  } = useAuthStore();
  
  return {
    login,
    logout,
    updateProfile,
    addProject,
    updateProject,
    removeProject,
    addTask,
    updateTask,
    removeTask,
    addNotification,
    markNotificationRead,
    markAllNotificationsRead,
    updateSettings,
  };
};
