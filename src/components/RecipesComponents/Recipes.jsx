import sprite from "../../assets/icons/sprite.svg";
import styles from "./Recipes.module.css";
import { useGetAreasQuery, useGetIngredientsQuery } from "../../redux";
import { RecipeList } from "./RecipeList";

export const Recipes = () => {
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
    <>
      <div className={styles.recipesNav}>
        <button className={styles.backButton}>
          <svg className={styles.logo}>
            <use xlinkHref={`${sprite}#arrowLeft`} />
          </svg>
          Back
        </button>
      </div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>DESSERTS</h2>
        <p className={styles.description}>
          Go on a taste journey, where every sip is a sophisticated creative
          chord, and every dessert is an expression of the most refined
          gastronomic desires.
        </p>
      </div>
      <div className={styles.mainResipesContainer}>
        <div className={styles.filtersSelect}>
          {!ingredientsIsLoading && (
            <select
              value={selectedIngredient}
              onChange={handleIngredientChange}
            >
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
        <RecipeList />
      </div>
      <nav className={styles.pagination}>
        <button className={styles.paginationButton}>1</button>
        <button className={styles.paginationButton}>2</button>
        <button className={styles.paginationButton}>3</button>
      </nav>
    </>
  );
};

export default Recipes;
