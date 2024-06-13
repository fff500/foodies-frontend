import styles from "./RecipePreview.module.css";
import { Button, Icon } from "../../shared";

export const RecipePreview = ({ recipe }) => {
  return (
    <div className={styles.recipePreview}>
      <img src={recipe.image} alt={recipe.title} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.title}>{recipe.title.toUpperCase()}</h3>
        <p className={styles.description}>{recipe.description}</p>
      </div>
      <div className={styles.actions}>
        <a href={`/recipe/${recipe._id}`} className={styles.link}>
          <Icon id={"arrowUpRight"} width={16} height={16} />
        </a>
        <Button className={styles.deleteButton} type="button">
          <Icon id={"trash"} width={16} height={16} />
        </Button>
      </div>
    </div>
  );
};
