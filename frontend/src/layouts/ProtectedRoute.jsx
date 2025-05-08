import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

const ProtectedRoute = () => {
  const { authUser } = useAuthStore();
  const [toastShown, setToastShown] = useState(false);

  useEffect(() => {
    if (!authUser && !toastShown) {
      toast.dismiss();
      toast.error("Please log in to continue.");
      setToastShown(true);
    }
  }, [authUser, toastShown]);

  if (!authUser) {
    return <Navigate to="/" />;
  }

  return <Outlet />; //return as outlet
};

export default ProtectedRoute;
