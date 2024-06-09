import React from "react";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import { useGetRecipeQuery } from "../../redux";
import { RecipeMainInfo } from "./RecipeMainInfo";
import { LoadingSpinner } from "../LoadingSpinner";
import { ErrorComponent } from "../ErrorComponent";
import styles from "./Recipes.module.css";

export const RecipeInfo = () => {
  const { recipeId } = useParams();
  const {
    data: recipeData,
    error: recipeError,
    isLoading: recipeLoading,
    isFetching: recipeFetching,
    refetch: refetchRecipe,
  } = useGetRecipeQuery("6462a8f74c3d0ddd28897fcd");
  // 6462a8f74c3d0ddd28897fbc
  const isLoading = recipeLoading || recipeFetching;

  return (
    <section className={classNames(styles.sectionWrapper)}>
      <h1 className={classNames(styles.isHidden)}>Recipe</h1>
      {isLoading && (
        <div className={classNames(styles.loadingStyles)}>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && recipeError && <ErrorComponent onRetry={refetchRecipe} />}
      {recipeData && <RecipeMainInfo data={recipeData} />}
    </section>
  );
};
