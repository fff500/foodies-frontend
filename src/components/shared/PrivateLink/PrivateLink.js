import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiInstance } from "../../../api/";

export const PrivateLink = ({ to = "/", Component = "" }) => {
  const navigate = useNavigate();
  const getCurrent = () =>
    apiInstance
      .get("users/current")
      .then(() => navigate(to))
      .catch(() => {
        localStorage.removeItem("token");
      });
  return (
    <>
      <button role="link" onClick={() => getCurrent()}>
        navigate
      </button>
    </>
  );
};
