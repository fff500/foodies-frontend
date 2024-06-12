import { Link } from "react-router-dom";
import { Button, Icon } from "../../shared";
import styles from "./RecipePreview.module.css";
import { useDeleteRecipeMutation } from "../../../redux";

export const RecipePreview = ({ recipe }) => {
  const [deleteRecipe] = useDeleteRecipeMutation();

  const handleDelete = async () => {
    await deleteRecipe(recipe._id);
  };

  return (
    <div className={styles.recipePreview}>
      <img src={recipe.image} alt={recipe.title} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.title}>{recipe.title.toUpperCase()}</h3>
        <p className={styles.description}>{recipe.description}</p>
      </div>
      <div className={styles.actions}>
        <Link to={`/recipe/${recipe._id}`} className={styles.link}>
          <Icon id={"arrowUpRight"} width={16} height={16} />
        </Link>
        <Button
          onClick={handleDelete}
          className={styles.deleteButton}
          type="button"
        >
          <Icon id={"trash"} width={16} height={16} />
        </Button>
      </div>
    </div>
  );
};
