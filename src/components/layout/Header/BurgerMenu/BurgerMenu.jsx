import { useState } from "react";
import classnames from "classnames";
import { Button } from "../../../shared";
import sprite from "../../../../assets/icons/sprite.svg";
import styles from "./BurgerMenu.module.css";
import { BurgerModal } from "../../../Modals/BurgerModal";


export const BurgerMenu = ({ isHomePage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <Button
        className={styles.burgerMenuButton}
        type="button"
        onClick={toggleModal}
      >
        <svg
          width="28"
          height="28"
          className={classnames(styles.burgerMenuIcon, {
            [styles.burgerMenuHomeIcon]: isHomePage,
          })}
        >
          <use xlinkHref={`${sprite}#burger`} />
        </svg>
      </Button>

      {isModalOpen && (
        <div className={styles.modal}>
          <BurgerModal onClose={toggleModal} />
        </div>
      )}
    </div>
  );
};
