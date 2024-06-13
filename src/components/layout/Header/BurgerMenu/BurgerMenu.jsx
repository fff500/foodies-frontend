import { useState } from "react";
import classnames from "classnames";
import { Button } from "../../../shared";
import styles from "./BurgerMenu.module.css";
import { Icon } from "../../../shared";
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
        <Icon
          width={24}
          height={24}
          id={"burger"}
          className={classnames(styles.burgerMenuIcon, {
            [styles.burgerMenuHomeIcon]: isHomePage,
          })}
        />
      </Button>

      {isModalOpen && (
        <div className={styles.modal}>
          <BurgerModal onClose={toggleModal} />
        </div>
      )}
    </div>
  );
};
