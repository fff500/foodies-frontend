import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useState } from "react";
import Modal from "../../Modals/Modal/Modal";

export const SharedLayout = () => {
  const [isModal, setIsModal] = useState(false);

  const onModalClick = () => {
    setIsModal(!isModal);
  };

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
      {isModal && <Modal onModalClick={onModalClick} />}
    </>
  );
};
