import classnames from "classnames";
import { Button } from "../shared";
import styles from "./Recipes.module.css";

export const RecipePreparation = ({
  data,
  isFavorite,
  addToFavorites,
  removeFromFavorites,
}) => {
  return (
    <>
      <h3 className={styles.recipeTitle}>Recipe Preparation</h3>
      <p className={styles.recipeText}>{data.instructions}</p>
      <div className={styles.buttonPosition}>
        <Button
          className={classnames(styles.button, styles.resetButton)}
          onClick={
            isFavorite
              ? () => removeFromFavorites(data._id)
              : () => addToFavorites(data._id)
          }
        >
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </Button>
      </div>
    </>
  );
};
