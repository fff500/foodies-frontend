import classnames from "classnames";
import { Button } from "../shared";
import styles from "./Recipes.module.css";

export const RecipePreparation = ({ instructions, isFavorite }) => {
  return (
    <>
      <h3 className={styles.recipeTitle}>Recipe Preparation</h3>
      <p className={styles.recipeText}>{instructions}</p>
      <div className={styles.buttonPosition}>
        <Button
          className={classnames(styles.button, styles.resetButton)}
          onClick={() => {}}
        >
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </Button>
      </div>
    </>
  );
};
