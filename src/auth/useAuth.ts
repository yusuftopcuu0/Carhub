// hooks/useAuth.ts
import { useAuthStore } from "../auth/useAuthStore";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const storeLogout = useAuthStore((state) => state.logout);

  const logout = () => {
    storeLogout();
    navigate("/");
  };

  return { user, login, logout, isAuthenticated: !!user };
};
