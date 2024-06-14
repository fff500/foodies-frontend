import { IngredientItem } from "./IngredientItem";
import styles from "./IngredientList.module.css";

export const IngredientList = ({ newIngredients, onDelete }) => (
  <ul className={styles.ingredientList}>
    {newIngredients.map((ingredient) => (
      <IngredientItem {...ingredient} onDelete={onDelete} key={ingredient.id} />
    ))}
  </ul>
);
