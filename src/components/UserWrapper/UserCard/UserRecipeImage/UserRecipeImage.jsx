import { useGenerateImageUrl } from "../../../../hooks";
import styles from "./UserRecipeImage.module.css";

export const UserRecipeImage = ({ recipe }) => {
  const imageSrc = useGenerateImageUrl(recipe.thumb);

  return (
    <img className={styles.recipeImage} src={imageSrc} alt={recipe.title} />
  );
};
