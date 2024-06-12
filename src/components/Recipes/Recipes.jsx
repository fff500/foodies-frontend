import { RecipeList } from "../";
import { useGetAreasQuery, useGetIngredientsQuery } from "../../redux";
import { Button, Icon } from "../shared";
import { Container } from "../layout";
import styles from "./Recipes.module.css";
import { RecipeList } from "..";

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
      <Container>
        <div className={styles.recipesNav}>
          <Button
            className={styles.backButton}
            type={"button"}
            onClick={() => window.history.back()}
          >
            <Icon
              id={"arrowLeft"}
              className={styles.logo}
              width={16}
              height={16}
            />
            Back
          </Button>
        </div>
        <h1 className={styles.title}>DESSERTS</h1>
        <p className={styles.description}>
          Go on a taste journey, where every sip is a sophisticated creative
          chord, and every dessert is an expression of the most refined
          gastronomic desires.
        </p>
      </Container>
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
      <Container>
        <nav className={styles.pagination}>
          <button className={styles.paginationButton}>1</button>
          <button className={styles.paginationButton}>2</button>
          <button className={styles.paginationButton}>3</button>
        </nav>
      </Container>
    </>
  );
};

export default Recipes;
