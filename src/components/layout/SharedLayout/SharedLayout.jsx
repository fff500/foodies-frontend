import { Suspense } from "react";
import { Breadcrumbs } from "../../Breadcrumbs/";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useState } from "react";
import Modal from "../../Modals/Modal/Modal";
import SignUpModal from "../../Modals/SignUpModal/SignUpModal";
import SignInModal from "../../Modals/SignInModal/SignInModal";
import LogOutModal from "../../Modals/LogOutModal/LogOutModal";
import BurgerModal from "../../Modals/BurgerModal/BurgerModal";

export const SharedLayout = () => {
  const [isModal, setIsModal] = useState(false);

  const onModalClick = () => {
    setIsModal(!isModal);
  };

  const child1 = <SignUpModal title={"SIGN UP"} />;
  const child2 = <SignInModal title={"SIGN IN"} />;
  const child3 = <LogOutModal title={"LOG OUT"} />;
  const burger = <BurgerModal title={"Burger"} />;

  return (
    <>
      <button type="button" onClick={onModalClick}>
        Open modal window - Temporary button - should be deleted
      </button>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Breadcrumbs />
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {false && <Modal children={child3} onModalClick={onModalClick} />}
      {isModal && <BurgerModal onBurgerMenuClick={onModalClick} />}
    </>
  );
};
