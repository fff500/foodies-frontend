import { useGenerateImageUrl } from "../../../../hooks";
import styles from "./UserRecipeImage.module.css";

export const UserRecipeImage = ({ recipe }) => {
  const imageSrc = useGenerateImageUrl(recipe.thumb);

  return (
    <img
      loading="lazy"
      width={100}
      height={100}
      className={styles.recipeImage}
      src={imageSrc}
      alt={recipe.title}
    />
  );
};
