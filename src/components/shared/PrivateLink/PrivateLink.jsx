import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInModal } from "../../Modals";
import { apiInstance } from "../../../api/api";

export const PrivateLink = ({ to = "/" }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const getCurrent = () =>
    apiInstance
      .get("users/current")
      .then(() => navigate(to))
      .catch(() => {
        setOpen(true);
        localStorage.removeItem("token");
      });

  return (
    <>
      <button role="link" onClick={() => getCurrent()}>
        Go to user
      </button>
      <SignInModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};
