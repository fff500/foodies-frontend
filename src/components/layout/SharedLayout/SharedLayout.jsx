import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Breadcrumbs } from "../Breadcrumbs";
import { useState } from "react";
import Modal from "../../Modals/Modal/Modal";
import SignUpModal from "../../Modals/SignUpModal/SignUpModal";
import SignInModal from "../../Modals/SignInModal/SignInModal";
import LogOutModal from "../../Modals/LogOutModal/LogOutModal";
import BurgerModal from "../../Modals/BurgerModal/BurgerModal";

export const SharedLayout = () => {
  /**
   * delete this block after integration
   * START
   */
  const [isModal, setIsModal] = useState(false);
  const onModalClick = () => {
    setIsModal(!isModal);
  };
  const child1 = <SignUpModal title={"SIGN UP"} />;
  const child2 = <SignInModal title={"SIGN IN"} />;
  const child3 = <LogOutModal title={"LOG OUT"} />;
  /**
   * END
   */
  return (
    <>
      {/* delete it as well  - swap isModal to open different modals*/}
      <button type="button" onClick={onModalClick}>
        Open modal window - Temporary button - should be deleted
      </button>
      {false && <Modal children={child1} onModalClick={onModalClick} />}
      {false && <Modal children={child2} onModalClick={onModalClick} />}
      {false && <Modal children={child3} onModalClick={onModalClick} />}
      {isModal && <BurgerModal onBurgerMenuClick={onModalClick} />}
      {/* delete it as well */}

      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Breadcrumbs />
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
