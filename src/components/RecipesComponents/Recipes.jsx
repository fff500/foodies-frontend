<<<<<<< create/RecipePagination
import styles from "./Recipes.module.css";
import { RecipeList } from "./RecipeList";
import {
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
=======
import { Button, Icon, MainTitle, Subtitle } from "../shared";
import { RecipeList } from "./RecipeList";
import RecipeFilters from "./RecipeFilters";
import styles from "./Recipes.module.css";
>>>>>>> main

export const Recipes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const selectedIngredient = searchParams.get("ingredient") || "";
  const selectedArea = searchParams.get("area") || "";
  const limit = 12;
  const {
    data: recipeData,
    error: recipeError,
    isLoading: recipeLoading,
    refetch: refetchRecipe,
  } = useGetRecipesQuery({
    page: currentPage,
    limit: limit,
    filterIngredient: selectedIngredient,
    filterArea: selectedArea,
  });
  let totalPages = 0;
  if (recipeData) {
    totalPages = recipeData.totalCount / limit;
  }
  console.log("recipeData: ", recipeData);
  const handlePageChange = (page) => {
    console.log(page);
    setCurrentPage(page);
  };
  return (
    <>
      <section className={styles.recipesSection}>
        <div className={styles.recipesNav}>
<<<<<<< create/RecipePagination
          <button className={styles.backButton}>
            <Icon
              className={styles.logo}
              id={"arrowLeft"}
              width={18}
              height={18}
            />
=======
          <Button className={styles.backButton}>
            <Icon id={"arrowLeft"} className={styles.icon} />
>>>>>>> main
            Back
          </Button>
        </div>
        <div className={styles.titleContainer}>
          <MainTitle>DESSERTS</MainTitle>
          <Subtitle>
            Go on a taste journey, where every sip is a sophisticated creative
            chord, and every dessert is an expression of the most refined
            gastronomic desires.
          </Subtitle>
        </div>
        <div className={styles.mainResipesContainer}>
          <RecipeFilters />
          {recipeLoading && (
            <div className={styles.loadingStyles}>
              <LoadingSpinner />
            </div>
          )}
          {!recipeLoading && recipeError && (
            <ErrorComponent onRetry={refetchRecipe} />
          )}
          <RecipeList data={recipeData} />
        </div>
<<<<<<< create/RecipePagination
        <RecipePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
=======
        <nav className={styles.pagination}>
          <Button className={styles.paginationButton}>1</Button>
          <Button className={styles.paginationButton}>2</Button>
          <Button className={styles.paginationButton}>3</Button>
        </nav>
>>>>>>> main
      </section>
    </>
  );
};

export default Recipes;
