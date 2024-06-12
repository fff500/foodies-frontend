import { useParams } from "react-router-dom";
import { useGetRecipeQuery } from "../../redux";
import { RecipeMainInfo } from "./RecipeMainInfo";
import { ErrorComponent, LoadingSpinner } from "../shared";
import styles from "./Recipes.module.css";

export const RecipeInfo = () => {
  const { recipeId } = useParams();
  const {
    data: recipeData,
    error: recipeError,
    isLoading: recipeLoading,
    isFetching: recipeFetching,
    refetch: refetchRecipe,
  } = useGetRecipeQuery(recipeId);

  const isLoading = recipeLoading || recipeFetching;

  return (
    <section className={styles.sectionWrapper}>
      <h1 className={styles.isHidden}>Recipe</h1>
      {isLoading && (
        <div className={styles.loadingStyles}>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && recipeError && <ErrorComponent onRetry={refetchRecipe} />}
      {recipeData && <RecipeMainInfo data={recipeData} />}
    </section>
  );
};
