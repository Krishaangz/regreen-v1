
import { useLocation } from "react-router-dom";
import NavBar from "@/components/NavBar";
import RegisterForm from "./register/RegisterForm";
import { useTheme } from "@/contexts/ThemeContext";
import { getBgGradient } from "@/utils/backgroundUtils";

const Register = () => {
  const location = useLocation();
  const { colorTheme } = useTheme();
  
  // Get role from URL if present
  const queryParams = new URLSearchParams(location.search);
  const roleParam = queryParams.get('role');
  
  const initialRole = 
    roleParam === 'landowner' || roleParam === 'worker' || roleParam === 'community' 
      ? roleParam 
      : "landowner";

  // Get the appropriate background based on theme
  const bgGradient = getBgGradient(initialRole, colorTheme);
  
  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-br ${bgGradient} transition-colors duration-500 w-full`}>
      <NavBar />
      
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 w-full">
        <RegisterForm initialRole={initialRole as 'landowner' | 'worker' | 'community'} />
      </div>
    </div>
  );
};

export default Register;
