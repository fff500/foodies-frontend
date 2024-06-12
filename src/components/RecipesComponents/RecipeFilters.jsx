import { useGetAreasQuery, useGetIngredientsQuery } from "../../redux";
import styles from "./Recipes.module.css";

export const RecipeFilters = () => {
  const {
    data: ingredientsData = [],
    isLoading: ingredientsIsLoading,
    // isError: ingredientsIsError,
  } = useGetIngredientsQuery();

  const {
    data: areasData = [],
    isLoading: areasIsLoading,
    // isError: areasIsError,
  } = useGetAreasQuery();

  const selectedIngredient = "";
  const selectedRegion = "";
  const handleIngredientChange = (event) => {};

  const handleRegionChange = (event) => {};
  return (
    <div className={styles.filtersSelect}>
      {!ingredientsIsLoading && (
        <select value={selectedIngredient} onChange={handleIngredientChange}>
          {ingredientsData.map((ingredient) => (
            <option key={ingredient._id} value={ingredient.name}>
              {ingredient.name}
            </option>
          ))}
        </select>
      )}
      {!areasIsLoading && (
        <select value={selectedRegion} onChange={handleRegionChange}>
          {areasData.map((region) => (
            <option key={region._id} value={region.name}>
              {region.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default RecipeFilters;
