import { useGetAreasQuery, useGetIngredientsQuery } from "../../redux";
import { useSearchParams } from "react-router-dom";
import styles from "./Recipes.module.css";

export const RecipeFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedIngredient = searchParams.get("ingredient") || "";
  const selectedArea = searchParams.get("area") || "";
  const { data: ingredientsData = [], isLoading: ingredientsIsLoading } =
    useGetIngredientsQuery();

  const { data: areasData = [], isLoading: areasIsLoading } =
    useGetAreasQuery();

  const handleIngredientChange = (event) => {
    const value = event.target.value;
    const newSearchParams = new URLSearchParams(searchParams);
    if (value) {
      newSearchParams.set("ingredient", value);
    } else {
      newSearchParams.delete("ingredient");
    }
    setSearchParams(newSearchParams);
  };
  const handleRegionChange = (event) => {
    const value = event.target.value;
    const newSearchParams = new URLSearchParams(searchParams);
    if (value) {
      newSearchParams.set("area", value);
    } else {
      newSearchParams.delete("area");
    }
    setSearchParams(newSearchParams);
  };

  return (
    <div className={styles.filtersSelect}>
      {!ingredientsIsLoading && (
        <select value={selectedIngredient} onChange={handleIngredientChange}>
          <option value="">{selectedIngredient ? "" : "Ingredients"}</option>
          {ingredientsData.map((ingredient) => (
            <option key={ingredient._id} value={ingredient._id}>
              {ingredient.name}
            </option>
          ))}
        </select>
      )}
      {!areasIsLoading && (
        <select value={selectedArea} onChange={handleRegionChange}>
          <option value="">{selectedArea ? "" : "Area"}</option>
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
