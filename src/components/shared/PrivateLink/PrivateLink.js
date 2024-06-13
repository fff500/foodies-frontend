import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiInstance } from "../../../api/";

const signtIn = "signIn";
const signtUp = "signtUp";
export const PrivateLink = ({ to = "/", Component = "" }) => {
  const [open, setOpen] = useState("");
  const navigate = useNavigate();
  const getCurrent = () =>
    apiInstance
      .get("users/current")
      .then(() => navigate(to))
      .catch(() => {
        setOpen(signtIn);
        localStorage.removeItem("token");
      });
  return (
    <>
      <button role="link" onClick={() => getCurrent()}>
        navigate
      </button>
      {/*<SignInModal*/}
      {/*  isOpen={open === signtIn}*/}
      {/*  onClose={() => setOpen("")}*/}
      {/*  onSignIn={() => setOpen(signtUp)}*/}
      {/*/>*/}
      {/*<SignUpModal*/}
      {/*  isOpen={open === signtUp}*/}
      {/*  onClose={() => setOpen("")}*/}
      {/*  onSignUp={() => setOpen(signtIn)}*/}
      {/*/>*/}
    </>
  );
};
