import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/Sonner";
import AppContent from "@/AppContent";
import useAuthStore from "@/store/useAuthStore";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 30,
    },
  },
});

const App = () => {
  const darkMode = useAuthStore(state => state.darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("dark", darkMode ? "true" : "false");
  }, [darkMode]);

  return (
    <QueryClientProvider client={queryClient}>
      <Sonner theme={darkMode ? "dark" : "light"} />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
