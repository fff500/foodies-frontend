import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { useFocusTrap } from "@mantine/hooks";
import { useBodyScrollLock } from "../../../hooks";
import { Button, Icon, Logo } from "../../shared";
import { HeroImageContainer } from "../../Hero/HeroImageContainer";
import styles from "./BurgerModal.module.css";

export const BurgerModal = ({ isOpen, onClose }) => {
  useBodyScrollLock();
  const focusTrapRef = useFocusTrap();
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

  const [isShow, setIsShow] = useState(isOpen);
  const transition = useTransition(isShow, {
    from: { translateX: "100%" },
    enter: { translateX: "0%" },
    leave: { translateX: "100%" },
  });
  const onMenuClose = () => {
    setIsShow(false);
    setTimeout(() => onClose(), 400);
  };

  return (
    <>
      {transition((css, item) =>
        item ? (
          <animated.div
            style={css}
            className={styles.backdrop}
            ref={focusTrapRef}
          >
            <div className={styles.header}>
              <NavLink to="/" onClick={() => handleLinkClick()}>
                <Logo />
              </NavLink>
              <Button
                className={styles.closeBtn}
                type="button"
                onClick={() => onMenuClose()}
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
          </animated.div>
        ) : (
          ""
        )
      )}
    </>
  );
};
