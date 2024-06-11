import { IngredientsList } from "../shared";
import styles from "./Recipes.module.css";

export const RecipeIngredients = ({ ingredients }) => {
  return (
    <>
      <h3 className={styles.recipeTitle}>Ingredients</h3>
      <IngredientsList ingredients={ingredients} />
    </>
  );
};
