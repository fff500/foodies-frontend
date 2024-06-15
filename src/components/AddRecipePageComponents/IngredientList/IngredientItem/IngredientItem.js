import { Button } from "../../../shared";
import styles from "./IngredientItem.module.css";

export const IngredientItem = ({ label, img, measure, id, onDelete }) => (
  <li className={styles.ingredientItem}>
    <div className={styles.imageWrapper}>
      <img
        loading="lazy"
        src={img}
        alt={label}
        width={100}
        className={styles.ingredientImage}
      />
    </div>
    <div className={styles.details}>
      <div>{label}</div>
      <div>{measure}</div>
    </div>
    <Button
      type="button"
      className={styles.deleteButton}
      onClick={() => onDelete(id)}
    >
      X
    </Button>
  </li>
);
