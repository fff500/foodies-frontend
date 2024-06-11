import { useGetRecipeQuery } from "../../redux";
import { ErrorComponent, LoadingSpinner, RecipeCard } from "../";

import styles from "./RecipeList.module.css";

export const RecipeList = () => {
  const {
    data: recipeData,
    error: recipeError,
    isLoading: recipeLoading,
    isFetching: recipeFetching,
    refetch: refetchRecipe,
  } = useGetRecipeQuery();

  const isLoading = recipeLoading || recipeFetching;

  return (
    <div className={styles.container}>
      {isLoading && (
        <div className={styles.loadingStyles}>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && recipeError && <ErrorComponent onRetry={refetchRecipe} />}

      {recipeData &&
        recipeData.map((card, index) => (
          <RecipeCard
            key={index}
            title={card.title}
            description={card.description}
            imgSrc={card.imgSrc}
            alt={card.alt}
            author={card.author}
            avatarSrc={card.avatarSrc}
          />
        ))}
    </div>
  );
};
