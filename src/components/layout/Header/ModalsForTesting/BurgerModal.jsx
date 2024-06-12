import { Link } from "react-router-dom";
import styles from "./BurgerModal.module.css";
import heroImage1 from "../../../../assets/images/hero/1x/left-hero-image.webp";
import heroImage2 from "../../../../assets/images/hero/1x/right-hero-image.webp";
import { Button, Logo } from "../../../shared";

export const BurgerModal = ({ onClose }) => {
  return (
    <div className={styles.modalBackground} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <Link to="/">
            <Logo />
          </Link>
          <Button onClick={onClose} className={styles.closeButton}>
            &times;
          </Button>
        </div>
        <div className={styles.heroImages}>
          <img src={heroImage1} alt="Hero 1" className={styles.heroImage} />
          <img src={heroImage2} alt="Hero 2" className={styles.heroImage} />
        </div>
        <div className={styles.navigation}>
          <Link to="/page1" className={styles.navLink}>
            Page 1
          </Link>
          <Link to="/page2" className={styles.navLink}>
            Page 2
          </Link>
        </div>
      </div>
    </div>
  );
};
