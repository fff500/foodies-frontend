import classnames from "classnames";
import { Button } from "../Button";
import styles from "./Recipes.module.css";

export const RecipePreparation = ({ instructions }) => {
  return (
    <>
      <h3 className={styles.recipeTitle}>Recipe Preparation</h3>
      <p className={styles.recipeText}>{instructions}</p>
      <div className={styles.buttonPosition}>
        <Button
          className={classnames(styles.button, styles.resetButton)}
          onClick={() => {}}
        >
          Add to favorites
        </Button>
      </div>
    </>
  );
};
