import React from "react";
import RecipeList from "../RecipeList/RecipeList";
import sprite from "../../assets/icons/sprite.svg";
import styles from "./Recipes.module.css";
import { useGetAreasQuery, useGetIngredientsQuery } from "../../redux";

export const Recipes = () => {
  const {
    data: ingredientsData = [],
    // isFetching: ingredientsIsFetching,
    // isLoading: ingredientsIsLoading,
    // isError: ingredientsIsError,
    // refetch: ingredientsRefetch,
  } = useGetIngredientsQuery();

  const {
    data: areasData = [],
    // isFetching: areasIsFetching,
    // isLoading: areasIsLoading,
    // isError: areasIsError,
    // refetch: areasRefetch,
  } = useGetAreasQuery();

  const selectedIngredient = "";
  const selectedRegion = "";
  const handleIngredientChange = (event) => {};

  const handleRegionChange = (event) => {};

  return (
    <>
      <div className={styles.container}>
        <div className={styles.recipesNav}>
          <button className={styles.backButton}>
            <svg className={styles.logo}>
              <use xlinkHref={`${sprite}#arrowLeft`} />
            </svg>
            Back
          </button>
        </div>
        <h1 className={styles.title}>DESSERTS</h1>
        <p className={styles.description}>
          Go on a taste journey, where every sip is a sophisticated creative
          chord, and every dessert is an expression of the most refined
          gastronomic desires.
        </p>
      </div>
      <select value={selectedIngredient} onChange={handleIngredientChange}>
        {ingredientsData.map((ingredient) => (
          <option key={ingredient} value={ingredient}>
            {ingredient}
          </option>
        ))}
      </select>
      <select value={selectedRegion} onChange={handleRegionChange}>
        {areasData.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      <RecipeList />
      <footer className={styles.container}>
        <nav className={styles.pagination}>
          <button className={styles.paginationButton}>1</button>
          <button className={styles.paginationButton}>2</button>
          <button className={styles.paginationButton}>3</button>
        </nav>
      </footer>
    </>
  );
};

export default Recipes;
