
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import MapView from './pages/MapView';
import About from './pages/About';
import Help from './pages/Help';
import TaskView from './pages/TaskView';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Projects from './pages/Projects';
import Community from './pages/Community';
import GroupFormation from './pages/GroupFormation';
import RouteGuard from './components/RouteGuard';
import LandownerDashboard from './pages/dashboards/LandownerDashboard';
import WorkerDashboard from './pages/dashboards/WorkerDashboard';
import CommunityDashboard from './pages/dashboards/CommunityDashboard';
import LandownerProjects from './pages/projects/LandownerProjects';
import WorkerProjects from './pages/projects/WorkerProjects';
import CommunityProjects from './pages/projects/CommunityProjects';
import LandownerMapView from './pages/maps/LandownerMapView';
import WorkerMapView from './pages/maps/WorkerMapView';
import CommunityMapView from './pages/maps/CommunityMapView';
import LandownerReports from './pages/reports/LandownerReports';
import WorkerSchedule from './pages/reports/WorkerSchedule';
import ThemeSettings from './pages/settings/ThemeSettings';
import Forums from './pages/community/Forums';
import Events from './pages/community/Events';
import Stories from './pages/community/Stories';
import FAQ from './pages/help/FAQ';
import Contact from './pages/help/Contact';
import Support from './pages/help/Support';
import ServicesSummary from './pages/services';
import LandownerServices from './pages/services/Landowner';
import RestorationServices from './pages/services/Restoration';
import WorkerServices from './pages/services/Worker';
import LandownerGuide from './pages/help/landowner-guide';
import PropertyRegistrationGuide from './pages/help/landowners/PropertyRegistration';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
        <Route path="help/faq" element={<FAQ />} />
        <Route path="help/contact" element={<Contact />} />
        <Route path="help/support" element={<Support />} />
        <Route path="help/landowner-guide" element={<LandownerGuide />} />
        <Route path="help/landowners/registration" element={<PropertyRegistrationGuide />} />
        <Route path="services" element={<ServicesSummary />} />
        <Route path="services/landowner" element={<LandownerServices />} />
        <Route path="services/restoration" element={<RestorationServices />} />
        <Route path="services/worker" element={<WorkerServices />} />
        <Route path="wallet" element={<Wallet />} />
        
        <Route path="dashboard" element={
          <RouteGuard>
            <Dashboard />
          </RouteGuard>
        } />
        
        <Route path="landowner-dashboard" element={
          <RouteGuard>
            <LandownerDashboard />
          </RouteGuard>
        } />
        
        <Route path="worker-dashboard" element={
          <RouteGuard>
            <WorkerDashboard />
          </RouteGuard>
        } />
        
        <Route path="community-dashboard" element={
          <RouteGuard>
            <CommunityDashboard />
          </RouteGuard>
        } />
        
        <Route path="map" element={
          <RouteGuard>
            <MapView />
          </RouteGuard>
        } />
        
        <Route path="landowner-map" element={
          <RouteGuard>
            <LandownerMapView />
          </RouteGuard>
        } />
        
        <Route path="worker-map" element={
          <RouteGuard>
            <WorkerMapView />
          </RouteGuard>
        } />
        
        <Route path="community-map" element={
          <RouteGuard>
            <CommunityMapView />
          </RouteGuard>
        } />
        
        <Route path="tasks" element={
          <RouteGuard>
            <TaskView />
          </RouteGuard>
        } />
        
        <Route path="reports" element={
          <RouteGuard>
            <Reports />
          </RouteGuard>
        } />
        
        <Route path="landowner-reports" element={
          <RouteGuard>
            <LandownerReports />
          </RouteGuard>
        } />
        
        <Route path="worker-schedule" element={
          <RouteGuard>
            <WorkerSchedule />
          </RouteGuard>
        } />
        
        <Route path="settings" element={
          <RouteGuard>
            <Settings />
          </RouteGuard>
        } />
        
        <Route path="theme-settings" element={
          <RouteGuard>
            <ThemeSettings />
          </RouteGuard>
        } />
        
        <Route path="projects" element={
          <RouteGuard>
            <Projects />
          </RouteGuard>
        } />
        
        <Route path="my-properties" element={
          <RouteGuard>
            <LandownerProjects />
          </RouteGuard>
        } />
        
        <Route path="worker-projects" element={
          <RouteGuard>
            <WorkerProjects />
          </RouteGuard>
        } />
        
        <Route path="community-projects" element={
          <RouteGuard>
            <CommunityProjects />
          </RouteGuard>
        } />
        
        <Route path="group-formation" element={
          <RouteGuard>
            <GroupFormation />
          </RouteGuard>
        } />
        
        <Route path="community" element={<Community />} />
        <Route path="community/forums" element={<Forums />} />
        <Route path="community/events" element={<Events />} />
        <Route path="community/stories" element={<Stories />} />
        
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
