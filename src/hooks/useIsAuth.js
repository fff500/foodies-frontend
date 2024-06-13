import { useState, useCallback, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiInstance } from "../api/api";
import { useLocalStorage } from "@mantine/hooks";

export const useIsAuth = () => {
  const [token] = useLocalStorage({
    key: "token",
  });
  const [isAuth, setIsAuth] = useState(token);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const checkAuth = useCallback(() => {
    setIsLoading(true);
    apiInstance
      .get("users/current")
      .then(() => {
        setIsAuth(true);
      })
      .catch(() => {
        setIsAuth(false);
      })
      .finally(() => setIsLoading(false));
  }, [navigate]);

  useEffect(() => {
    checkAuth();
  }, [token]);

  const isValidUser = useMemo(() => isAuth && !isLoading, [isLoading, isAuth]);

  return {
    checkAuth,
    isAuth: isValidUser,
    isLoading,
  };
};
