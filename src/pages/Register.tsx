
import { useLocation } from "react-router-dom";
import NavBar from "@/components/NavBar";
import RegisterForm from "./register/RegisterForm";

const Register = () => {
  const location = useLocation();
  
  // Get role from URL if present
  const queryParams = new URLSearchParams(location.search);
  const roleParam = queryParams.get('role');
  
  const initialRole = 
    roleParam === 'landowner' || roleParam === 'worker' || roleParam === 'community' 
      ? roleParam 
      : "landowner";
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-regreen-100 to-regreen-50 dark:from-regreen-900/70 dark:to-regreen-950">
      <NavBar />
      
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <RegisterForm initialRole={initialRole as 'landowner' | 'worker' | 'community'} />
      </div>
    </div>
  );
};

export default Register;
