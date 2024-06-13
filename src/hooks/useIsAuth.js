import { useState, useCallback, useMemo, useEffect } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { apiInstance } from "../api/";

export const useIsAuth = () => {
  const [token] = useLocalStorage({
    key: "token",
  });
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
  }, []);

  useEffect(() => {
    checkAuth();
  }, [token, checkAuth]);

  const isValidUser = useMemo(() => isAuth && !isLoading, [isLoading, isAuth]);

  return {
    checkAuth,
    isAuth: isValidUser,
    isLoading,
  };
};
