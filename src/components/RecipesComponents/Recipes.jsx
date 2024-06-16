import styles from "./Recipes.module.css";
import { RecipeList } from "./RecipeList";
import { Button, Icon, MainTitle, Subtitle } from "../shared";
import { useEffect, useState } from "react";
import { RecipePagination } from "./RecipePagination";
import { useSearchParams } from "react-router-dom";
import { useGetRecipesQuery } from "../../redux";
import { capitalizeFirstLetter } from "../../utils";
import { RecipeFilters } from "./RecipeFilters";

export const Recipes = ({ category }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedIngredient = searchParams.get("ingredient") || "";
  const selectedArea = searchParams.get("area") || "";
  const [limit, setLimit] = useState(window.innerWidth >= 768 ? 12 : 8);

  useEffect(() => {
    const handleResize = () => {
      setLimit(window.innerWidth >= 768 ? 12 : 8);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const queryString = `?page=${currentPage}&limit=${limit}&category=${capitalizeFirstLetter(category)}&ingredient=${selectedIngredient}&area=${selectedArea}`;

  const {
    data: recipeData,
    isFetching: recipeIsFetching,
    error: recipeError,
    isLoading: recipeLoading,
    refetch: refetchRecipe,
  } = useGetRecipesQuery(queryString);
  const isLoading = recipeIsFetching || recipeLoading;
  let totalPages = 0;
  if (recipeData) {
    totalPages = Math.ceil(recipeData.totalCount / limit);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleBackClick = () => {
    searchParams.delete("category");
    searchParams.delete("area");
    searchParams.delete("ingredient");
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
          <div>
            <RecipeList
              data={recipeData}
              isLoading={isLoading}
              error={recipeError}
              refetch={refetchRecipe}
            />
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
