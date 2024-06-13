import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyGetCurrentUserQuery } from "../../../redux";
import { SignInModal, SignUpModal } from "../../Modals";
import { apiInstance } from "../../../api/api";

export const PrivateLink = ({ to = "/" }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const getCurr = () =>
    apiInstance
      .get("users/current")
      .then(() => navigate(to))
      .catch(() => setOpen(true));

  return (
    <>
      <button role="link" onClick={() => getCurr()}>
        Go to user
      </button>
      <SignInModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};
