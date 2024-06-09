import classNames from "classnames";
import { Button } from "../Button";
import styles from "./Recipes.module.css";
export const RecipePreparation = ({ instructions }) => {
  return (
    <>
      <h3 className={classNames(styles.recipeTitle)}>Recipe Preparation</h3>
      <p className={classNames(styles.recipeText)}>{instructions}</p>
      <div
        style={{ marginTop: "12px" }}
        className={classNames(styles.buttonPosition)}
      >
        <Button
          className={classNames(styles.button, styles.resetButton)}
          onClick={() => {}}
        >
          Add to favorites
        </Button>
      </div>
    </>
  );
};
