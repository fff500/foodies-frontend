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
  PopularRecipes,
  RecipeInfo,
} from "../../components";
import styles from "./RecipePage.module.css";
import { useWindowScroll } from "@mantine/hooks";
import { useEffect } from "react";
import { RecipePageSkeleton } from "./RecipePageSkeleton";

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

  const { data: userCurrent } = useGetCurrentUserQuery();

  const [
    addToFavorites,
    { isError: errorAddFavorites, isLoading: loadingFavoritesAdd },
  ] = useAddToFavoritesMutation();

  const [
    removeFromFavorites,
    { errorRemoveFavorites, isLoading: loadingFavoritesRemove },
  ] = useRemoveFromFavoritesMutation();

  useEffect(() => {
    scrollTo({ x: 0, y: 0 });
  }, [recipeId, scrollTo]);

  const isLoading =
    recipeLoading ||
    recipeFetching ||
    popularRecipeLoading ||
    popularRecipeFetching ||
    loadingFavoritesAdd ||
    loadingFavoritesRemove;

  const errors =
    recipeError ||
    popularRecipeError ||
    errorRemoveFavorites ||
    errorAddFavorites;

  const isFavorite = userCurrent?.favorites?.find(
    (id) => id === recipeData?._id
  );

  return (
    <Container>
      <section>
        <h1 className={styles.isHidden}>Recipe</h1>
        {isLoading && <RecipePageSkeleton />}
        {!isLoading && errors && <ErrorComponent onRetry={refetchRecipe} />}
        <div className={styles.sectionWrapper}>
          {recipeData && (
            <RecipeInfo
              isLoading={isLoading}
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
              user={userCurrent}
            />
          )}
        </div>
      </section>
    </Container>
  );
};

export default RecipePage;
