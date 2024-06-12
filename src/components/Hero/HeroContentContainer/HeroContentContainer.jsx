import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInModal } from "../../Modals";
import styles from "./HeroContentContainer.module.css";

export const HeroContentContainer = () => {
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const navigate = useNavigate();

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeModals = () => {
    setSignInModalOpen(false);
  };

  const token = localStorage.getItem("token");
  const handleCTA = useCallback(() => {
    if (token && token.length > 20) {
      navigate("Add recipe");
    } else {
      openSignInModal();
    }
  }, [navigate, token]);
  return (
    <>
      <div className={styles.heroContentContainer}>
        <h1 className={styles.heroTitle} id="hero-title">
          Improve Your Culinary Talents
        </h1>
        <p className={styles.heroSubtitle}>
          Amazing recipes for beginners in the world of cooking, enveloping you
          in the aromas and tastes of various cuisines.
        </p>
        <button className={styles.heroSectionButton} onClick={handleCTA}>
          Add recipe
        </button>
      </div>
      {isSignInModalOpen && (
        <SignInModal isOpen={isSignInModalOpen} onClose={closeModals} />
      )}
    </>
  );
};
