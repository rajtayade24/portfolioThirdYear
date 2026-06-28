import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";
import { Skeleton } from "@/components/ui/Skeleton";
import Home from "./pages/Home";

function LoadingState() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-16 w-full rounded-3xl" />
      <div className="grid gap-6 lg:grid-cols-5">      </div>
    </div>
  );
}

const AppContent = () => {
  const navigate = useNavigate();
  const getMe = useAuthStore(state => state.getMe);
  const setUser = useAuthStore(state => state.setUser);
  const setAuthenticated = useAuthStore(state => state.setAuthenticated);
  const setUserMainId = useAuthStore(state => state.setUserMainId);
  const setLoading = useAuthStore(state => state.setLoading);
  // const loading = useAuthStore(state => state.loading);

  const location = useLocation();

  // useEffect(() => {
  //   let mounted = true;
  //   setLoading(true);

  //   getMe()
  //     .then((user) => {
  //       if (!mounted || !user) return;

  //       setAuthenticated(true);
  //       setUser(user);
  //       setUserMainId(user.id);

  //       const publicPaths = ["/", "/login"];

  //       if (publicPaths.includes(location.pathname)) {
  //         if (user?.role === "CITIZEN") navigate("/citizen/dashboard");
  //         else if (user?.role === "OFFICER") navigate("/officer/dashboard");
  //         else if (user?.role === "DEPARTMENT_ADMIN") navigate("/admin/dashboard");
  //         else if (user?.role === "SUPER_ADMIN") navigate("/super-admin/dashboard");
  //       }
  //     })
  //     .catch(() => {
  //       setAuthenticated(false);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  //   return () => {
  //     mounted = false;
  //   };
  // }, [getMe, setAuthenticated, setUser, setUserMainId, setLoading]);

  // if (loading) {
  //   return (
  //     <div className="min-h-screen bg-background px-4 py-4 text-foreground sm:px-6 lg:px-8">
  //       <div className="container px-4">
  //         <LoadingState />
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <Routes>
      <Route
        path="/"
        element={< Home />}
      />
      {/* < Route path="*" element={< NotFound />} /> */}

    </Routes >
  );
};

export default AppContent;
