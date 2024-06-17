import { generateImageUrl } from "../../../../utils";
import styles from "./UserRecipeImage.module.css";

export const UserRecipeImage = ({ recipe }) => {
  const imageSrc = generateImageUrl(recipe.thumb);

  return (
    <img className={styles.recipeImage} src={imageSrc} alt={recipe.title} />
  );
};
