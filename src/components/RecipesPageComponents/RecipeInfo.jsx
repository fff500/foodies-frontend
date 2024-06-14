import { useParams } from "react-router-dom";
import { useGetRecipeQuery } from "../../redux";
import { ErrorComponent, LoadingSpinner, MainTitle } from "../shared";
import { RecipeMainInfo } from "./RecipeMainInfo";
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
      <MainTitle className={styles.isHidden}>Recipe</MainTitle>
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
