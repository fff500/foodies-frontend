import { Link } from "react-router-dom";
import { Button, Icon } from "../../shared";
import styles from "./RecipePreview.module.css";
import {
  useDeleteRecipeMutation,
  useGetCurrentUserQuery,
} from "../../../redux";
import { useGenerateImageUrl } from "../../../hooks";

export const RecipePreview = ({ recipe }) => {
  const [deleteRecipe] = useDeleteRecipeMutation();

  const handleDelete = async () => {
    await deleteRecipe(recipe._id);
  };

  const { data: currentUser } = useGetCurrentUserQuery();

  const isOwner = recipe.owner._id === currentUser?._id;

  const recipeImg = useGenerateImageUrl(recipe.thumb);
  return (
    <div className={styles.recipePreview}>
      <img
        loading="lazy"
        width={75}
        height={75}
        src={`${process.env.REACT_APP_BACKEND_BASE_URL}/${recipe.thumb}`}
        alt={recipe.title}
        className={styles.image}
      />
      <div className={styles.details}>
        <h3 className={styles.title}>{recipe.title.toUpperCase()}</h3>
        <p className={styles.description}>{recipe.description}</p>
      </div>
      <div className={styles.actions}>
        <Link to={`/recipe/${recipe._id}`} className={styles.link}>
          <Icon className={styles.icon} id={"arrowUpRight"}   width={16} height={16}/>
        </Link>
        {isOwner && (
          <Button
            onClick={handleDelete}
            className={styles.deleteButton}
            type="button"
          >
            <Icon className={styles.icon} id={"trash"}  width={16} height={16}/>
          </Button>
        )}
      </div>
    </div>
  );
};
