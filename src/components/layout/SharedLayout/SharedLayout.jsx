import { Suspense, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Header } from "../Header";
import { Footer } from "../Footer";
// TODO: will be fixed later
// import { Breadcrumbs } from "../Breadcrumbs";
import styles from "./SharedLayout.module.css";
import { SignUpModal } from "../../Modals";

export const SharedLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [open, setOpen] = useState(false);

  const onClickModal = (index) => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={onClickModal}>
        SignIn
      </button>
      <SignUpModal open={open} onClose={onClose} />
      <Header isHomePage={isHomePage} />
      <main className={!isHomePage && styles.paddingTop}>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Breadcrumbs /> */}
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
