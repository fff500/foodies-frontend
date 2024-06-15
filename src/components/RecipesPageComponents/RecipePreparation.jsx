import { Button, PrivateLink } from "../shared";
import styles from "./Recipes.module.css";

export const RecipePreparation = ({
  data,
  isFavorite,
  addToFavorites,
  removeFromFavorites,
}) => {
  const handleFavoritesClick = (id) =>
    isFavorite ? removeFromFavorites(id) : addToFavorites(id);

  return (
    <>
      <h3 className={styles.recipeTitle}>Recipe Preparation</h3>
      <p className={styles.recipeText}>{data.instructions}</p>
      <div className={styles.buttonPosition}>
        <Button className={styles.button}>
          <PrivateLink onSuccess={() => handleFavoritesClick(data._id)}>
            <div>
              {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </div>
          </PrivateLink>
        </Button>
      </div>
    </>
  );
};
