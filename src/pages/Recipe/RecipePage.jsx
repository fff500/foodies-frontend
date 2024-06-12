import { useParams } from "react-router-dom";
import { useGetPopularRecipesQuery, useGetRecipeQuery } from "../../redux";
import {
  Container,
  ErrorComponent,
  LoadingSpinner,
  PopularRecipes,
  RecipeInfo,
} from "../../components";
import styles from "./RecipePage.module.css";

const RecipePage = () => {
  const { recipeId } = useParams();
  const {
    data: recipeData,
    error: recipeError,
    isLoading: recipeLoading,
    isFetching: recipeFetching,
    refetch: refetchRecipe,
  } = useGetRecipeQuery(recipeId);
  const {
    data: popularRecipeData,
    error: popularRecipeError,
    isLoading: popularRecipeLoading,
    isFetching: popularRecipeFetching,
    refetch: refetchPopularRecipe,
  } = useGetPopularRecipesQuery();

  const isLoading =
    recipeLoading ||
    recipeFetching ||
    popularRecipeLoading ||
    popularRecipeFetching;
  const errors = recipeError || popularRecipeError;

  return (
    <Container>
      <section>
        <h1 className={styles.isHidden}>Recipe</h1>
        {isLoading && (
          <div className={styles.loadingStyles}>
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && errors && <ErrorComponent onRetry={refetchRecipe} />}
        <div className={styles.sectionWrapper}>
          {recipeData && <RecipeInfo data={recipeData} />}
          {popularRecipeData && <PopularRecipes data={popularRecipeData} />}
        </div>
      </section>
    </Container>
  );
};

export default RecipePage;
