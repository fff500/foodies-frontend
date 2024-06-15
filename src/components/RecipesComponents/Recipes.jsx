import styles from "./Recipes.module.css";
import { RecipeList } from "./RecipeList";
import {
  Button,
  ErrorComponent,
  Icon,
  LoadingSpinner,
  MainTitle,
  Subtitle,
} from "../shared";
import { useState } from "react";
import { RecipePagination } from "./RecipePagination";
import { useSearchParams } from "react-router-dom";
import { useGetRecipesQuery } from "../../redux";
import { RecipeFilters } from "./RecipeFilters";
import { Container } from "../layout";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

export const Recipes = ({ category }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedIngredient = searchParams.get("ingredient") || "";
  const selectedArea = searchParams.get("area") || "";
  const limit = 12;

  const queryString = `?page=${currentPage}&limit=${limit}&category=${capitalizeFirstLetter(category)}&ingredient=${selectedIngredient}&area=${selectedArea}`;

  const {
    data: recipeData,
    error: recipeError,
    isLoading: recipeLoading,
    refetch: refetchRecipe,
  } = useGetRecipesQuery(queryString);

  let totalPages = 0;
  if (recipeData) {
    totalPages = Math.ceil(recipeData.totalCount / limit);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleBackClick = () => {
    searchParams.delete("category");
    setSearchParams(searchParams);
  };

  return (
    <>
      <section className={styles.recipesSection}>
        <div className={styles.recipesNav}>
          <Button className={styles.backButton} onClick={handleBackClick}>
            <Icon id={"arrowLeft"} className={styles.arrowLeft} />
            Back
          </Button>
        </div>
        <div className={styles.titleContainer}>
          <MainTitle>{category}</MainTitle>
          <Subtitle>
            Go on a taste journey, where every sip is a sophisticated creative
            chord, and every dessert is an expression of the most refined
            gastronomic desires.
          </Subtitle>
        </div>
        <div className={styles.mainResipesContainer}>
          <RecipeFilters />
          {recipeLoading && (
            <div>
              <LoadingSpinner />
            </div>
          )}
          {!recipeLoading && recipeError && (
            <ErrorComponent onRetry={refetchRecipe} />
          )}
          <div>
            <RecipeList data={recipeData} />
            <RecipePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipes;
