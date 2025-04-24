
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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ShadcnThemeProvider defaultTheme="system" storageKey="ui-theme">
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <RoleProvider>
              <App />
              <Toaster />
            </RoleProvider>
          </Router>
        </QueryClientProvider>
      </ThemeProvider>
    </ShadcnThemeProvider>
  </React.StrictMode>
);
