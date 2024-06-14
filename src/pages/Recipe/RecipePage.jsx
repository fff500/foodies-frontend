import { useParams } from "react-router-dom";
import {
  useAddToFavoritesMutation,
  useGetCurrentUserQuery,
  useGetPopularRecipesQuery,
  useGetRecipeQuery,
  useRemoveFromFavoritesMutation,
} from "../../redux";
import {
  Container,
  ErrorComponent,
  LoadingSpinner,
  PopularRecipes,
  RecipeInfo,
} from "../../components";
import styles from "./RecipePage.module.css";
import { useWindowScroll } from "@mantine/hooks";
import { useEffect } from "react";

const RecipePage = () => {
  const { recipeId } = useParams();
  const [, scrollTo] = useWindowScroll();
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
  } = useGetPopularRecipesQuery();
  const {
    data: userCurrent,
    error: userCurrentError,
    isLoading: userCurrentLoading,
    isFetching: userCurrentFetching,
  } = useGetCurrentUserQuery();
  const [addToFavorites, { isError: error, isLoading: loadingFavoritesAdd }] =
    useAddToFavoritesMutation();

  const [removeFromFavorites, { isError, isLoading: loadingFavoritesRemove }] =
    useRemoveFromFavoritesMutation();
  useEffect(() => {
    scrollTo({ x: 0, y: 0 });
  }, []);
  const isLoading =
    recipeLoading ||
    recipeFetching ||
    popularRecipeLoading ||
    popularRecipeFetching ||
    userCurrentLoading ||
    userCurrentFetching;

  const errors = recipeError || popularRecipeError || userCurrentError;

  const isFavorite = userCurrent?.user?.favorites?.find(
    (id) => id === recipeData?._id
  );

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
          {recipeData && (
            <RecipeInfo
              data={recipeData}
              isFavorite={isFavorite}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          )}
          {popularRecipeData && (
            <PopularRecipes
              data={popularRecipeData}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          )}
        </div>
      </section>
    </Container>
  );
};

export default RecipePage;
