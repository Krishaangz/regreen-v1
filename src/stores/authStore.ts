
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

interface ForumTopic {
  id: number;
  title: string;
  content: string;
  category: string;
  author: string;
  authorId: string;
  date: string;
  replies?: {
    id: number;
    author: string;
    authorId: string;
    date: string;
    content: string;
  }[];
  likes: number;
  views: number;
}

interface Story {
  id: number;
  title: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    location: string;
  };
  date: string;
  image: string;
  likes: number;
  comments: number;
  shares: number;
}

interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  category: string;
  type: string;
  capacity: number;
  enrolled: number;
  organizer: string;
  organizerId: string;
  image: string;
}

interface TemporaryGroup {
  id: number;
  projectId: number;
  name: string;
  members: {
    id: string;
    name: string;
    role: 'landowner' | 'worker' | 'admin';
  }[];
  messages: {
    id: number;
    senderId: string;
    senderName: string;
    text: string;
    timestamp: string;
  }[];
  tasks: {
    id: number;
    title: string;
    description: string;
    assignedTo: string[];
    dueDate: string;
    status: 'pending' | 'in-progress' | 'completed';
  }[];
}

interface AuthState {
  isAuthenticated: boolean;
  userProfile: UserProfile | null;
  projects: Project[];
  tasks: Task[];
  notifications: Notification[];
  forumTopics: ForumTopic[];
  stories: Story[];
  events: Event[];
  temporaryGroups: TemporaryGroup[];
  walletBalance: number;
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
  addForumTopic: (topic: Omit<ForumTopic, 'id' | 'likes' | 'views'>) => void;
  addReplyToTopic: (topicId: number, reply: Omit<ForumTopic['replies'][0], 'id'>) => void;
  addStory: (story: Omit<Story, 'id' | 'likes' | 'comments' | 'shares'>) => void;
  likeStory: (storyId: number) => void;
  addEvent: (event: Event) => void;
  joinEvent: (eventId: string) => void;
  addTemporaryGroup: (group: Omit<TemporaryGroup, 'id'>) => void;
  addMessageToGroup: (groupId: number, message: Omit<TemporaryGroup['messages'][0], 'id'>) => void;
  addTaskToGroup: (groupId: number, task: Omit<TemporaryGroup['tasks'][0], 'id'>) => void;
  updateTaskStatus: (groupId: number, taskId: number, status: 'pending' | 'in-progress' | 'completed') => void;
  updateWalletBalance: (newBalance: number) => void;
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
      forumTopics: [],
      stories: [],
      events: [],
      temporaryGroups: [],
      walletBalance: 0,
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
      
      // Forum actions
      addForumTopic: (topic) => set((state) => ({
        forumTopics: [
          ...state.forumTopics,
          {
            ...topic,
            id: Date.now(),
            likes: 0,
            views: 0,
            replies: []
          }
        ]
      })),
      
      addReplyToTopic: (topicId, reply) => set((state) => ({
        forumTopics: state.forumTopics.map(topic => 
          topic.id === topicId 
            ? { 
                ...topic, 
                replies: [...(topic.replies || []), { ...reply, id: Date.now() }] 
              } 
            : topic
        )
      })),
      
      // Story actions
      addStory: (story) => set((state) => ({
        stories: [
          ...state.stories,
          {
            ...story,
            id: Date.now(),
            likes: 0,
            comments: 0,
            shares: 0
          }
        ]
      })),
      
      likeStory: (storyId) => set((state) => ({
        stories: state.stories.map(story => 
          story.id === storyId 
            ? { ...story, likes: story.likes + 1 } 
            : story
        )
      })),
      
      // Event actions
      addEvent: (event) => set((state) => ({
        events: [...state.events, event]
      })),
      
      joinEvent: (eventId) => set((state) => ({
        events: state.events.map(event => 
          event.id === eventId 
            ? { ...event, enrolled: event.enrolled + 1 } 
            : event
        )
      })),
      
      // Temporary group actions
      addTemporaryGroup: (group) => set((state) => ({
        temporaryGroups: [
          ...state.temporaryGroups,
          {
            ...group,
            id: Date.now()
          }
        ]
      })),
      
      addMessageToGroup: (groupId, message) => set((state) => ({
        temporaryGroups: state.temporaryGroups.map(group => 
          group.id === groupId 
            ? { 
                ...group, 
                messages: [...group.messages, { ...message, id: Date.now() }] 
              } 
            : group
        )
      })),
      
      addTaskToGroup: (groupId, task) => set((state) => ({
        temporaryGroups: state.temporaryGroups.map(group => 
          group.id === groupId 
            ? { 
                ...group, 
                tasks: [...group.tasks, { ...task, id: Date.now() }] 
              } 
            : group
        )
      })),
      
      updateTaskStatus: (groupId, taskId, status) => set((state) => ({
        temporaryGroups: state.temporaryGroups.map(group => 
          group.id === groupId 
            ? { 
                ...group, 
                tasks: group.tasks.map(task => 
                  task.id === taskId ? { ...task, status } : task
                ) 
              } 
            : group
        )
      })),
      
      // Wallet actions
      updateWalletBalance: (newBalance) => set({
        walletBalance: newBalance
      })
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
    addForumTopic,
    addReplyToTopic,
    addStory,
    likeStory,
    addEvent,
    joinEvent,
    addTemporaryGroup,
    addMessageToGroup,
    addTaskToGroup,
    updateTaskStatus,
    updateWalletBalance
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
    addForumTopic,
    addReplyToTopic,
    addStory,
    likeStory,
    addEvent,
    joinEvent,
    addTemporaryGroup,
    addMessageToGroup,
    addTaskToGroup,
    updateTaskStatus,
    updateWalletBalance
  };
};
