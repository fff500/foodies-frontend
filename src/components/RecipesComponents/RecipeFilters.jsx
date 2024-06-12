import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedArea,
  setSelectedIngredient,
  useGetAreasQuery,
  useGetIngredientsQuery,
} from "../../redux";
import styles from "./Recipes.module.css";

export const RecipeFilters = () => {
  const dispatch = useDispatch();

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

  const selectedIngredient = useSelector(
    (state) => state.filters.selectedIngredient
  );
  const selectedRegion = useSelector((state) => state.filters.selectedArea);
  console.log("selectedIngredient", selectedIngredient);
  console.log("selectedRegion", selectedRegion);
  const handleIngredientChange = (event) =>
    dispatch(setSelectedIngredient(event.target.value));

  const handleRegionChange = (event) =>
    dispatch(setSelectedArea(event.target.value));

  return (
    <div className={styles.filtersSelect}>
      {!ingredientsIsLoading && (
        <select value={selectedIngredient} onChange={handleIngredientChange}>
          {ingredientsData.map((ingredient) => (
            <option key={ingredient._id} value={ingredient._id}>
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
