
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider as ShadcnThemeProvider } from "@/components/theme-provider";
import { RoleProvider } from "@/contexts/RoleContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/contexts/ThemeContext"; 
import { SidebarProvider } from "@/components/ui/sidebar";

const queryClient = new QueryClient();

// Check if there's a saved theme preference or use system default
const savedTheme = localStorage.getItem("ui-theme") || "system";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ShadcnThemeProvider defaultTheme={savedTheme as "light" | "dark" | "system"} storageKey="ui-theme">
      <QueryClientProvider client={queryClient}>
        <Router>
          <RoleProvider>
            <ThemeProvider>
              <SidebarProvider>
                <App />
                <Toaster />
              </SidebarProvider>
            </ThemeProvider>
          </RoleProvider>
        </Router>
      </QueryClientProvider>
    </ShadcnThemeProvider>
  </React.StrictMode>
);
