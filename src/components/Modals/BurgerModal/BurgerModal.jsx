import { useEffect } from "react";
import { Button, Icon, Logo } from "../../shared";
import { NavLink } from "react-router-dom";
import { HeroImageContainer } from "../../Hero/HeroImageContainer";
import styles from "./BurgerModal.module.css";
import { useBodyScrollLock } from "../../../hooks";

export const BurgerModal = ({ isOpen, onClose }) => {
  useBodyScrollLock();
  useEffect(() => {
    const onEscPress = (evt) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onEscPress);

    return () => {
      document.removeEventListener("keydown", onEscPress);
    };
  }, [onClose]);
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className={styles.backdrop}>
          <div className={styles.header}>
            <Logo />
            <Button
              className={styles.closeBtn}
              type="button"
              onClick={() => onClose()}
            >
              <Icon className={styles.closeSvg} id={"close"} />
            </Button>
          </div>
          <ul className={styles.headerNavList}>
            <li className={styles.headerNavItem}>
              <NavLink
                to="/"
                className={styles.homeLink}
                onClick={() => handleLinkClick()}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.headerNavItem}>
              <NavLink
                to="/recipe/add"
                className={styles.recipeLink}
                state={{ recipe: "Add recipe" }}
                onClick={() => handleLinkClick()}
              >
                Add recipe
              </NavLink>
            </li>
          </ul>
          <HeroImageContainer />
        </div>
      )}
    </>
  );
};
