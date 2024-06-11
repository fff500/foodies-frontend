import React, { useState } from "react";
import classnames from "classnames";
import { Button } from "../../../shared";
import sprite from "../../../../assets/icons/sprite.svg";
import styles from "./BurgerMenu.module.css";
import { BurgerModal } from "../ModalsForTesting/BurgerModal";
import { Icon } from "../../../shared";

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
