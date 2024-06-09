import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useState } from "react";
import Modal from "../../Modals/Modal/Modal";
import SignUpModal from "../../Modals/SignUpModal/SignUpModal";

export const SharedLayout = () => {
  const [isModal, setIsModal] = useState(false);

  const onModalClick = () => {
    setIsModal(!isModal);
  };

  // const child = <p>P</p>;
  const child = <SignUpModal title={"SIGN UP"} />;

  return (
    <>
      <button type="button" onClick={onModalClick}>
        Open modal window - Temporary button - should be deleted
      </button>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {isModal && <Modal children={child} onModalClick={onModalClick} />}
    </>
  );
};
