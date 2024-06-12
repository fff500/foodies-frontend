import { useSelector } from "react-redux";
import { DEFAULT_IMAGE_AVATAR_URL } from "../../constants";
import { useGetRecipesQuery } from "../../redux";
import { ErrorComponent, LoadingSpinner } from "../shared";
import { RecipeCard } from "./RecipeCard";

import styles from "./Recipes.module.css";

export const RecipeList = () => {
  const selectedIngredient = useSelector(
    (state) => state.filters.selectedIngredient
  );
  const selectedArea = useSelector((state) => state.filters.selectedArea);
  const {
    data: recipeData,
    error: recipeError,
    isLoading: recipeLoading,
    // isFetching: recipeFetching,
    refetch: refetchRecipe,
  } = useGetRecipesQuery({
    page: 1,
    limit: 12,
    filterIngredient: selectedIngredient,
    filterArea: selectedArea,
  });

  return (
    <div className={styles.resipeList}>
      {recipeLoading && (
        <div className={styles.loadingStyles}>
          <LoadingSpinner />
        </div>
      )}
      {!recipeLoading && recipeError && (
        <ErrorComponent onRetry={refetchRecipe} />
      )}

      {recipeData &&
        recipeData.map((card, index) => (
          <RecipeCard
            key={card._id}
            title={card.title}
            description={card.description}
            imgSrc={card.thumb}
            alt={card.title}
            author={card.owner.name}
            avatarSrc={card.owner.avatar || DEFAULT_IMAGE_AVATAR_URL}
          />
        ))}
    </div>
  );
};
