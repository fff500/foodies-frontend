import { useState } from "react";
import classnames from "classnames";
import { Button } from "../../../shared";
import { Icon } from "../../../shared";
import { BurgerModal } from "../../../Modals/BurgerModal";
import styles from "./BurgerMenu.module.css";

export const BurgerMenu = ({ isHomePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
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

      {isOpen && <BurgerModal onClose={toggleModal} isOpen={isOpen} />}
    </div>
  );
};
